var simulations = document.getElementsByClassName("simulation")
var classics = document.getElementsByClassName("classic")

for (let s of simulations) {
    let title = document.createElement("div")
    title.className = "title"
    title.textContent = "SIMULATION DOMAIN"
    s.prepend(title)
}

for (let c of classics) {
    let title = document.createElement("div")
    title.className = "title"
    title.textContent = "CLASSIC DOMAIN"
    c.prepend(title)
}