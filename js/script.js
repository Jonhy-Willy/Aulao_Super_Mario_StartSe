const mario = window.document.querySelector(".super-mario");
const pipe = window.document.querySelector(".pipe-game");

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition.left}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${pipePosition}px`;

        mario.src = "./Images/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px";

        clearInterval(loopGame)

    }

}, 10);

window.document.addEventListener("keydown", jump);