const source = document.getElementById("parent");
const childElement = source.querySelectorAll("div");

let dragged;

for (let i = 0; i < childElement.length; i++) {
	childElement[i].draggable = "true";
}

source.addEventListener("drag", (event) => {
  console.log("dragging");
});

const target = document.querySelectorAll(".item");
target.addEventListener(
  "dragover",
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
);