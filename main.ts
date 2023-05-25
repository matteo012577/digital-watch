let hours = 0
let ampm = false
let minutes = 0
input.onButtonPressed(Button.A, function () {
    if (hours < 53) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 1) {
        minutes += 1
    } else {
        minutes = 0
    }
})
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            minutes = 0
        }
    }
})
