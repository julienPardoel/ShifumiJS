const buttons = document.querySelectorAll("button");
let score = 0;
let scoreRobot = 0;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let result = "";

    // logique du jeu
    if (joueur === robot) {
      result = "Egalité !";
    } else if (
      (joueur === "Pierre" && robot === "Ciseaux") ||
      (joueur === "Ciseaux" && robot === "Feuille") ||
      (joueur === "Feuille" && robot === "Pierre") ||
      joueur === "Puit"
    ) {
      result = "Gagné";
      score++;
      console.log(score);
    } else {
      result = "Perdu";
      scoreRobot++;
    }
    document.querySelector(".response").innerHTML = `${result}`;
    document.querySelector(".you").innerHTML = `${joueur}`;
    document.querySelector(".robot").innerHTML = `${robot}`;
    document.querySelector(".score-result").innerHTML = `${score}`;
    document.querySelector(".score-robot").innerHTML = `${scoreRobot}`;
  });
}
