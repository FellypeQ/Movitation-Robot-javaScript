// Rover object goes here:
var roverDirection = "N";
var coordinates = "North"
var roverX = 0;
var roverY = 0;



// ======================
function turnLeft() {
    switch (roverDirection) {
        case "N":
            roverDirection = "W";
            coordinates = "West";
             break;
        case "W":
            roverDirection = "S";
            coordinates = "South";
            break;
        case "S":
            roverDirection = "E";
            coordinates = "East";
            break;
        case "E":
            roverDirection = "N";
            coordinates = "North";
            break;
        default:
            roverDirection = "N";
            coordinates = "North";
            console.log ("Turn automatically to North");
            break;
    }
}

function turnRight() {
    switch (roverDirection) {
        case "N":
            roverDirection = "E";
            coordinates = "East";
            break;
        case "E":
            roverDirection = "S";
            coordinates = "South";
            break;
        case "S":
            roverDirection = "W";
            coordinates = "West";
            break;
        case "W":
            roverDirection = "N";
            coordinates = "North";
            break;
        default:
            roverDirection = "N";
            coordinates = "North";
            console.log ("Turn automatically to North");
            break;
    }
}

function moveForward() { 
    switch (roverDirection) {
        case "N":
            if (roverY <= 0) {
                console.log("The rover is in the limit of the planet");
            } else {
                roverY -=1;
                console.log(`Rove was moved to forward, to position [${roverX},${roverY}]`);
            }
            break;
        case "E":
            if (roverX >=9) {
                console.log("The rover is in the limit of the planet");
            } else {
                roverX +=1;
                console.log(`Rove was moved to forward, to position [${roverX},${roverY}]`);
            }    
            break;
        case "S":
            if (roverY >= 9) {
                console.log("The rover is in the limit of the planet");                
            } else {
                roverY +=1;
                console.log(`Rove was moved to forward, to position [${roverX},${roverY}]`);
            }
            break;
        case "W":
            if (roverX <= 0) {
                console.log("The rover is in the limit of the planet");
            } else {
                roverX -=1;
                console.log(`Rove was moved to forward, to position [${roverX},${roverY}]`);
            }
            break;
        default:
            console.log(`The Rover is in the position [${roverX},${roverY}]`);
            break;
    }
}

function moveBack() {
    switch (roverDirection) {
        case "N":
            if (roverY <= 9) {
                console.log("The rover is in the limit of the planet");
            } else {
                roverY +=1;
                console.log(`Rove was moved to back, to position [${roverX},${roverY}]`);
            }
            break;
        case "E":
            if (roverX >=0) {
                console.log("The rover is in the limit of the planet");
            } else {
                roverX -=1;
                console.log(`Rove was moved to back, to position [${roverX},${roverY}]`);
            }    
            break;
        case "S":
            if (roverY >= 0) {
                console.log("The rover is in the limit of the planet");                
            } else {
                roverY -=1;
                console.log(`Rove was moved to back, to position [${roverX},${roverY}]`);
            }
            break;
        case "W":
            if (roverX <= 9) {
                console.log("The rover is in the limit of the planet");
            } else {
                roverX +=1;
                console.log(`Rove was moved to back, to position [${roverX},${roverY}]`);
            }
            break;
        default:
            console.log(`The Rover is in the position [${roverX},${roverY}]`);
            break;
    }    
}

function moves(insertmoves) {
    console.log(`The rover is in position [${roverX},${roverY}]`);
    for (let i = 0; i < insertmoves.length; i++) {
        switch (insertmoves[i]) {
            case "l":
                turnLeft();
                console.log(`Rove turn to Left, if you go to forward you'll go to ${coordinates}`);
                break;
            case "r":
                turnRight();
                console.log(`Rove turn to Right, if you go to forward you'll go to ${coordinates}`);
                break;
            case "f":
                moveForward();
                break;
            case "b":
                moveBack();
                break;
            default:
                console.log("This move is not supported, try f, l, r, or b");
                break;
        }
    }
}

moves("rffrfflfrff")