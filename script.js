const seatContainer = document.getElementById("seat-container");
const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const seatNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const seatAvailability = 50; // approx % of seats unavailable
const maxNumTix = 6;
let numOfSeatsSelected = 0;
let confirmBtn = document.getElementById("confirm-purchase");
if (numOfSeatsSelected < 1) {
    confirmBtn.style.pointerEvents = "none";
}

let changeSeatStatus = (divID) => {
    let clickedSeat = document.getElementById(divID);
    let seatToReserve = document.createElement("div");
    let display = document.getElementById("selected-display");
    let savedSeat = document.getElementById("selected-display").getElementsByClassName("saved-seat");
    if (clickedSeat.classList.contains("available-seat")) {
        clickedSeat.setAttribute("class", "selected-seat");
        seatToReserve.innerHTML = `${divID}`;
        display.appendChild(seatToReserve);
        seatToReserve.setAttribute("id", `reserved${divID}`);
        seatToReserve.setAttribute("class", "saved-seat");
    } else {
        clickedSeat.setAttribute("class", "available-seat");
        let removeReservedSeat = document.getElementById(`reserved${divID}`);
        removeReservedSeat.parentNode.removeChild(removeReservedSeat);
    }
    if (savedSeat.length > maxNumTix) {
        document.getElementById(`${savedSeat[0].innerHTML}`).setAttribute("class", "available-seat");
        display.removeChild(savedSeat[0]);
    }
    numOfSeatsSelected = savedSeat.length;
    if (numOfSeatsSelected < 1) {
        confirmBtn.style.pointerEvents = "none";
        confirmBtn.style.opacity = "0.5";
    } else {
        confirmBtn.style.pointerEvents = "auto";
        confirmBtn.style.opacity = "1";
    }
    console.log(numOfSeatsSelected);
};

rows.forEach((row) => {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    seatNums.forEach((seat) => {
        let newSeat = document.createElement("div");
        let seatValue = Math.random() * 100;
        if (seatValue > seatAvailability) {
            newSeat.setAttribute("class", "available-seat");
            newSeat.setAttribute("onclick", `changeSeatStatus("${row}${seat}")`);
        } else {
            newSeat.setAttribute("class", "unavailable-seat");
        }
        newSeat.innerHTML = `${row}${seat}`;
        newSeat.setAttribute("id", `${row}${seat}`);
        newRow.appendChild(newSeat);
    });
    seatContainer.appendChild(newRow);
});
