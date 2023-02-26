import './style.css'

const styleBtn: HTMLElement = document.getElementById("styleChangeBtn")!;
const bodyElement: HTMLElement = document.getElementsByTagName("body")[0];
const headerElement: HTMLElement = document.getElementsByTagName("header")[0];
const footerElement: HTMLElement = document.getElementsByTagName("footer")[0];

let isStyleSet1: boolean = true;
const bodyStyle = bodyElement.style;

styleBtn.addEventListener("click", toggleStyle);

function setHeaderText(headerText: string): void {
  headerElement.textContent = headerText;
  footerElement.textContent = "";
}

function setFooterText(footerText: string): void {
  footerElement.textContent = footerText;
  headerElement.textContent = "";
}

function toggleStyle(): void {
  if (isStyleSet1) {
    bodyStyle.backgroundImage = "url('./src/images/manga-bg.jpg')";
    bodyStyle.color = "black";
    setHeaderText("This is what manga looks like (My fav hobby)");
    styleBtn.textContent = "Switch";
  } else {
    bodyStyle.backgroundImage = "url('./src/images/anime-bg.jpg')";
    bodyStyle.color = "white";
    setFooterText("This is what anime looks like (My second fav)");
    styleBtn.textContent = "Switch";
  }
  isStyleSet1 = !isStyleSet1;
}

