const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function Addtask() {
  if (inputbox.value === "") {
    alert("you must write some thing");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = " ";
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    console.log("clicked");
  } else {
    console.log("not clicked");
  }
});
