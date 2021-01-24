let newRow = document.getElementsByTagName("input");
let sampleTable = document.getElementById("sampleTable");

function insert_Row() {
  let row = sampleTable.insertRow(0);
  let cell = row.insertCell(0);
  let cell1 = row.insertCell(1);
  cell.innerHTML = "newRow cell1";
  cell1.innerHTML = "newRow cell2";

}

newRow.addEventListener("click", insert_Row());