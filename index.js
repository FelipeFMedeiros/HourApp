var msg = window.document.getElementById("msg");
var img = window.document.getElementById("imagem");
var msg2 = window.document.getElementById("msg2");
var data = new Date();
var hora = data.getHours();
var min = data.getMinutes();

// Variáveis e const necessárias
var timeBtn = document.querySelector(".validacao");
var timeBtnInput = document.querySelector(".time input");
const timeInput = document.querySelector(".timeRes");
const resetBtn = document.querySelector(".reset");

// Função que desabiita o botão de enviar por um tempo
function disableSendButton() {
  timeBtn.disabled = true;
  setTimeout(function () {
    timeBtn.disabled = false;
  }, 1000);
  timeBtn.style.transform = "none";
  timeBtn.style.boxShadow = "none";
}
// Função que desabiita o botão de resetar por um tempo
function disableResetButton() {
  resetBtn.disabled = true;
  setTimeout(function () {
    resetBtn.disabled = false;
  }, 1000);
  resetBtn.style.transform = "none";
  resetBtn.style.boxShadow = "none";
}

function carregar() {
  msg.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${min}</strong> minutos.`;

  // Boa Madrugada!
  if (hora >= 0 && hora <= 4) {
    img.src = "images/madrugada-1-4.png";
    msg2.innerText = "Boa Madrugada!";
    document.body.style.background = "#17130f";
  }
  // O sol está nascendo!
  else if (hora >= 5 && hora <= 6) {
    img.src = "images/nascer-do-sol.png";
    msg2.innerText = "O sol está nascendo!";
    document.body.style.background = "#fd901c";
  }
  // Bom Dia!
  else if (hora >= 7 && hora < 12) {
    img.src = "images/fotomanha.png";
    msg2.innerText = "Bom Dia!";
    document.body.style.background = "#787999";
  }
  // Hora do Almoço!
  else if (hora >= 12 && hora <= 13) {
    img.src = "images/hora-do-almoco.png";
    msg2.innerText = "Hora do Almoço!";
    document.body.style.background = "#fe7734";
  }
  // Boa Tarde!
  else if (hora >= 14 && hora <= 16) {
    img.src = "images/fototarde.png";
    msg2.innerText = "Boa Tarde!";
    document.body.style.background = "#355edb";
  }
  // Está de Tardezinha!
  else if (hora >= 17 && hora <= 18) {
    img.src = "images/tardezinha.png";
    msg2.innerText = "Está de tardezinha!";
    document.body.style.background = "#c84401";
  }
  // Boa Noite!
  else if (hora >= 19 && hora <= 21) {
    img.src = "images/fotonoite.png";
    msg2.innerText = "Boa Noite!";
    document.body.style.background = "#362b48";
  } // Já é tarde da noite!
  else if (hora >= 22 && hora <= 24) {
    img.src = "images/tarde-da-noite.png";
    msg2.innerText = "Já é tarde da noite!";
    document.body.style.background = "#09080d";
  } else {
    img.src = "images/404.png";
    console.log("Hora inexistente!" + hour);
  }
}

// Evento ao apertar enter
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && event.target === timeBtnInput) {
    event.preventDefault();
    timeBtn.click();
  }
});

// Declarando as variáveis globais
let hourModded;
let minModded;

let saveHour = hora;
let saveMin = min;

// Evento ao apertar o botão
timeBtn.addEventListener("click", () => {
  // Valores de hora e minuto juntos
  const inputValue = timeInput.value;
  // Remove espaços em branco
  const inputValue2 = timeInput.value.trim();
  // Separando os valores de hora e minuto
  [hourModded, minModded] = inputValue2
    .split(":")
    .map((part) => parseInt(part));

  // Verifica se a caixa de hora está vazia ou tem algum caractere sem ser número
  if (inputValue === "" || isNaN(hourModded) || isNaN(minModded)) {
    console.log("Insira uma hora válida!");
    disableSendButton();
    return;
  } else {
    console.log(`Valor inserido: ${inputValue}`);
    console.log(`Hora: ${hourModded} Minutos: ${minModded}`);

    hora = hourModded;
    min = minModded;

    carregar();
    disableSendButton();
  }
});

// Evento ao apertar o botão resetar
resetBtn.addEventListener("click", () => {
  var data2 = new Date();
  var hora2 = data2.getHours();
  var min2 = data2.getMinutes();

  hora = hora2;
  min = min2;
  console.log(`Tempo resetado: Agora são ${hora2}:${min2}`);

  carregar();
  disableResetButton();
});
