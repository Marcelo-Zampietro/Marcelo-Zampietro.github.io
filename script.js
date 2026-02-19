const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
    fetch("https://formspree.io/f/xbdaajej", {
        method: "POST",
        body: JSON.stringify({ message: "Yes clicked!" }),
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).catch(err => console.error("Notification failed", err));

  question.innerHTML = "Good choice.";
  gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjBrc2p1ajdraG5meWRtcWNzbXRiajFuMm8weHRkd3MxNzdocXFoaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Km3JPJqGgJej8fNQMc/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();  

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "CLAIM PRIZE!!";
  letsGoBtn.style.width = "200px";

  document.querySelector(".btn-group").appendChild(letsGoBtn);

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    alert(`Never click random buttons!!`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);






