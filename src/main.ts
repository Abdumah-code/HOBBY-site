import './style.css'

const styleBtn: HTMLElement = document.getElementById("styleChangeBtn")!;
const bodyElement: any = document.getElementsByTagName("body")[0];
let isStyleSet1: boolean = true;
const bodyStyle = bodyElement.style;

styleBtn.addEventListener("click", toggleStyle);

function toggleStyle(): void {
  if (isStyleSet1) {
    bodyStyle.backgroundColor = "white";
    bodyStyle.color = "black";
    isStyleSet1 = false;
  } else {
    bodyStyle.backgroundColor = "black";
    bodyStyle.color = "white";
    isStyleSet1 = true;
  }
}

