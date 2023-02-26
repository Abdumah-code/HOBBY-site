import './style.css'

const styleBtn: HTMLElement = document.getElementById("styleChangeBtn")!;
const bodyElement: any = document.getElementsByTagName("body")[0];
let isStyleSet1: boolean = true;
const bodyStyle = bodyElement.style;

styleBtn.addEventListener("click", toggleStyle);

function toggleStyle(): void {
  if (isStyleSet1) {
    bodyStyle.backgroundImage = "url('./src/images/manga-bg.jpg')";
    bodyStyle.color = "black";
    isStyleSet1 = false;
  } else {
    bodyStyle.backgroundImage = "url('./src/images/anime-bg.jpg')";
    bodyStyle.color = "white";
    isStyleSet1 = true;
  }
}

