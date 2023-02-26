import './style.css'

const styleBtn: HTMLElement = document.getElementById("styleChangeBtn")!;
const bodyElement: any = document.getElementsByTagName("body")[0];
let isStyleSet1: boolean = true;

styleBtn.addEventListener("click", toggleStyle);

function toggleStyle(): void {
  if (isStyleSet1) {
    bodyElement.style.backgroundColor = "white";
    bodyElement.style.color = "black";
    isStyleSet1 = false;
  } else {
    bodyElement.style.backgroundColor = "black";
    bodyElement.style.color = "white";
    isStyleSet1 = true;
  }
}

