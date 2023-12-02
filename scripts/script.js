/*creating anime list to randomly pick them later*/

const anime = [
  "pokemon",
  "hunter x hunter",
  "bleach",
  "fairy tail",
  "one piece",
  "demon slayer",
];
// const anime = "abcdefghijklmnopqrstuvwxzy0123456789!@#$%^&*";

/* creating random color list for raindrop */

// const animeColor = [
//   "#22ff00",
//   "#00ffee",
//   "#2600ff",
//   "#9000ff",
//   "#ff005d",
//   "#eaff00",
// ];

/* function to pick random anime title for each raindrop */
function randomAnime() {
  let randomAnime = anime[Math.floor(Math.random() * anime.length)];
  return randomAnime;
}

/* function to pick random color for each raindrop */

// function randomColor() {
//   let randomColor = animeColor[Math.floor(Math.random() * animeColor.length)];
//   return randomColor;
// }

function rain() {
  /* grabbing the div cloud and creating an element div to insert it in cloud element */
  let animeCloud = document.querySelector(".cloud");
  let rainDrop = document.createElement("div");

  /* randomize the anime raindrop position, font-size, and animation duration  */
  let animePosition = Math.floor(Math.random() * 380);
  let animeSize = Math.random() * 0.5;
  let animeDuration = Math.random() * 1;

  /*adding class anime-name to each raindrop and add each div to the cloud div */
  rainDrop.classList.add("anime-name");
  animeCloud.appendChild(rainDrop);

  /* changing each raindrop text to the random anime title picked by randomAnime() function */
  rainDrop.innerText = randomAnime();

  /* changing each raindrop color to the random color picked by randomColor() function */
  //   rainDrop.style.color = randomColor();

  /* adding the anime raindrop position, font-size, and animation duration picked by Math function to raindrop style */
  rainDrop.style.left = animePosition + "px";
  rainDrop.style.fontSize = 0.5 + animeSize + "em";
  rainDrop.style.animationDuration = 1 + animeDuration + "s";

  /* adding a timeout function for 2 seconds to remove one of the raindrop children from cloud div or it will be difficult for the browser to render them all */
  setTimeout(function () {
    animeCloud.removeChild(rainDrop);
  }, 2000);
}

/* adding an interval of 0.2 seconds to run the rain() function so there are multiple raindrops created */
setInterval(function () {
  rain();
}, 20);
