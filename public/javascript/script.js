// c16973fb95ce5fef92f8dfc71401e536
const botao = document.getElementById("btn")

botao.addEventListener('click', async (e)=>{
    e.preventDefault()
    const cidade = document.getElementById("cidade").value.trim()
    if(cidade != "") {
    const res = await fetch(`http://localhost:3000/weather?city=${cidade}`)
    const data = await res.json()

    console.log(data)
    const pTemperatura = document.getElementById("temperatura")
    const pUmidade = document.getElementById("umidade")

    pTemperatura.innerText = `Temperatura: ${data.data.main.temp }°C`
    pUmidade.innerText = `Umidade: ${data.data.main.humidity }%`

    }
})