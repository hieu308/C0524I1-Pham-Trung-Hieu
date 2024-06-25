/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left,right, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
this.right =right
  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;right:'+this.right+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 40;
    console.log('ok: ' + this.left);
  }
this.moveDown = function(){
    this.top+=40;
}
this.moveLeft = function(){
    this.left -= 40;
}
this.moveUp = function(){
    this.top -= 40;
}
}

var hero = new Hero('lava2.png', 20, 30, 20,200);

function start(){
  if(hero.left < 1400 - hero.size && hero.top === 20){
    hero.moveRight();
  }else if(hero.top <720 - hero.size && hero.left>0){
    hero.moveDown();
  }else if(hero.top >720 - hero.size && hero.left > 0){
    hero.moveLeft();
  }else if( hero.left < 0){
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();