// html elements for list
const statesList = document.getElementById("statesList");
const parkTypeList = document.getElementById("parkTypeList");
//html elements for table
const parksTableBody = document.getElementById("parksTableBody");
const parksTable = document.getElementById("parksTable");
//html elements radio
const statesRadio = document.getElementById("statesRadio");
const typeRadio = document.getElementById("typeRadio");
const allRadio = document.getElementById("allRadio");
//html elements label
const labelForStates = document.getElementById("labelForStates");
const labelForType = document.getElementById("labelForType");
// Load by Location
function loadDropDownStatesList() {
  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.textContent = location;
    statesList.appendChild(option);
  }
}
//table to load data
function loadParksTable() {
  parksTableBody.innerHTML = "";

  const state = statesList.value;

  if (state) {
    parksTable.style.display = "block";
  } else {
    parksTable.style.display = "none";
  }
  for (const locationInfo of nationalParksArray) {
    if (locationInfo.State == state) {
      let row = parksTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = locationInfo.LocationName;
      let cell2 = row.insertCell(1);
      cell2.innerText = locationInfo.Address;
      let cell3 = row.insertCell(2);
      cell3.innerText = locationInfo.City;
      let cell4 = row.insertCell(3);
      cell4.innerText = locationInfo.State;
      let cell5 = row.insertCell(4);
      cell5.innerText = locationInfo.ZipCode;
      let cell6 = row.insertCell(5);
      cell6.innerText = locationInfo.Phone;
      let cell7 = row.insertCell(6);
      cell7.innerText = locationInfo.Fax;
      let cell8 = row.insertCell(7);
      cell8.innerText = locationInfo.Latitude;
      let cell9 = row.insertCell(8);
      cell9.innerText = locationInfo.Longitude;
      // let cell10 = row.insertCell(9);
      // cell10.innerText = locationInfo.Visit;
      if (locationInfo.Visit) {
        var link = document.createElement("a");
        let cell10 = row.insertCell(9);
        link.href = locationInfo.Visit;
        link.innerText = locationInfo.LocationName;
        cell10.appendChild(link);
      }
    }
  }
}
//load by park type
function loadDropdownByParkType() {
  for (const parkType of parkTypesArray) {
    let option = document.createElement("option");
    option.textContent = parkType;
    option.value = parkType;
    parkTypeList.appendChild(option);
  }
}
function loadParksTableData() {
  parksTableBody.innerHTML = "";

  const type = parkTypeList.value.toLocaleLowerCase();
  var parkArrayFiltered = nationalParksArray.filter((e) => e.LocationName.toLocaleLowerCase().includes(type));
  if (type) {
    parksTable.style.display = "block";
  } else {
    parksTable.style.display = "none";
  }
  for (const locationInfoNew of parkArrayFiltered) {
    {
      let row = parksTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = locationInfoNew.LocationName;
      let cell2 = row.insertCell(1);
      cell2.innerText = locationInfoNew.Address;
      let cell3 = row.insertCell(2);
      cell3.innerText = locationInfoNew.City;
      let cell4 = row.insertCell(3);
      cell4.innerText = locationInfoNew.State;
      let cell5 = row.insertCell(4);
      cell5.innerText = locationInfoNew.ZipCode;
      let cell6 = row.insertCell(5);
      cell6.innerText = locationInfoNew.Phone;
      let cell7 = row.insertCell(6);
      cell7.innerText = locationInfoNew.Fax;
      let cell8 = row.insertCell(7);
      cell8.innerText = locationInfoNew.Latitude;
      let cell9 = row.insertCell(8);
      cell9.innerText = locationInfoNew.Longitude;
      //   let cell10 = row.insertCell(9);
      //   cell10.innerText = locationInfoNew.Visit;
      if (locationInfoNew.Visit) {
        var link = document.createElement("a");
        let cell10 = row.insertCell(9);
        link.href = locationInfoNew.Visit;
        link.innerText = locationInfoNew.LocationName;
        cell10.appendChild(link);
      }
    }
  }
}

//function for radio buttons to hide

//show function for states
function parkTypeSelectorStates() {
  const stateRadio = statesRadio.value;

  if (stateRadio) {
    labelForStates.style.display = "block";
    statesList.style.display = "block";
    labelForType.style.display = "none";
    parkTypeList.style.display = "none";
    parksTable.style.display = "none";
  } else {
    labelForStates.style.display = "none";
    statesList.style.display = "none";
  }
}
//show function for type
function parkTypeSelectorType() {
  const type = typeRadio.value;

  if (type) {
    labelForType.style.display = "block";
    parkTypeList.style.display = "block";
    labelForStates.style.display = "none";
    statesList.style.display = "none";
    parksTable.style.display = "none";
  } else {
    labelForType.style.display = "none";
    parkTypeList.style.display = "none";
  }
}

//function for third radio button to always show all parks
function showParksTableData() {
  parksTableBody.innerHTML = "";
  const state = allRadio.value;
  if (state) {
    parksTable.style.display = "block";
    labelForType.style.display = "none";
    parkTypeList.style.display = "none";
    labelForStates.style.display = "none";
    statesList.style.display = "none";
  } else {
    parksTable.style.display = "none";
  }
  for (const locationInfoNew of nationalParksArray) {
    {
      let row = parksTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = locationInfoNew.LocationName;
      let cell2 = row.insertCell(1);
      cell2.innerText = locationInfoNew.Address;
      let cell3 = row.insertCell(2);
      cell3.innerText = locationInfoNew.City;
      let cell4 = row.insertCell(3);
      cell4.innerText = locationInfoNew.State;
      let cell5 = row.insertCell(4);
      cell5.innerText = locationInfoNew.ZipCode;
      let cell6 = row.insertCell(5);
      cell6.innerText = locationInfoNew.Phone;
      let cell7 = row.insertCell(6);
      cell7.innerText = locationInfoNew.Fax;
      let cell8 = row.insertCell(7);
      cell8.innerText = locationInfoNew.Latitude;
      let cell9 = row.insertCell(8);
      cell9.innerText = locationInfoNew.Longitude;
      //   let cell10 = row.insertCell(9);
      //   cell10.innerText = locationInfoNew.Visit;
      if (locationInfoNew.Visit) {
        var link = document.createElement("a");
        let cell10 = row.insertCell(9);
        link.href = locationInfoNew.Visit;
        link.innerText = locationInfoNew.LocationName;
        cell10.appendChild(link);
      }
    }
  }
}
//wired stuff
statesList.onchange = loadParksTable;
parkTypeList.onchange = loadParksTableData;
loadDropDownStatesList();
loadDropdownByParkType();
allRadio.onclick = showParksTableData;
statesRadio.onclick = parkTypeSelectorStates;
typeRadio.onclick = parkTypeSelectorType;
