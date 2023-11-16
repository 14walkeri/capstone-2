const mountainsTable = document.querySelector("#mountainsTable");
const mountainsList = document.querySelector("#mountainsList");
const mountainsTableBody = document.querySelector("#mountainsTableBody");
const imagesDiv = document.querySelector("#imageMountain");
const articleStyle = document.querySelector("#articleStyle");
const timezone = document.querySelector("#timezone");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.innerText = mountain.name;
    mountainsList.appendChild(option);
  }
}
//function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng) {
  await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
    .then((e) => {
      return e.json();
    })
    .then((i) => {
      sunrise.innerText = `Sunrise ${i.results.sunrise}`;
      sunset.innerText = `Sunset ${i.results.sunset}`;
    });
}

function loadMountainsTable(lat, lng) {
  mountainsTableBody.innerHTML = "";

  imagesDiv.innerHTML = "";
  articleStyle.style.display = "none";
  const id = mountainsList.value;

  if (id) {
    mountainsTable.style.display = "block";
    imagesDiv.style.display = "block";
    articleStyle.style.display = "block";
  } else {
    mountainsTable.style.display = "none";
  }

  for (const mountain of mountainsArray) {
    let coords = mountain.coords;
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
      cell6.innerText = coords.lat;
      let cell7 = row.insertCell(6);
      cell7.innerText = coords.lng;

      let image = document.createElement("img");

      image.src = `images/${mountain.img}`;

      image.alt = mountain.name;

      imagesDiv.appendChild(image);
      getSunsetForMountain(coords.lat, coords.lng);

      // div = x.then((e) => e.results.sunrise.sunset);
    }
  }
}

// function returnSunsetForMountain(lat, lng) {
//   let sunset = getSunsetForMountain(`where ${lng} is a longitude and ${lat} is a lattiude`);
//   let row = parksTableBody.insertRow(-1);
//   let cell8 = row.insertCell(7);
//   cell8.innerText = sunset;
// }
loadMountains();
mountainsList.onchange = loadMountainsTable;

//console.log(getSunsetForMountain(`where 44.320686 is a longitude and -71.291742 is a lattiude`));
// getSunsetForMountain(`where ${lng} is a longitude and ${lat} is a lattiude`);
