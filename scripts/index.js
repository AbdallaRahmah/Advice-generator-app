const adviceId = document.getElementById("advice-id");
const genrateBtn = document.getElementById("advice-genrator");
const adviceContent = document.getElementById("advice-content");

const API = "https://api.adviceslip.com/advice";

async function addAdviceDom() {
  try {
    const res = await fetch(API, {
      headers: {
        accept: "application/json",
      },
    });

    const data = await res.json();

    setNewAdvice(data);
  } catch (err) {
    console.error(err);
  }
}

genrateBtn.addEventListener("click", addAdviceDom);

const setNewAdvice = (data) => {
  adviceId.textContent = data.slip.id;
  adviceContent.textContent = data.slip.advice;
};
