function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(16);

}

function setup_layers(pScope) {
  //lets us draw the whole circle background, ignoring the boundaries
  new PLayer(null, 255);

  var layer5 = new PLayer(Background1, bgr);
  layer5.mode(RING);
  layer5.set_boundary(0, 1000);

  var layer1 = new PLayer(Chrysilis);
  layer1.mode(RING);
  layer1.set_boundary(0, 300);

  var layer2 = new PLayer(ButterFly);
  layer2.mode(SWIRL(8));
  layer2.set_boundary(300, 2000);

  var layer3 = new PLayer(ChrysilisCap);
  layer3.mode(RING);
  layer3.set_boundary(0, 300);

  var layer4 = new PLayer(Flower);
  layer4.mode(RING);
  layer4.set_boundary(0, 200);

  var layer6 = new PLayer(FlowerCentre);
  layer6.mode(RING);
  layer6.set_boundary(0, 200);

}



function ButterFly(x, y, animation, pScope) {

  var AnimSpeed = 30 - animation.frame * 25;
  var r = 200 + animation.frame * 350;
  var g = 73 + animation.frame * 350;
  var b = 150 - animation.frame * 350;
  var divider = 200/210;

  translate(100 - animation.wave(3) * 250, 0);
  noStroke();
  fill(r, g, b);
  scale(.0001 + animation.frame);

  //Wings
  beginShape();
  vertex(0, 100);
  bezierVertex(0, 400, 350 - animation.wave(AnimSpeed) * 350 * divider, 150, 150 - animation.wave(AnimSpeed) * 150 * divider, 50);
  bezierVertex(250 - animation.wave(AnimSpeed) * 250 * divider, 50, 300 - animation.wave(AnimSpeed) * 300 * divider, 50, 300 - animation.wave(AnimSpeed) * 300 * divider, 0);
  bezierVertex(300 - animation.wave(AnimSpeed) * 300 * divider, -150, 400 - animation.wave(AnimSpeed) * 400 * divider, -150, 400 - animation.wave(AnimSpeed) * 400 * divider, -200);
  bezierVertex(400 - animation.wave(AnimSpeed) * 400 * divider, -250, 100 - animation.wave(AnimSpeed) * 100 * divider, -250, 0, 0);
  vertex(0, 100);
  bezierVertex(0, 400, -350 + animation.wave(AnimSpeed) * 350 * divider, 150, -150 + animation.wave(AnimSpeed) * 150 * divider, 50);
  bezierVertex(-250 + animation.wave(AnimSpeed) * 250 * divider, 50, -300 + animation.wave(AnimSpeed) * 300 * divider, 50, -300 + animation.wave(AnimSpeed) * 300 * divider, 0);
  bezierVertex(-300 + animation.wave(AnimSpeed) * 300 * divider, -150, -400 + animation.wave(AnimSpeed) * 400 * divider, -150, -400 + animation.wave(AnimSpeed) * 400 * divider, -200);
  bezierVertex(-400 + animation.wave(AnimSpeed) * 400 * divider, -250, -100 + animation.wave(AnimSpeed) * 100 * divider, -250, 0, 0);
  endShape(CLOSE);

  //Body
  beginShape();
  vertex(0, -100);
  bezierVertex(50, -100, 25, 225, 0, 225);
  vertex(0, -100);
  bezierVertex(-50, -100, -25, 225, 0, 225);
  endShape(CLOSE);

  stroke(r, g, b);
  strokeWeight(5);
  noFill();

  //Antennae
  bezier(5, -75, 10, -100, 5, -125, 25, -150);
  bezier(-5, -75, -10, -100, -5, -125, -25, -150);

}

function Chrysilis(x, y, animation, pScope) {

  var r3 = 135;
  var g3 = 187;
  var b3 = 162;

  var r4 = 106;
  var g4 = 171;
  var b4 = 140;

  translate(0, 0 - animation.wave(1) * 20);
  translate(0, -250);
  stroke(36, 82, 60);
  fill(r3, g3, b3);

  beginShape();
  vertex(-35, 0);
  vertex(35, 0);
  vertex(30, 20);
  vertex(-30, 20);
  endShape(CLOSE);

  fill(r4, g4, b4);
  beginShape();
  vertex(-30, 20);
  vertex(30, 20);
  vertex(25, 40);
  vertex(-25, 40);
  endShape(CLOSE);

  beginShape();
  vertex(-25, 40);
  vertex(25, 40);
  vertex(15, 60);
  vertex(-15, 60);
  endShape(CLOSE);

  beginShape();
  vertex(-35, 0);
  bezierVertex(-35, 65, 0, 100, 15, 60);
  bezierVertex(0, 60, 17.5, 0, -35, 0);
  endShape(CLOSE);

}

function ChrysilisCap(x, y, animation, pScope) {

  var r2 = 135;
  var g2 = 187;
  var b2 = 162;

  stroke(36, 82, 60);
  translate(0, 0 - animation.wave(1) * 20);
  translate(0, -250);

  fill(r2, g2, b2);

  beginShape(119, 242, 160);
  vertex(-35 + animation.wave(1) * 20, 0);
  bezierVertex(-15, -50 + animation.wave(1) * 10, 15, -50 + animation.wave(1) * 10, 35, 0);
  endShape(CLOSE);
}

function Flower(x, y, animation, pScope) {

  var r4 = 255;
  var g4 = 255;
  var b4 = 128;

  stroke(0);
  fill(r4, g4, b4);
  noStroke();
  scale(.75);

  fill(255, 110, 170);

  beginShape();
  vertex(25, 0);
  vertex(-25, 0);
  bezierVertex(-25, -200 + animation.wave(2) * 100, 25, -350 + animation.wave(1) * 175, 25, 0);
  endShape(CLOSE);

  fill(255, 137, 166);

  beginShape();
  vertex(25, 0);
  vertex(-25, 0);
  bezierVertex(-25, -175 + animation.wave(1) * 87.5, 25, -300 + animation.wave(1) * 150, 25, 0);
  endShape(CLOSE);

  fill(255, 164, 162);

  beginShape();
  vertex(25, 0);
  vertex(-25, 0);
  bezierVertex(-25, -150 + animation.wave(2) * 75, 25, -250 + animation.wave(1) * 125, 25, 0);
  endShape(CLOSE);

  fill(255, 191, 158);

  beginShape();
  vertex(25, 0);
  vertex(-25, 0);
  bezierVertex(-25, -125 + animation.wave(1) * 62.5, 25, -200 + animation.wave(1) * 100, 25, 0);
  endShape(CLOSE);

  fill(255, 218, 154);

  beginShape();
  vertex(25, 0);
  vertex(-25, 0);
  bezierVertex(-25, -100 + animation.wave(2) * 50, 25, -150 + animation.wave(1) * 75, 25, 0);
  endShape(CLOSE);

  fill(255, 246, 150);

  beginShape();
  vertex(25, 0);
  vertex(-25, 0);
  bezierVertex(-25, -75 + animation.wave(1) * 37.5, 25, -100 + animation.wave(1) * 50, 25, 0);
  endShape(CLOSE);
}

function FlowerCentre(x, y, animation, pScope) {

  noStroke();
  scale(0.5);
  fill(255, 110, 170);
  ellipse(0, 0, 120, 120);
  fill(255, 255, 128);
  ellipse(0, 0, 100, 100);
  fill(255, 230, 128);
  ellipse(0, 0, 75.75);
  fill(255, 204, 128);
  ellipse(0, 0, 50, 50);
}

function Background1(x, y, animation, pScope) {
  for (let i = 0; i < 250; i++) {
    dots(animation);
  }
}

function dots(animation) {
  var rx = random(-150, 150);
  var ry = random(-500, -1000);
  var siz = random(2, 10);
  var opacity = (ry + 1000 - animation.wave(1) * 250);
  var r = 200 + animation.frame * 75;
  var g = 73 + animation.frame * 75;
  var b = 150 - animation.frame * 75;

  noStroke();
  fill(r, g, b, opacity);
  ellipse(rx, ry, siz, siz);
}

function bgr(animation, pScope) {
  pScope.fill_background(220, 242, 221);
}
