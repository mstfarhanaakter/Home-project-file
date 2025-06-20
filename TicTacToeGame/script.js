

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")

let turn0 = true; //player0, playerX

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// for reset button
const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

// each boxes press 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("the box was clicked")
        // box.innerText = "Abcd"
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

//disable boxes after winning
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;

    };
};

// start new reset game 
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        };
};

//showwinner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

};



const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            };
        };
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
