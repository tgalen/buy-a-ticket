const seatContainer = document.getElementById("seat-container");
const rows = ["A", "B", "C", "D", "E", "F", "G"];
const seatNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
rows.forEach((row) => {
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    seatNums.forEach((seat) => {
        let newSeat = document.createElement("div");
        newSeat.setAttribute("class", "seat");
        newRow.appendChild(newSeat);
    });
    seatContainer.appendChild(newRow);
});
