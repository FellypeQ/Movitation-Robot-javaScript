// Rover object goes here:
var rover = {
    direction: "N",
    directionExtended: "North",
    coordinateX: 0,
    coordinateY: 0,
    travelLog: []
};
// ======================
function turnLeft() {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            rover.directionExtended = "West";
             break;
        case "W":
            rover.direction = "S";
            rover.directionExtended = "South";
            break;
        case "S":
            rover.direction = "E";
            rover.directionExtended = "East";
            break;
        case "E":
            rover.direction = "N";
            rover.directionExtended = "North";
            break;
        default:
            rover.direction = "N";
            rover.directionExtended = "North";
            console.log ("Turn automatically to North");
            break;
    }
}
function turnRight() {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            rover.directionExtended = "East";
            break;
        case "E":
            rover.direction = "S";
            rover.directionExtended = "South";
            break;
        case "S":
            rover.direction = "W";
            rover.directionExtended = "West";
            break;
        case "W":
            rover.direction = "N";
            rover.directionExtended = "North";
            break;
        default:
            rover.direction = "N";
            rover.directionExtended = "North";
            console.log ("Turn automatically to North");
            break;
    }
}
function moveForward() { 
    switch (rover.direction) {
        case "N":
            //IF => Bonus 1
            if (rover.coordinateY <= 0) {
                console.log(`The rover is in the limit of the planet, the ${i}º move didn't realiazed`);
            } else {
                rover.coordinateY -=1;
                rover.travelLog.push(`Rove was moved to forward, to position [${rover.coordinateX},${rover.coordinateY}]`);
            }
            break;
        case "E":
            //IF => Bonus 1
            if (rover.coordinateX >= 9) {
                console.log(`The rover is in the limit of the planet, the ${i}º move didn't realiazed`);
            } else {
                rover.coordinateX += 1;
                rover.travelLog.push(`Rove was moved to forward, to position [${rover.coordinateX},${rover.coordinateY}]`);
            }    
            break;
        case "S":
            //IF => Bonus 1
            if (rover.coordinateY >= 9) {
                console.log(`The rover is in the limit of the planet, the ${i}º move didn't realiazed`);
            } else {
                rover.coordinateY += 1;
                rover.travelLog.push(`Rove was moved to forward, to position [${rover.coordinateX},${rover.coordinateY}]`);
            }
            break;
        case "W":
            //IF => Bonus 1
            if (rover.coordinateX <= 0) {
                console.log(`The rover is in the limit of the planet, the ${i}º move didn't realiazed`);
            } else {
                rover.coordinateX -= 1;
                rover.travelLog.push(`Rove was moved to forward, to position [${rover.coordinateX},${rover.coordinateY}]`);
            }
            break;
        default:
            console.log(`The Rover is in the position [${rover.coordinateX},${rover.coordinateY}]`);
            break;
    }
}
//Bonus 2
function moveBackward() {
    switch (roverDirection) {
        case "N":
            //IF => Bonus 1
            if (rover.coordinateY <= 9) {
                console.log(`The rover is in the limit of the planet, the ${i}º move didn't realiazed`);
            } else {
                rover.coordinateY += 1;
                rover.travelLog.push(`Rove was moved to back, to position [${rover.coordinateX},${rover.coordinateY}]`);
            }
            break;
        case "E":
            //IF => Bonus 1
            if (rover.coordinateX >= 0) {
                console.log(`The rover is in the limit of the planet, the ${i}º move didn't realiazed`);
            } else {
                rover.coordinateX -= 1;
                rover.travelLog.push(`Rove was moved to back, to position [${rover.coordinateX},${rover.coordinateY}]`);
            }    
            break;
        case "S":
            //IF => Bonus 1
            if (rover.coordinateY >= 0) {
                console.log(`The rover is in the limit of the planet, the ${i}º move didn't realiazed`);
            } else {
                rover.coordinateY -= 1;
                rover.travelLog.push(`Rove was moved to back, to position [${rover.coordinateX},${rover.coordinateY}]`);
            }
            break;
        case "W":
            //IF => Bonus 1
            if (rover.coordinateX <= 9) {
                console.log(`The rover is in the limit of the planet, the ${i}º move didn't realiazed`);
            } else {
                rover.coordinateX += 1;
                rover.travelLog.push(`Rove was moved to back, to position [${rover.coordinateX},${rover.coordinateY}]`);
            }
            break;
        default:
            console.log(`The Rover is in the position [${rover.coordinateX},${rover.coordinateY}]`);
            break;
    }    
}
function moves(insertmoves) {
    rover.travelLog.push(`The rover initials position is [${rover.coordinateX},${rover.coordinateY}]`);
    for (let i = 0; i < insertmoves.length; i++) {
        switch (insertmoves[i]) {
            case "l":
                turnLeft();
                rover.travelLog.push(`Rove turns to Left,(${rover.directionExtended}), continues in [${rover.coordinateX},${rover.coordinateY}]`);
                break;
            case "r":
                turnRight();
                rover.travelLog.push(`Rove turns to Right,(${rover.directionExtended}), continues in [${rover.coordinateX},${rover.coordinateY}]`);
                break;
            case "f":
                moveForward();
                break;
            case "b":
                moveBackward();
                break;
            default:
                //Bonus 3
                console.log(`The ${i+1}º move is not supported, please insert f, l, r, or b`);
                break;
        }
    }
}
// ======================
moves("rffrfflfrff")
// ======================
console.log(rover.travelLog)