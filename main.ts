radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    Potato = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (Potato > 0) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
let Potato = 0
Potato = -1
radio.setGroup(1)
basic.forever(function () {
    if (Potato == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (Potato < 0) {
        basic.clearScreen()
    }
    if (Potato > 0) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # . # #
            # # # # #
            `)
        Potato += -1
    }
})
