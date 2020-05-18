let dieRolls = []
const rollButton = document.querySelector("#roll_button")
rollButton.addEventListener("click", function() {
    console.log("Roll Button Clicked")
    let rollNum = document.querySelector("#roll_dice")
    let count = 1
    let rollSum = document.querySelector(".sum_of_rolls")
    let countSum = 0
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

