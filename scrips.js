const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I knew it 😍";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


// Quiz soruları
const quizQuestions = [
    { q: "1)en sevdığım tatlı", options: ["kazanddıbı","sutlu baklava","kerhane tatlısı","sutlac"], answer: "sutlu baklava" },
    { q: "2)ilk bulusmada yedigimiz yemek??", options: ["sushi","balik ekmek","makarna-kofte","sutlac"], answer: "makarna-kofte" },
    { q: "3)Bir gun benim yuzume telefonu kapattiginda sana nasil tepki vermistim", options: ["canin sagolsun askimm","bir sey yoktur umarim","sen insan degilsin","niye kapattin diye(trip)"], answer: "niye kapattin diye(trip)" },
    { q: "4)gsabah kalktigimda ilk ne yazarim", options: ["gunaydinaskimm","gunaydin","g","askimm uyumusum:("], answer: "askimm uyumusum:(" },
    { q: "5)sensiz gecen gecelerde naparim", options: ["seni dusunurum","overthink","play game","akanzi"], answer: "overthink" },
    { q: "6)bir hayvan olsam ne olurdum", options: ["kedi","kopek","aslan(aslanin esi de aslandir)","ayi"], answer: "aslan(aslanin esi de aslandir)" },
    { q: "7)yapmadin diye cingar cikardigim, olay yarattigim konu neydi?", options: ["istedigim kiyafeti giymedin diye","kahve almadin diye","turtali tatli yapmadin diye(ismini unuttum)","&#128512;"], answer: "turtali tatli yapmadin diye(ismini unuttum)" },
    { q: "8)biz ne zaman evlenecegiz", options: ["1 sene sonra","2 sene sonra","4 sene sonra","hic"], answer: "2 sene sonra" },
    { q: "9) kizimizin ismini ne koyariz sence( ahu siklarda yok)", options: ["melike","MERVE(dsfadfsa)","asel","nursema"], answer: "asel" },
    { q: "10)benim en cok hosuma giden iltifat", options: ["pasam","aslanim","cengaver","tosunum"], answer: "pasam" },
];

// DOM elementleri
const quizPopup = document.getElementById("quizPopup");
const quizContent = document.getElementById("quizContent");
const scoreBtn = document.getElementById("scoreBtn");
const scoreDisplay = document.getElementById("scoreDisplay");

// Yes butonuna basınca popup aç
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I knew it 😍";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

    // Popup'u görünür yap
    quizPopup.style.display = "block";
    renderQuiz();
});

// Quiz sorularını ekrana basma
function renderQuiz() {
    quizContent.innerHTML = "";
    quizQuestions.forEach((q, idx) => {
        const div = document.createElement("div");
        div.style.marginBottom = "10px";
        div.innerHTML = `<strong>${q.q}</strong>`;
        q.options.forEach(opt => {
            div.innerHTML += `
        <label style="display:block; margin:3px 0;">
          <input type="radio" name="q${idx}" value="${opt}"> ${opt}
        </label>
      `;
        });
        quizContent.appendChild(div);
    });
}

// Puan hesaplama
scoreBtn.addEventListener("click", () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        if(selected && selected.value === q.answer) score += 10;
    });

    let message = ""; // ek mesaj
    if(score < 40) {
        message = "😢 yaziklar olsun";
    } else if(score >= 40 && score < 90) {
        message = "👍 pfff";
    } else if(score >= 90) {
        message = "🏆 askim benimmmm bravo";
    }

    scoreDisplay.textContent = `Puanınız: ${score}/100\n${message}`;
});

