input.onGesture(Gesture.Shake, function () {
    shake = 1
})
let shake = 0
shake = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # # . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # . . # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # . # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showIcon(IconNames.SmallSquare)
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
    . # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    `)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . # . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # .
    # . # . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.showLeds(`
    . . # . .
    . . . . #
    # . . # .
    . # # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    # . # . #
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    `)
music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        # . # . #
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        `)
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
music.playMelody("C D E F G A B C5 ", 360)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
basic.showIcon(IconNames.Asleep)
basic.pause(500)
music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
basic.showLeds(`
    # . . . #
    . # . # .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.pause(500)
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.showLeds(`
    # . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # # . . .
    # # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # # # . .
    # . # # .
    # # # . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # # # # .
    # . . # .
    # . . # .
    # # # # #
    . # # # .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . .
    . # . . .
    # . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    `)
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
    . . . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . #
    . . . # .
    . . # . #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . #
    . . . # .
    . . # . #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . #
    . . . # .
    . . # . #
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
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
}
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
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
while (shake == 0) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.OnceInBackground)
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    # . # . #
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
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
basic.forever(function () {
	
})
