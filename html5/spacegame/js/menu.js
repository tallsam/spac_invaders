

var menu = {
  color: "#0F0",
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    canvas.fillStyle = "#00F";
    canvas.fillRect(CANVAS_WIDTH/4, CANVAS_HEIGHT/4, (CANVAS_WIDTH/4)*2, (CANVAS_HEIGHT/4)*2);
    canvas.fillStyle = "#F00";
    canvas.fillText('Press Space to Begin', CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
      for (var counter=0;;counter++) {
        if(keydown.space) {
          break;
        }
      }
  }
}



