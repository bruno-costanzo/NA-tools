const tacinput = document.querySelector("#tac-input");
const tacoutput = document.querySelector("#tac-output");

tacinput.addEventListener("change", () => {
  tacoutput.children.tactitle.innerText = findTitle(tacinput.value);
  tacoutput.children.tacarticle.innerText = findText(tacinput.value);
});

function findTitle(text) {
  console.log(text);
  return /-{2}.*-{2}/g.exec(text).toString();
}

function findText(text) {
  return /^(-{2}.*-{2})/g.exec(text).toString();
}
