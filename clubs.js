let teams = [
  ["", "Drużyna", "pkt", "mecze", "12"],
  ["1", "Pogoń Szczecin", "24", "12"],
  ["2", "Wisła Płock", "22", "12"],
  ["3", "Piast Gliwice", "21", "12"],
  ["4", "Jagiellonia Białystok", "20", "12"],
  ["5", "Cracovia", "20", "12"],
  ["6", "Lechia Gdańsk", "20", "12"],
  ["7", "Legia Warszawa", "20", "12"],
  ["8", "lech Poznań", "18", "12"],
  ["12", "Śląsk Wrocław", "18", "12"],
  ["10", "Zagłębie Lubin", "15", "12"],
  ["11", "Raków Częstochowa", "15", "12"],
  ["12", "Górnik Zabrze", "14", "12"],
  ["13", "Wisła Kraków", "11", "12"],
  ["14", "Arka Gdynia", "10", "12"],
  ["15", "Korona Kielce", "5", "12"],
  ["16", "ŁKS Łódź", "8", "12"]
];

let tableNreate = () => {
  let tabelaDiv = document.getElementById("tabela");
  let table = document.createElement("table");
  tabelaDiv.appendChild(table);
  table.id = "tables";

  for (let i = 0; i < 17; i++) {
    let trc = document.createElement("tr");
    trc.classList.add("trClass");

    for (let j = 0; j < 4; j++) {
      let tdc = document.createElement("td");
      tdc.classList.add("tdClass");
      trc.appendChild(tdc);
      let tdClasses = document.getElementsByClassName("tdClass");
    }
    tables.appendChild(trc);
  }
};
tableNreate();

let table = document.getElementById("tables");
let tableRows = () => {
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerHTML = teams[i][j];
    }
  }
};
tableRows();

let colors = () => {
  table.rows[1].style.background = "#00b500";
  table.rows[2].style.background = "#d151200";
  table.rows[3].style.background = "#d151200";
  for (let i = 14; i < table.rows.length; i++) {
    table.rows[i].style.background = "#fa0808";
  }
};
colors();

window.onscroll = function() {
  navbarSticky();
};

let nav = document.getElementById("navigation");
let navPosition = nav.offsetTop;

let navbarSticky = () => {
  if (window.pageYOffset >= navPosition) {
    $(navigation).addClass("stickyMenu");
  } else {
    $(navigation).removeClass("stickyMenu");
  }
};

let clicked = true;
let colorBtn = () => {
  $(navbarBtn).click(function() {
    if (clicked == true) {
      $(navbarBtn).css({
        background: "yellow"
      });
      clicked = false;
    } else {
      clicked = true;
      $(navbarBtn).css({
        background: "red"
      });
    }
  });
};
colorBtn();

//Zawodnicy Arka Gdynia

let arkaZawodnicy = () => {
  let xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackArka");
      let tableN = document.createElement("table");
      $(napad).append(tableN);
      tableN.classList.add("tableClass");

      players.napastnicyArka.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldArka");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyArka.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceArka");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyArka.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperArka");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeArka.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
arkaZawodnicy();

let cracoviaZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackCracovia");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyCracovia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldCracovia");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyCracovia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceCracovia");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyCracovia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperCracovia");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeCracovia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
cracoviaZawodnicy();

let gornikZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackGornik");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyGornik.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldGornik");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyGornik.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceGornik");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyGornik.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperGornik");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeZabrze.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
gornikZawodnicy();

let jagielloniaZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackJagiellonia");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyJagiellonia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldJagiellonia");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyJagiellonia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceJagiellonia");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyJagiellonia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperJagiellonia");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeJagiellonia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
jagielloniaZawodnicy();

let koronaZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackKorona");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyKorona.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldKorona");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyKorona.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceKorona");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyKorona.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperKorona");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeKorona.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
koronaZawodnicy();

let lechZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackLech");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyLech.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldLech");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyLech.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceLech");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyLech.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperLech");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeLech.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
lechZawodnicy();

let lechiaZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackLechia");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyLechia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldLechia");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyLechia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceLechia");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyLechia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperLechia");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeLechia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
lechiaZawodnicy();

let legiaZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackLegia");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyLegia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldLegia");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyLegia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceLegia");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyLegia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperLegia");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeLegia.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
legiaZawodnicy();

let lksZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackLKS");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyLKS.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldLKS");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyLKS.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceLKS");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyLKS.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperLKS");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeLKS.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
lksZawodnicy();

let piastZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackPiast");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyPiast.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldPiast");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyPiast.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defencePiast");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyPiast.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperPiast");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzePiast.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
piastZawodnicy();

let pogonZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackPogon");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyPogon.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldPogon");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyPogon.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defencePogon");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyPogon.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperPogon");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzePogon.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
pogonZawodnicy();

let rakowZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackRakow");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyRakow.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldRakow");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyRakow.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceRakow");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyRakow.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperRakow");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeRakow.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
rakowZawodnicy();

let slaskZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackSlask");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicySlask.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldSlask");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicySlask.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceSlask");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncySlask.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperSlask");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeSlask.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
slaskZawodnicy();

let wislaKZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackWislaK");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyWislaKrakow.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldWislaK");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyWislaKrakow.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceWislaK");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyWislaKrakow.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperWislaK");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeWislaKrakow.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
wislaKZawodnicy();

let wislaPZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackWislaP");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyWislaPlock.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldWislaP");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyWislaPlock.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceWislaP");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyWislaPlock.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperWislaP");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeWislaPlock.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
wislaPZawodnicy();

let zaglebieZawodnicy = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (this.status == 200) {
      let players = JSON.parse(this.responseText);

      let napad = document.getElementById("attackZaglebie");
      let tableN = document.createElement("table");
      tableN.classList.add("tableClass");
      $(napad).append(tableN);

      players.napastnicyZaglebie.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableN).append(output);
      });

      let pomoc = document.getElementById("midfieldZaglebie");
      let tableP = document.createElement("table");
      tableP.classList.add("tableClass");
      $(pomoc).append(tableP);

      players.pomocnicyZaglebie.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableP).append(output);
      });

      let obrona = document.getElementById("defenceZaglebie");
      let tableO = document.createElement("table");
      tableO.classList.add("tableClass");
      $(obrona).append(tableO);

      players.obroncyZaglebie.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableO).append(output);
      });

      let bramka = document.getElementById("goalkeeperZaglebie");
      let tableB = document.createElement("table");
      tableB.classList.add("tableClass");
      $(bramka).append(tableB);

      players.bramkarzeZaglebie.forEach(x => {
        let output = "";
        output += `<tr><td>${x.name}</td><td>${x.previousClub}</td></tr>`;
        $(tableB).append(output);
      });
    }
  };
  xhr.open("GET", "players.json", true);
  xhr.send();
};
zaglebieZawodnicy();
