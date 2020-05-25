let dieRolls = []
let countSum = 0
const rollButton = document.querySelector("#roll_button")
rollButton.addEventListener("click", function() {
    console.log("Roll Button Clicked")
    let rollNum = document.querySelector("#roll_dice")
    let count = 1
    let rollSum = document.querySelector(".sum_of_rolls")
    while (count <= rollNum.value) {
        let rdmRolls = Math.floor(Math.random() * 6 ) + 1
        count++
        if (rdmRolls === 1) {
            countSum += 1
            dieRolls.push(rdmRolls)
        }
        if (rdmRolls === 2) {
            countSum +=2
            dieRolls.push(rdmRolls)
        }
        if (rdmRolls === 3) {
            countSum += 3
            dieRolls.push(rdmRolls)
        }
        if (rdmRolls === 4) {
            countSum += 4
            dieRolls.push(rdmRolls)
        }
        if (rdmRolls === 5) {
            countSum += 5
            dieRolls.push(rdmRolls)
        }
        if (rdmRolls === 6) {
            countSum += 6
            dieRolls.push(rdmRolls)
        }
    }
    rollSum.innerHTML = countSum
    rollNum.value =""
    console.log(countSum)
    console.log(dieRolls)
})

// const changeSidesButton = document.querySelector("#side_button")
// changeSidesButton.addEventListener("click", function() {
//     console.log("Side Number Changed");
//     let numberOfSides = document.querySelector("#num_of_sides")
//     let rollNum = document.querySelector("#roll_dice")
//     let count = 1
//     let rollSum = document.querySelector(".sum_of_rolls")
//     function rollNum (numberOfSides) {
//         return Math.floor(Math.random() * numberOfSides.value) + 1
//     }
//     rollSum.innerHTML = countSum
//     rollNum.value =""
//     console.log(countSum)
//     console.log(dieRolls)
// })

const showRollsButton = document.querySelector("#show_rolls")
showRollsButton.addEventListener("click", function() {
    console.log("Show Button Clicked");
    let showRolls = document.querySelector(".all_rolls")
    let listTag = "<ol>"
    const dieImages = [
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg'
    ]
    for (let count = 0; count < dieRolls.length; count++) {
        // listTag += "<li>" + dieRolls[count] + "</li>"
        if (dieRolls[count] === 1) {
            listTag += "<li>" + "<img src='" + dieImages[0] + "'/>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 2) {
            listTag += "<li>" + "<img src='" + dieImages[1] + "'/>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 3) {
            listTag += "<li>" + "<img src='" + dieImages[2] + "'/>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 4) {
            listTag += "<li>" + "<img src='" + dieImages[3] + "'/>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 5) {
            listTag += "<li>" + "<img src='" + dieImages[4] + "'/>" + dieRolls[count] + "</li>"
        }
        if (dieRolls[count] === 6) {
            listTag += "<li>" + "<img src='" + dieImages[5] + "'/>" + dieRolls[count] + "</li>"
        }
    }
    listTag += "</ol>"
    showRolls.innerHTML = listTag
})

const resetButton = document.querySelector("#reset_button")
resetButton.addEventListener("click", function() {
    console.log("Game Reset")
    document.querySelector(".sum_of_rolls").innerHTML = ""
    document.querySelector(".all_rolls").innerHTML = ""
})
