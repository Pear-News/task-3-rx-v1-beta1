radio.onReceivedString(function (receivedString) {
    if (receivedString == "Forward") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M2,
        255
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
        255,
        SuperBit.enMotors.M2,
        -255
        )
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
        RGB_Program = "red"
        basic.showArrow(ArrowNames.South)
        basic.pause(100)
        basic.clearScreen()
    } else if (receivedString == "Stop") {
        SuperBit.MotorStopAll()
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
        RGB_Program = "yellow"
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    }
})
let RGB_Program = ""
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
basic.pause(100)
basic.clearScreen()
SuperBit.RGB_Program().clear()
SuperBit.RGB_Program().show()
RGB_Program = "colourless"
basic.showIcon(IconNames.Skull)
basic.pause(100)
basic.clearScreen()
loops.everyInterval(2000, function () {
    if (RGB_Program != "colourless") {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
        RGB_Program = "colourless"
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        basic.clearScreen()
    }
})
