serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    ordre = parseFloat(serial.readLine())
})
let ordre = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.forever(function () {
    if (ordre == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (ordre == 2) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 100)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (ordre == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
        maqueen.motorStop(maqueen.aMotors.M2)
    }
    if (ordre == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
        maqueen.motorStop(maqueen.aMotors.M1)
    }
    if (ordre == 0) {
        basic.showString("S")
        maqueen.motorStopAll()
    }
})
