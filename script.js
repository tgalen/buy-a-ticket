const seatContainer = document.getElementById("seat-container");
const rows = ["A", "B", "C", "D", "E", "F", "G"];
const seatNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const seatAvailability = 50;
console.log(seatAvailability);

rows.forEach((row) => {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    seatNums.forEach((seat) => {
        let newSeat = document.createElement("div");
        let seatValue = Math.random() * 100;
        seatValue > seatAvailability ? newSeat.setAttribute("class", "available-seat") : newSeat.setAttribute("class", "unavailable-seat");
        newSeat.innerHTML = `${row}${seat}`;
        newRow.appendChild(newSeat);
    });
    seatContainer.appendChild(newRow);
});
