const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");
const adviceGenrateBtn = document.getElementById("advice-genrator");

adviceGenrateBtn.addEventListener("click", () => {
	fetch("https://api.adviceslip.com/advice")
		.then(response => response.json())
		.then(data => {
			setNewAdvice(data);});
});

const setNewAdvice = (data) => {
	adviceId.textContent = data.slip.id;
	adviceContent.textContent = data.slip.advice;
};