const tacinput = document.querySelector("#tac-input");
const tacoutput = document.querySelector("#tac-output");

tacinput.addEventListener("change", () => {
  tacoutput.children.tactitle.innerText = findTitle(tacinput.value);
  tacoutput.children.tacarticle.innerText = tacinput.value;
});

function findTitle(text) {
  return /--(.*)--/g.text;
}
