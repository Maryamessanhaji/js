function increment() {
  let inputValue = document.getElementById("number");
  return (inputValue.value = parseInt(inputValue.value) + 1);
}

function decrement() {
  let inputValue = document.getElementById("number");
  return (inputValue.value = parseInt(inputValue.value) - 1);
}
function callName() {
  let name = document.getElementById("name").value;
  document.getElementById("titre").innerText += " " + name;
}
function toggleFlex() {
  let container = document.getElementById("container");

  container.style.flexDirection =
    container.style.flexDirection === "column" ? "column-reverse" : "column";
}
