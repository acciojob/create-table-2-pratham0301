function createTable() {
  const table = document.getElementById("myTable");
  table.innerHTML = "";

  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  const rows = parseInt(rn);
  const cols = parseInt(cn);

  if (isNaN(rows) || isNaN(cols)) {
    alert("Please enter valid numeric values.");
    return;
  }

  if (rows <= 0 || cols <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}