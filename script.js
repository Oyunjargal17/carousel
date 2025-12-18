const person_img = document.getElementById("person_img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const random = document.getElementById("random");

const reviews = [
  {
    name: "Anar",
    job: "Teacher",
    img: "./image/anar.jpg",
    text: "Ta manai surgaltand suugaad uzeerei l gej heley dee!",
  },
  {
    name: "Bold",
    job: "Teacher",
    img: "./image/bold.jpg",
    text: "1000 beeriin aylal 1 alhamaas eheldeg.",
  },
  {
    name: "Kelly",
    job: "Student",
    img: "./image/kelly.jpg",
    text: "Ene surgalt minii amidraldaa hurungu oruulsan hamgiin tom hurungu bailaa.",
  },
  {
    name: "Khaliun",
    job: "Student",
    img: "./image/khaliun.jpg",
    text: "Ta surahad hezee ch oroitohgui shuu!",
  },
  {
    name: "Zaya",
    job: "Student",
    img: "./image/zaya.jpg",
    text: "Ene surgaltand suusanaaraa ta haramsahgui gej helmeer baina.",
  },
];

let currentIndex = 0;
const showPerson = (index) => {
  const person = reviews[index];
  document.getElementById("person_img").src = person.img;
  document.getElementById("author").innerHTML = person.name;
  document.getElementById("job").innerHTML = person.job;
  document.getElementById("info").innerHTML = person.text;
};
document.getElementById("next").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > reviews.length - 1) {
    currentIndex = 0;
  }
  showPerson(currentIndex);
});
document.getElementById("prev").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  showPerson(currentIndex);
});

document.getElementById("random").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * reviews.length);
  showPerson(randomIndex);
});

showPerson(currentIndex);
