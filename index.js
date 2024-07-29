"use strict";

let orderedName = [];
let mixedName = [];

async function getNames() {
    orderedName = [];

    let JSON = await fetch('namen.json');

    if (!JSON.ok) {
        alert('File konnte nicht abgerufen werden!');
        return;
    }

    try {
        let obj = await JSON.json();

        obj.namen.forEach(element => {
            orderedName.push(element);
        });

    } catch (error) {
        alert("File konnte nicht geparst werden!");
        alert(error);
    }
}

function mixNames() {

    mixedName = [];

    for (let i = 0; i < (orderedName.length); i++) {

        let deleted = false;

        do {

            deleted = false;

            let randomNum = Math.floor(Math.random() * orderedName.length);

            if (orderedName[randomNum] === undefined) { deleted = true; }

            else {
                mixedName.push(orderedName[randomNum]);

                delete orderedName[randomNum];
            }

        } while (deleted === true);

    }
}

function createTableContent() {

    const table = document.getElementById('tableId');

    for (let i = 0; i < orderedName.length; i++) {

        const tr = document.createElement('tr');

        for (let z = 0; z < 2; z++) {

            const td = document.createElement('td');

            if (i === 26 && z === 1) {
                const name = mixedName[0];
                td.innerText = name;
            }
            else {
                const name = mixedName[i + z];
                td.innerText = name;
            }

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

const btnMix = document.getElementById('btnMix');
const btnNewLoad = document.getElementById('btnNewLoad');

btnMix.disabled = true;

btnMix.onclick = function () {
    mixNames();
    createTableContent();
    btnMix.disabled = true;
    // btnNewLoad.disabled = false;
    alert('Bei erneutem Mischen fürs erste bitte die Seite neu laden.');
}

btnNewLoad.onclick = function () {
    getNames();
    btnNewLoad.disabled = true;
    btnMix.disabled = false;
}