enum AnimateDirection {
    ClockWise,
    CounterClockWise,
}

let animateIndex = 0
let animateOffset = [0, 5, 10, 15]
let animateFrameCount = 4
let animateFrameInterval = 120
let animateDirection = AnimateDirection.ClockWise
let image = images.createImage(`
    . . # . .   . . . # .   # . . . #   . # . . .
    . . . . .   # . . . .   . . . . .   . . . . #
    # . . . #   . . . . .   . . . . .   . . . . .
    . . . . .   . . . . #   . . . . .   # . . . .
    . . # . .   . # . . .   # . . . #   . . . # .
`)

basic.forever(() => {
    let index = animateDirection === AnimateDirection.ClockWise ? animateIndex : animateFrameCount - animateIndex
    let offset = animateOffset[index]

    image.showImage(offset, animateFrameInterval)

    animateIndex = (animateIndex + 1) % animateFrameCount
})

input.onButtonPressed(Button.A, function () {
    animateDirection = AnimateDirection.CounterClockWise
})

input.onButtonPressed(Button.B, function () {
    animateDirection = AnimateDirection.ClockWise
})
