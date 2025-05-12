"use strict";

let orderedName = [];
let mixedName = [];

function fillList() {
  const inputField = document.getElementById("inputField");

  orderedName.push(inputField.value);

  const list = document.getElementById("list");

  const childs = document.getElementsByTagName("p");

  if (childs.length !== 0) {
    for (let i = 0; i < childs.length; i++) {
      const child = childs[i];
      list.removeChild(child);
    }
  }
  const p = document.createElement("p");

  orderedName.forEach((name) => {
    p.innerText += name + ", ";
  });
  list.appendChild(p);

  document.getElementById("inputField").value = "";
}

function mixNames() {
  mixedName = [];

  for (let i = 0; i < orderedName.length; i++) {
    let deleted = false;

    do {
      deleted = false;

      let randomNum = Math.floor(Math.random() * orderedName.length);

      if (orderedName[randomNum] === undefined) {
        deleted = true;
      } else {
        mixedName.push(orderedName[randomNum]);

        delete orderedName[randomNum];
      }
    } while (deleted === true);
  }

  console.log(mixedName);
}

function createTableContent() {
  const table = document.getElementById("tableId");

  for (let i = 0; i < orderedName.length; i++) {
    const tr = document.createElement("tr");

    for (let z = 0; z < 2; z++) {
      const td = document.createElement("td");

      if (i === orderedName.length - 1 && z === 1) {
        const name = mixedName[0];
        td.innerText = name;
      } else {
        const name = mixedName[i + z];
        td.innerText = name;
      }

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

const btnMix = document.getElementById("btnMix");
// const btnNewLoad = document.getElementById("btnNewLoad");

// btnMix.disabled = true;

btnMix.onclick = function () {
  mixNames();
  createTableContent();
  //   btnMix.disabled = true;
  // btnNewLoad.disabled = false;
  alert("Bei erneutem Mischen fürs erste bitte die Seite neu laden.");
};

// btnNewLoad.onclick = function () {
//   getNames();
//   btnNewLoad.disabled = true;
//   btnMix.disabled = false;
// };

btnPush.onclick = function () {
  fillList();
};
