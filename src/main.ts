import './style.css'

const styleBtn: HTMLElement = document.getElementById("styleChangeBtn")!;

styleBtn.addEventListener("click", changeEverything);

function changeEverything(): void{
  document.body.style.backgroundColor = "blue";
}