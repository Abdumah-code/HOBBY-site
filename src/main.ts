import './style.css'

const styleBtn: HTMLElement = document.getElementById("styleChangeBtn")!;
const bodyElement: any = document.getElementsByTagName("body")[0];
const headerElement: any = document.getElementById("header");
const footerElement: any = document.getElementById("footer");

let isStyleSet1: boolean = true;
const bodyStyle = bodyElement.style;

styleBtn.addEventListener("click", toggleStyle);

function toggleStyle(): void {
  if (isStyleSet1) {
    bodyStyle.backgroundImage = "url('./src/images/manga-bg.jpg')";
    bodyStyle.color = "black";
    headerElement.textContent = "This is what manag looks like";
    footerElement.textContent = "";
    styleBtn.textContent = "Switch";
    isStyleSet1 = false;
  } else {
    bodyStyle.backgroundImage = "url('./src/images/anime-bg.jpg')";
    bodyStyle.color = "white";
    footerElement.textContent = "This is what anime looks like";
    headerElement.textContent = "";
    styleBtn.textContent = "Switch";
    isStyleSet1 = true;
  }
}

