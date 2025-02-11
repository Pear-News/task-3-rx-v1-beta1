input.onButtonPressed(Button.A, function () {
    if (function_light_level) {
        function_light_level = false
    } else {
        function_light_level = true
    }
})
input.onGesture(Gesture.FreeFall, function () {
    if (function_free_fall) {
        for (let index = 0; index < 10; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Forward") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M2,
        -255
        )
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
        RGB_Program = "blue"
        basic.showArrow(ArrowNames.North)
        basic.pause(100)
        basic.clearScreen()
    } else if (receivedString == "Backward") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M2,
        255
        )
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
        RGB_Program = "red"
        basic.showArrow(ArrowNames.South)
        basic.pause(100)
        basic.clearScreen()
    } else if (receivedString == "Left") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M2,
        255
        )
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
        SuperBit.RGB_Program().show()
        RGB_Program = "orange"
        basic.showArrow(ArrowNames.West)
        basic.pause(100)
        basic.clearScreen()
    } else if (receivedString == "Right") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M2,
        -255
        )
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
        RGB_Program = "green"
        basic.showArrow(ArrowNames.East)
        basic.pause(100)
        basic.clearScreen()
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (receivedString == "Stop") {
        SuperBit.MotorStopAll()
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
        RGB_Program = "yellow"
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (function_free_fall) {
        function_free_fall = false
    } else {
        function_free_fall = true
    }
})
let light_level = false
let RGB_Program = ""
let function_light_level = false
let function_free_fall = false
function_free_fall = true
function_light_level = true
radio.setGroup(11.14)
let Random_Emoji = randint(1, 9)
if (Random_Emoji == 1) {
    basic.showIcon(IconNames.Happy)
} else if (Random_Emoji == 2) {
    basic.showIcon(IconNames.Sad)
} else if (Random_Emoji == 3) {
    basic.showIcon(IconNames.Confused)
} else if (Random_Emoji == 4) {
    basic.showIcon(IconNames.Angry)
} else if (Random_Emoji == 5) {
    basic.showIcon(IconNames.Asleep)
} else if (Random_Emoji == 6) {
    basic.showIcon(IconNames.Surprised)
} else if (Random_Emoji == 7) {
    basic.showIcon(IconNames.Silly)
} else if (Random_Emoji == 8) {
    basic.showIcon(IconNames.Fabulous)
} else if (Random_Emoji == 9) {
    basic.showIcon(IconNames.Meh)
}
basic.pause(500)
basic.clearScreen()
SuperBit.RGB_Program().clear()
SuperBit.RGB_Program().show()
RGB_Program = "colourless"
basic.showIcon(IconNames.Skull)
basic.pause(100)
basic.clearScreen()
loops.everyInterval(2000, function () {
    if (RGB_Program != "colourless" && !(light_level)) {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
        RGB_Program = "colourless"
        basic.showIcon(IconNames.Skull)
    }
})
basic.forever(function () {
    if (input.lightLevel() <= 20 && function_light_level) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.White))
        SuperBit.RGB_Program().show()
        RGB_Program = "white"
        light_level = true
    } else {
        if (light_level) {
            basic.clearScreen()
            light_level = false
        }
    }
})
