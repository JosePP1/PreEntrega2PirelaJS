const cartasArray = [
    {
        name: "brain", img: "./images/brain.svg",
    },
    {
        name: "check-file", img: "./images/check-file.svg",
    },
    {
        name: "dev-ops", img: "./images/dev-ops.svg",
    },
    {
        name: "heart", img: "./images/heart.svg",
    },
    {
        name: "robot", img: "./images/robot.svg",
    },
    {
        name: "stock-ticker", img: "./images/stock-ticker.svg",
    },
    {
        name: "brain", img: "./images/brain.svg",
    },
    {
        name: "check-file", img: "./images/check-file.svg",
    },
    {
        name: "dev-ops", img: "./images/dev-ops.svg",
    },
    {
        name: "heart", img: "./images/heart.svg",
    },
    {
        name: "robot", img: "./images/robot.svg",
    },
    {
        name: "stock-ticker", img: "./images/stock-ticker.svg",
    },
]

cartasArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid");
const resultadoDisplay = document.querySelector("#result")
let cartasElegidas = []
let cartasElegidasId = []
const cartasFallidas = []
const cartasGanadas = []

function crearTablero() {
    for (let i = 0; i < cartasArray.length; i++) {
        const carta = document.createElement("img")
        carta.setAttribute("src", "images/code.svg")
        carta.setAttribute("data-id", i)
        carta.addEventListener("click", flipCard)
        gridDisplay.append(carta)
    }
}

/*crearTablero()*/

function iniciar() {
    let iniciarJuego = false;

    while (!iniciarJuego) {
        const entradaUsuario = prompt('Escribe "iniciar" para iniciar el juego:');
        if (entradaUsuario && entradaUsuario.toLowerCase() === 'iniciar') {
            crearTablero();
            iniciarJuego = true;
        } else {
            alert('Debes escribir "iniciar" para iniciar el juego.');
        }
    }
}

function checkMatch() {
    const cartas = document.querySelectorAll("img")
    const opcionUnoId = cartasElegidasId[0]
    const opcionDosId = cartasElegidasId[1]

    if (opcionUnoId === opcionDosId) {
        cartas[opcionUnoId].setAttribute("src", "./images/code.svg")
        cartas[opcionDosId].setAttribute("src", "./images/code.svg")
        alert("¡Seleccionaste la misma carta!")
    }

    else if (cartasElegidas[0] == cartasElegidas[1]) {
        alert("¡Encontraste un par!")
        cartas[opcionUnoId].setAttribute("src", "./images/Untitled.png")
        cartas[opcionDosId].setAttribute("src", "./images/Untitled.png")
        cartas[opcionUnoId].removeEventListener("click", flipCard)
        cartas[opcionDosId].removeEventListener("click", flipCard)
        cartasGanadas.push(cartasElegidas)
    } else {
        cartas[opcionUnoId].setAttribute("src", "./images/code.svg")
        cartas[opcionDosId].setAttribute("src", "./images/code.svg")
        cartasFallidas.push(+1)
        console.log("Agregar a Fallidas")
        console.log(cartasFallidas)
        alert("¡Intenta de nuevo!")
    }
    resultadoDisplay.innerHTML = cartasGanadas.length
    cartasElegidas = []
    cartasElegidasId = []

    if (cartasFallidas.length === 4) {
        alert("¡Perdiste, intenta de nuevo!")
        location.reload()
    }

    if (cartasGanadas.length === cartasArray.length / 2) {
        resultadoDisplay.innerHTML = "¡Felicitaciones, acertaste todas!"
    }
}

function flipCard() {
    const cartaId = this.getAttribute("data-id")
    cartasElegidas.push(cartasArray[cartaId].name)
    this.setAttribute("src", cartasArray[cartaId].img)
    cartasElegidasId.push(cartaId)
    console.log(cartasElegidas)
    console.log(cartasElegidasId)
    if (cartasElegidas.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

iniciar();