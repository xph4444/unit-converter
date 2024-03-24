/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


function allConvert(unit) {
    const feet = (unit * 3.281).toFixed(3)
    const meter = (unit / 3.281).toFixed(3)
    const gallon = (unit * 0.264).toFixed(3)
    const liter = (unit / 0.264).toFixed(3)
    const pound = (unit * 2.204).toFixed(3)
    const kilo = (unit / 2.204).toFixed(3)
    // return [{feet, meter},{gallon, liter},{pound,kilo}]
    return { feet, meter, gallon, liter, pound, kilo }
}

let unitInput = document.getElementById("unit-input")
let convertBtn = document.getElementById("convert-btn")
let themeBtn = document.getElementById("theme-btn")


convertBtn.addEventListener("click", function () {

    const convertResult = allConvert(unitInput.value)
    document.getElementById("length-text").textContent =
        `
        ${unitInput.value} meters = ${convertResult.feet} feet | ${unitInput.value} feet =  ${convertResult.meter} meters
        `
    document.getElementById("volume-text").textContent =
        `
        ${unitInput.value} liters = ${convertResult.gallon} gallons | ${unitInput.value} gallons =  ${convertResult.liter} liters
        `
    document.getElementById("mass-text").textContent =
        `
        ${unitInput.value} kilos = ${convertResult.pound} pounds | ${unitInput.value} pounds =  ${convertResult.kilo} kilos
        `
})

console.log(allConvert(20).feet)
console.log(typeof (allConvert(20).feet))
console.log(typeof (allConvert(20).feet - 5))
// console.log(typeof (21))



themeBtn.addEventListener("click", function () {
    const theme = document.getElementById("theme")
    if (theme.getAttribute("href") === "index.css") {
        theme.setAttribute("href", "dark-theme.css")
        themeBtn.textContent = "toggle light mode"
    } else {
        theme.setAttribute("href", "index.css")
        themeBtn.textContent = "toggle dark mode"
    }
})




//20 meters = 65.616 feet | 20 feet = 6.096 meters



// function lengthConvert(unit) {
//     const feet = (unit*3.281).toFixed(3)
//     const meter = (unit/3.281).toFixed(3)
//     return [feet,meter]
// }

// function volumeConvert(unit) {
//     const gallon = (unit*0.264).toFixed(3)
//     const liter = (unit/0.264).toFixed(3)
//     return [gallon,liter]
// }

// function massConvert(unit) {
//     const pound = (unit*2.204).toFixed(3)
//     const kilogram = (unit/2.204).toFixed(3)
//     return [pound,kilogram]
// }
