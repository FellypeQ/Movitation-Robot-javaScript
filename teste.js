// Rover object goes here:
var rover = "N"
// ======================
function turnLeft(rover) {
  console.log('turnLeft was called!');
  if (rover === "N") {
      rover = "W"
  } else if (rover === "W") {
      rover = "S"
  }else if (rover === "W") {
      rover ='E'
  }else if (rover === "E") {
      rover = "N"
  }
}


function turnRight(rover) {
  console.log('turnRight was called!');
}

function moveForward(rover) {
  console.log('moveForward was called');
}
