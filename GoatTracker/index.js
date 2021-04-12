const toph = {
  name: "Toph",
  age: 1,
  brushesToday: 0,
  image:
    "https://st4.depositphotos.com/14435026/20983/i/600/depositphotos_209833190-stock-photo-single-black-white-tan-bearded.jpg",
  badGoat: false,
};

document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector(".goat-name").innerText = toph.name
  document.querySelector(".goat-image").innerText = toph.image
  document.querySelector(".goat-age").innerText = toph.age
  document.querySelector(".goat-brushes").innerText = toph.brushesToday
  document.querySelector(".goat-status").innerText = toph.badGoat



  document.querySelector('.brush-button').addEventListener('click', ()=>{
    let count = document.querySelector(".goat-brushes").innerText
    ++ count
    document.querySelector(".goat-brushes").innerText = count
  })
  document.querySelector('.goat-toggle').addEventListener('click', ()=>{
    let status = document.querySelector(".goat-status").innerText
    status === "false" ? status="true" : status="false"
    console.log(status)
    document.querySelector(".goat-status").innerText = status
  })
})

// document.querySelector('.brush-button')