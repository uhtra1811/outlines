const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const blink = document.querySelector(".blink");
const page = document.querySelector(".page");
const title = document.querySelector(".title");

blink.addEventListener("click", () => {
	setInterval(makeBlink, 1000);
});

var isLight = true;
function makeBlink(){
	if(isLight == true){
		page.className = "page dark";
		title.className = "title light";
		isLight = false;
	}else{
		page.className = "page light";
		title.className = "title";
		isLight = true;
	}
}

dark.addEventListener("click", () => {
	page.className = "dark";
});

light.addEventListener("click", () => {
	page.className = "light";
});
