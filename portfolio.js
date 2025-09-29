const lines = [
  "I'm moin khan, a final-year B.Tech Computer Science student with a passion for building modern, responsive websites. I specialize in C++,HTML, CSS, and JavaScript, and I'm currently learning full-stack development to bring my ideas to life",
  "I'm always curious about how things work on the web and love turning complex problems into clean, user-friendly designs. My goal is to become a software Engineer that know by everyone.I believe learning by doing is the best way, so I build, break, and rebuild until it clicks.",
  "When I'm not coding, you'll find me exploring design inspiration or learning something new about tech",
  "I am Analytical Passionate and Unstoppable"
];

let i = 0;
let j = 0;
let currentLine = '';
let displayedText = '';
const speed = 50;
const output = document.getElementById("typewriter");

function type() {
  if (!output)
  {
    console.error('Element with id "typewriter" not found.');
    return;
  }
  if (i < lines.length) {
    if (j < lines[i].length) {
      currentLine += lines[i].charAt(j);
      output.innerHTML = displayedText + currentLine + "<span class='blink'>|</span>";
      j++;
      setTimeout(type, speed);
    }else {
      displayedText += currentLine + "<br>";
      currentLine = '';
      j = 0;
      i++;
      setTimeout(type, 800);
    }
  } else {
    output.innerHTML = displayedText; // final output without cursor
  }
}

type();
