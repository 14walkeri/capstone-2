const mountainsTable = document.querySelector("#mountainsTable");
const mountainsList = document.querySelector("#mountainsList");
const mountainsTableBody = document.querySelector("#mountainsTableBody");
function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.innerText = mountain.name;
    mountainsList.appendChild(option);
  }
}

function loadMountainsTable() {
  mountainsTableBody.innerHTML = "";

  const id = mountainsList.value;

  if (id) {
    mountainsTable.style.display = "block";
  } else {
    mountainsTable.style.display = "none";
  }

  for (const mountain of mountainsArray) {
    if (mountain.name == id) {
      let row = mountainsTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = mountain.name;
      let cell2 = row.insertCell(1);
      cell2.innerText = mountain.elevation;
      let cell3 = row.insertCell(2);
      cell3.innerText = mountain.effort;
      let cell4 = row.insertCell(3);
      cell4.innerText = mountain.img;
      let cell5 = row.insertCell(4);
      cell5.innerText = mountain.desc;
      let cell6 = row.insertCell(5);
      cell6.innerText = mountain.coords;
      let cell7 = row.insertCell(6);
      cell7.innerText = mountain.lat;
    }
  }
}

mountainsList.onchange = loadMountainsTable;
loadMountains();
