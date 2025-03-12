input.onPinPressed(TouchPin.P0, function () {
    servos.P1.setAngle(90)
    basic.pause(100)
})
servos.P1.setAngle(0)
