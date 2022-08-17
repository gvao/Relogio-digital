
const $visores = document.getElementsByClassName("visor")
const visores = [...$visores]

const inserirHoras = () => {
    
    const agora = new Date().toLocaleDateString("pt-Br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })

    const [ data, horas ] = agora.split(" ")
    const  {
         0:hora, 1:minuto, 2:segundo
    } = horas.split(":")

    const obj = {
        hora, minuto, segundo
    }
    
    visores.map(el => {
        document.getElementById(el.id).innerHTML = obj[el.id]
    })
}

setInterval(inserirHoras, 1000)