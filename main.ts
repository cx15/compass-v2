basic.forever(function () {
    if (input.compassHeading() == 360) {
        basic.showArrow(ArrowNames.North)
        basic.showString("N")
    } else if (input.compassHeading() == 45) {
        basic.showArrow(ArrowNames.NorthEast)
        basic.showString("NE")
    } else if (input.compassHeading() == 180) {
        basic.showArrow(ArrowNames.East)
        basic.showString("E")
    } else if (input.compassHeading() == 135) {
        basic.showArrow(ArrowNames.SouthEast)
        basic.showString("SE")
    } else if (input.compassHeading() == 180) {
        basic.showArrow(ArrowNames.South)
        basic.showString("S")
    } else if (input.compassHeading() == 225) {
        basic.showArrow(ArrowNames.SouthWest)
        basic.showString("SW")
    } else if (input.compassHeading() == 270) {
        basic.showArrow(ArrowNames.West)
        basic.showString("W")
    } else if (input.compassHeading() == 315) {
        basic.showArrow(ArrowNames.NorthWest)
        basic.showString("NW")
    } else {
    	
    }
})
