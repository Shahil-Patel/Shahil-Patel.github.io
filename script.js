const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const skillDes = document.querySelector('.skillDescription');
var des = [7]; /*I just declared it this way so I could easily compare lengths of the descriptions */
des[0] = "Java is my most experienced language. I first took a Java course in my Freshman year (2016) and since then I have taken a total of 4 year long high school courses that pertain to Java: CS 1, AP Computer Science A, Android Development, and Data Structures. During my sophomore year I obtained a 5 on the APCS A exam and this year I have coded in various data structures and am familiar with their efficiency and memory usage. See my GitHub for my data structures work";
des[1] = "C# is one of my more recent languages. The course that specifically pertained to C# is my Unity VR/3D/2D development course that I took during my Senior year of High School. I am familiar with all the nuisances that differentiate C# and Java (for example tuples, dictionaries, variable fields) and consider C# to be one of my primary programming languages. All of my Unity-based projects are coded in C#. See my GitHub for my C# work";
des[2] = "HTML 5 is one of my more \"fun\" languages that aren't really used in an academic setting. I completely self-taught myself HTML 5 during the quarantine-break of March/April/May and even completely wrote this portfolio website from scratch using HTML 5 as a base. I am still not that familiar with all the little nuances and standard practices of HYML 5 but I am confident that I will be able to catch on them and apply them to my websites very soon";
des[3] = "CSS 3 is one of my more \"fun\" languages that aren't really used in an academic setting. I completely self-taught myself CSS 3 during the quarantine-break of March/April/May and even completely wrote this portfolio website from scratch using CSS 3 to style it to my liking. I am still not that familiar with all the little nuances and stylistic formalities of CSS 3 but I am confident that I will be able to catch on them and apply them to my websites very soon";
des[4] = "JavaScript is one of my more \"fun\" languages that aren't really used in an academic setting yet. I completely self-taught myself JavaScript during the quarantine-break of March/April/May and even completely wrote this portfolio website from scratch using JavaScript for my more dynamic parts. I am still not that familiar with all the little nuances of JavaScript and it is definitely the most foreign but it is the language I am working the hardest to learn";
des[5] = "Android studio is the main IDE that I use to create my Android Apps. I took a course on Android Studio called CS Topics: Mobile App Development my Junior year of High School where we used Java and the IDE to create various projects and apps. The course went in-depth on threads, layouts, all forms of dynamic inputs, using APIs, JSON formats, and how to parse through/create JSON files. My final project was a fake stock portfolio app that used a real time stock API to simulate a portfolio. See my GitHub for my Android work";
des[6] = "Unity is the main engine that I use to create my Virtual Reality, 3D, and 2D projects. I took a course on Unity called CS Topics: Virtual Reality & Game Design where we used C# and the engine to create various games and projects ranging from a 2D platformer game to more open-ended projects such as VR bowling and our own take on \"Space Invaders.\" The course also went into Photon real-time multiplayer for Unity helping us create a game where a real-time lobby and tag game could be played. See my GitHub for my Unity work";
let count = 1;
let desCount = 0;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
nextBtn.addEventListener('click', () => {
  if (count >= carouselImages.length - 1) {
    return;
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out"
  count++;
  desCount++;
  carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
  skillDes.innerHTML = des[desCount % des.length];
});
prevBtn.addEventListener('click', () => {
  if (count <= 0) {
    return;
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out"
  count--;
  desCount--;
  carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
  if (desCount < 0) {
    desCount = 6;
  }
  skillDes.innerHTML = des[desCount % des.length];
});
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[count].className === 'lastClone') {
    carouselSlide.style.transition = "none";
    count = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
  }
  if (carouselImages[count].className === 'firstClone') {
    carouselSlide.style.transition = "none";
    count = carouselImages.length - count;
    carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
  }
});
const projectCarouselSlide = document.querySelector('.project-carousel-slide');
const projectCarouselImages = document.querySelectorAll('.project-carousel-slide img');
const projectPrevBtn = document.querySelector('.project-prevBtn');
const projectNextBtn = document.querySelector('.project-nextBtn');
let projCount = 1;
let projDesCount = 0;
const projDescription = document.querySelector('.projectDescription');
var projDes = [10];
projDes[0] = "This is my VR Fruit Ninja Game where you use a VR headset and controllers to slice various fruit that pop up all around you. Based on \"Fruit Ninja\" by Halfbrick Studios";
projDes[1] = "This is my fully functional Binary Tree data structure. Also includes preOrder, postOrder, and inOrder transversal methods";
projDes[2] = "This is my Android (fake) portfolio app where you can pick what stocks to buy and sell using the realtime AlphaVantage API in JSON and create a portfolio";
projDes[3] = "This is my fully functional Doubly Linked List data structure that can be used for any data type and contains all standard list methods";
projDes[4] = "This is my Unity 3D Meteor Shower game. Large rocks fall from top of screen and user must avoid these asteroids in order to earn points";
projDes[5] = "This is my Julia Set Fractal creator which uses Java's JPanel library to allow user to change various aspects of the complex equation and to display the fractal";
projDes[6] = "This is my Unity 2D Side Scroller game which is a rudimentary cartoonish game where you are a knight and have to fight against undead monsters";
projDes[7] = "This is my Android Weather App which provides local weather based on zip code input and displays a seven day forcast based on the JSON data";
projDes[8] = "This is my Minesweeper game which is based on the original Microsoft version of Minesweeper. It runs the same way and has various different themes";
projDes[9] = "This is my MS Paint Copy which uses Java's JPanel and Graphic library to allow the user to draw with various colors, settings, and tools";
const projectSize = projectCarouselImages[0].clientWidth;
projectCarouselSlide.style.transform = 'translateX(' + (-projectSize * projCount) + 'px)';
projectNextBtn.addEventListener('click', () => {
  if (projCount >= projectCarouselImages.length - 1) {
    return;
  }
  projectCarouselSlide.style.transition = "transform 0.6s ease-in-out"
  projCount++;
  projDesCount++;
  projectCarouselSlide.style.transform = 'translateX(' + (-projectSize * projCount) + 'px)';
  projDescription.innerHTML = projDes[projDesCount % projDes.length];
});
projectPrevBtn.addEventListener('click', () => {
  if (projCount <= 0) {
    return;
  }
  projectCarouselSlide.style.transition = "transform 0.6s ease-in-out"
  projCount--;
  projDesCount--;
  if (projDesCount < 0) {
    projDesCount = 9;
  }
  console.log("AsdASD");

  projDescription.innerHTML = projDes[projDesCount % projDes.length];
  projectCarouselSlide.style.transform = 'translateX(' + (-projectSize * projCount) + 'px)';
});
projectCarouselSlide.addEventListener('transitionend', () => {
  if (projectCarouselImages[projCount].className === 'project-lastClone') {
    projectCarouselSlide.style.transition = "none";
    projCount = projectCarouselImages.length - 2;
    projectCarouselSlide.style.transform = 'translateX(' + (-projectSize * projCount) + 'px)';
  }
  if (projectCarouselImages[projCount].className === 'project-firstClone') {
    projectCarouselSlide.style.transition = "none";
    projCount = projectCarouselImages.length - projCount;
    projectCarouselSlide.style.transform = 'translateX(' + (-projectSize * projCount) + 'px)';
  }
});