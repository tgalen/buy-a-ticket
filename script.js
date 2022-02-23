const seatContainer = document.getElementById("seat-container");
const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const seatNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const seatAvailability = 50; // approx % of seats unavailable
console.log(seatAvailability);
let numOfTixPrompt = prompt("Please select the number of tickets to purchase.");
let numOfTix = Number(numOfTixPrompt);
console.log(numOfTix);

let changeSeatStatus = (divID) => {
    let clickedSeat = document.getElementById(`${divID}`);
    clickedSeat.classList.contains("available-seat") ? clickedSeat.setAttribute("class", "unavailable-seat") : clickedSeat.setAttribute("class", "available-seat");
};

rows.forEach((row) => {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    seatNums.forEach((seat) => {
        let newSeat = document.createElement("div");
        let seatValue = Math.random() * 100;
        seatValue > seatAvailability ? newSeat.setAttribute("class", "available-seat") : newSeat.setAttribute("class", "unavailable-seat");
        newSeat.innerHTML = `${row}${seat}`;
        newSeat.setAttribute("id", `${row}${seat}`);
        newSeat.setAttribute("onclick", `changeSeatStatus(${row}${seat})`);
        newRow.appendChild(newSeat);
    });
    seatContainer.appendChild(newRow);
});
