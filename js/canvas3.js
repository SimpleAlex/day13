var bg = new Image();
bg.src = "stars2.jpg";
function initCanvas() {
  var myCanvas = document.getElementById('canvas').getContext('2d');
  var cW = myCanvas.canvas.width, cH = myCanvas.canvas.height;
  var dist = 5; // VAR for DISTANCE by pressing on keyboard

  function Background() {
    this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
    this.render = function() {
      myCanvas.drawImage(bg, this.x--, 0);
      if (this.x <= -499) {
        this.x = 0;
      }
    };
  }

  function Player() {
    this.x = 0, this.y = 0, this.w = 50, this.h = 50;
    this.render = function() {
      myCanvas.fillStyle = '#fff';
      myCanvas.fillRect(this.x, this.y, this.w, this.h);
    };
  }
  var background = new Background();
  var player = new Player();
  player.x = 100;
  player.y = 225;
  function animate() {
    myCanvas.save();
    myCanvas.clearRect(0, 0, cW, cH);
    // Start drawing here
    background.render();
    player.render();
    // End drawing here
    myCanvas.restore();
  }
  var animateInterval = setInterval(animate, 30);
  // window.addEventListener('click', function(event) {
  //   setInterval(animate, 10);
  // });
  document.addEventListener('keydown', function(event) {
    var key_press = String.fromCharCode(event.keyCode);
    //alert(event.keyCode+ " | " + key_press);
    if (key_press == "W") {
      player.y-=dist; // PXL's for MOVEMENT
    } else if (key_press == "S") {
      player.y+=dist;
    }
    else if (key_press == "A") {
      player.x-=dist;
    }
    else if (key_press == "D") {
      player.x+=dist;
    }
  });
}
window.addEventListener('load', function(event) {
  initCanvas();
});
