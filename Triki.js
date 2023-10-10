const options = document.querySelectorAll("button");
let shift = 0;

const board = [];

window.addEventListener("DOMContentLoaded", pressButton);

function pressButton() {
  options.forEach((item, idx) =>
    item.addEventListener("click", (event) => pressedButton(event, idx))
  );
}

function pressedButton(event, pos) {
  let x = "X";
  let o = "O";
  let currentBtn = event.target;

  if (shift % 2 === 0) {
    currentBtn.style.backgroundColor = "#8400ff";
    currentBtn.textContent = x;
    board[pos] = x;
    shift++;
  } else {
    currentBtn.style.backgroundColor = "#038dff";
    currentBtn.textContent = o;
    board[pos] = o;
    shift++;
  }

  if (validateGame()) {
    Swal.fire({
      title: "GANADOR: " + event.target.textContent,
      width: 400,
      padding: "3rem",
      color: "#000000",
    });
  } else {
    if (shift === 9) {
      Swal.fire({
        title: "Vuelve a INICIAR, hubo un EMPATE",
        width: 400,
        padding: "3rem",
        color: "#000000",
      });
    }
  }
}

function validateGame() {
  if (board[0] === board[1] && board[0] === board[2] && board[0]) {
    return board[0];
  } else if (board[3] === board[4] && board[3] === board[5] && board[3]) {
    return board[3];
  } else if (board[6] === board[7] && board[6] === board[8] && board[6]) {
    return board[6];
  } else if (board[0] === board[3] && board[0] === board[6] && board[0]) {
    return board[0];
  } else if (board[1] === board[4] && board[1] === board[7] && board[1]) {
    return board[1];
  } else if (board[2] === board[5] && board[2] === board[8] && board[2]) {
    return board[2];
  } else if (board[0] === board[4] && board[0] === board[8] && board[0]) {
    return board[0];
  } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
    return board[2];
  } else return false;
}