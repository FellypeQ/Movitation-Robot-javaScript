// Rover object goes here:
var rover = "N"
var roverX = 0
var roverY = 0

// ======================
function turnLeft(rover) {
    if (rover === "N") {
      rover = "W"
     } else if (rover === "W") {
      rover = "S"
     }else if (rover === "S") {
      rover ='E'
    }else{
      rover = "N"
  };
  console.log('turnLeft was called!');
  console.log(rover);
}


function turnRight(rover) {
    if (rover === "N") {
        rover = "E"
        } else if (rover === "E") {
        rover = "S"
        }else if (rover === "S") {
        rover ='W'
    }else{
        rover = "N"
    };
  console.log('turnRight was called!');
}

function moveForward(rover) {
  console.log('moveForward was called');
}
