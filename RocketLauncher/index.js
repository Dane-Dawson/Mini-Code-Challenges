const URL = 'https://rocket-launcher-api.herokuapp.com/rocket/rocket_info';
const upgrades = document.querySelector('.rocket-upgrades')
const tests = document.querySelector('.rocket-tests')
const goForLaunch = document.querySelector('.go-for-launch')

fetch(URL)
.then(res=>res.json())
.then(rocketData => renderRocketData(rocketData))


function renderRocketData(rocket){
    
    const rocketName = document.querySelector('.rocket-name')
    rocketName.innerText = rocket.name
    
    const rocketYear = document.querySelector('.rocket-year')
    rocketYear.innerText = rocket.year
    
    const rocketModel = document.querySelector('.rocket-model')
    rocketModel.innerText = rocket.model
    
    goForLaunch.innerText = rocket.goForLaunch
    
    tests.innerText = rocket.tests
    
    upgrades.innerText = rocket.upgrades

    const rocketImage = document.querySelector('.rocket-img')
    rocketImage.src = rocket.image
}

const testButton = document.querySelector(".tests-button")

testButton.addEventListener('click', () =>{
    tests.innerText = ++tests.innerText
} )


document.querySelector('.upgrade-button').addEventListener('click', ()=>{
    let currentCount = parseInt(upgrades.innerText)
    let newCount = currentCount + 1
    upgrades.innerText = newCount
})

document.querySelector('.launch-button').addEventListener('click', ()=>{
    let testCount = +tests.innerText
    let upgradeCount = parseInt(upgrades.innerText)
    console.log(testCount, upgradeCount)
    if (upgradeCount >= 1 && testCount >= 3){
        goForLaunch.innerText = "Yeeeeee-haw, let's go!"
    }
})