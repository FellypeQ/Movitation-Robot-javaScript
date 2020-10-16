// Rover object goes here:
var rover = "N";
var roverX = 0;
var roverY = 0;

// ======================
function turnLeft(rover) {
    switch (rover) {
        case "N":
            rover = "W"
            console.log("Turn to West")
            break;
        case "W":
            rover = "S"
            console.log("Turn to South")
            break;
        case "S":
            rover = "E"
            console.log("Turn to East")
            break;
        case "E":
            rover = "N"
            console.log("Turn to North")
            break;
        default:
            rover = "N"
            console.log ("Turn automatically to North")
            break;
    }
}

function turnRight(rover) {
    switch (rover) {
        case "N":
            rover = "E"
            console.log("Turn to East")
            break;
        case "E":
            rover = "S"
            console.log("Turn to South")
            break;
        case "S":
            rover = "W"
            console.log("Turn to West")
            break;
        case "W":
            rover = "N"
            console.log("Turn to North")
            break;
        default:
            rover = "N"
            console.log ("Turn automatically to North")
            break;
    }
}

function moveForward(rover) {
    switch (rover) {
        case "N":
            if (roverY <= 0) {
                console.log("The rover is in the limit of the planet")
            } else {
                roverY -=1
            }
            console.log(`The Rover is in the position [${roverX},${roverY}]`)  
            break;
        case "E":
            if (roverX >=9) {
                console.log("The rover is in the limit of the planet")
            } else {
                roverX +=1
            }    
            console.log(`The rover is in the position [${roverX},${roverY}]`)
            break;
        case "S":
            if (roverY >= 9) {
                console.log("The rover is in the limit of the planet")                
            } else {
                roverY +=1
            }
            console.log(`The rover is in the position [${roverX},${roverY}]`)
            break;
        case "W":
            if (roverX <= 0) {
                console.log("The rover is in the limit of the planet")
            } else {
                roverX -=1
            }
            console.log(`The rover is in the position [${roverX},${roverY}]`)
            break;
        default:
            console.log(`The Rover is in the position [${roverX},${roverY}]`)
            break;
    }
}
