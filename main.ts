input.onButtonPressed(Button.A, function () {
    if (knop_B == 0) {
        antwoord_1 += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    antwoord_1 = 0
    antwoord_2 = 0
    knop_B = 0
})
input.onButtonPressed(Button.AB, function () {
    if (knop_B == 1) {
        antwoord_2 += 1
    }
})
input.onButtonPressed(Button.B, function () {
    knop_B = 1
})
let antwoord_2 = 0
let antwoord_1 = 0
let knop_B = 0
basic.showString("rekenmachine")
basic.forever(function () {
	
})
basic.forever(function () {
    if (knop_B == 2) {
        for (let index = 0; index < antwoord_1 + antwoord_2; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
