// Rover object goes here:
var rover = "N"
// ======================
function turnLeft(rover) {
  if (rover === "N") {
      rover = "W"
  } else if (rover === "W") {
      rover = "S"
  }else if (rover === "S") {
      rover ='E'
  }else if (rover === "E") {
      rover = "N"
  };
  console.log('turnLeft was called!');
  console.log(rover);
}


function turnRight(rover) {
  console.log('turnRight was called!');
}

function moveForward(rover) {
  console.log('moveForward was called');
}
