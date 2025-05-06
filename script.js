const lyrics = [
  { time: 0, text: "Ev çok uzaklarda" },
  { time: 5, text: "Ve ben evden çok uzaktayım" },
  { time: 10, text: "Düşmanlarım yakında" },
  { time: 15, text: "Ama hâlâ dokunamıyorum" },
  { time: 20, text: "En çok istediğim şeye" },
  { time: 27, text: "Ve en karanlık saatimde" },
  { time: 33, text: "Parlar en parlak ışığım" },
  { time: 39, text: "Ve ismimi söylediklerinde" },
  { time: 45, text: "Sadece seni tanıdığım için minnettarım, bebeğim" },
  { time: 53, text: "Bu benim hatam değildi" },
  { time: 58, text: "Boşluğu hiç dolduramamak mı?" },
  { time: 63, text: "Nefret değil, aşktı" },
  { time: 68, text: "En çok sevdiğim şeyi inciten" },
  { time: 74, text: "Ve en karanlık saatimde" },
  { time: 80, text: "Parlar en parlak ışığım" },
  { time: 86, text: "Ve güvercinler uçtuğunda" },
  { time: 92, text: "Sadece seni tanıdığım için minnettarım, bebeğim" }
];

const audio = document.getElementById('audio');
const container = document.getElementById('lyrics-container');
let currentLine = 0;

audio.addEventListener('timeupdate', () => {
  if (currentLine < lyrics.length && audio.currentTime >= lyrics[currentLine].time) {
    container.innerText = lyrics[currentLine].text;
    currentLine++;
  }
});
