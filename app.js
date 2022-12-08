const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let result = "";
    if (joueur === robot) {
      result = "égalité !";
    } else if (
      (joueur === "Pierre" && robot === "Ciseaux") ||
      (joueur === "Ciseaux" && robot === "Feuille") ||
      (joueur === "Feuille" && robot === "Pierre") ||
      joueur === "Puit"
    ) {
      result = "gagné !";
    } else {
      result = "perdu !";
    }
    console.log(`${joueur} vs ${robot} = ${result}`);
    document.querySelector(".response").innerHTML = `${result}`;
    document.querySelector(".you").innerHTML = `${joueur}`;
    document.querySelector(".robot").innerHTML = `${robot}`;
  });
}
