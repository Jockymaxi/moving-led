let x = 2
let y = 2
basic.forever(function () {
    led.unplot(x, y)
    if (input.rotation(Rotation.Roll) < 0) {
        x += -1
        if (x < 0) {
            x = 0
        }
    }
    if (input.rotation(Rotation.Roll) > 0) {
        x += 1
        if (x > 4) {
            x = 4
        }
    }
    led.plot(x, y)
    basic.pause(100)
})
