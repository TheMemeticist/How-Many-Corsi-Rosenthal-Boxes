
function calculate(isMeters) {
  let standard = 550.0                 // standard room size in square feet-
  if (isMeters) {
    var m = 1.0 / (standard * 0.092903); // CR Box per square meter
  } else {
    var m = 1.0 / standard;            // CR Box per square foot
  }
  let sqrFt = document.getElementById('sqrFootIn').value;
  let n = Math.ceil(sqrFt * m);

  console.log(n)

  node = document.getElementById('container');
  document.getElementById('nboxes').innerHTML = n.toString();
  updateTxt(isMeters);
}

class Calculator {
  constructor() {
    this.foo = '';
    this.element = document.getElementById('sqrFootIn');
  }
  valCheck(v) {
    if (v < 100) {
      document.getElementById('sqrFootIn').value = 100;
    } else {
      document.getElementById('sqrFootIn').value = v;
    }

  }
  a() {
    var val = parseInt(document.getElementById('sqrFootIn').value) + 500;
    this.valCheck(val);

  }
  s() {
    let val = parseInt(document.getElementById('sqrFootIn').value) - 500;
    this.valCheck(val);
  }
}

class Ruler {
  constructor() {
    this.meters = false;
  }
  toggle() {
    let inp = document.getElementById('sqrFootIn').value;
    if (this.meters) {
      inp = Math.round(inp * 10.7639);
      this.meters = false;
      var i = 'ft²';
      document.getElementById("rulerM").setAttribute("id", "ruler");
      document.getElementById('ruler').innerHTML = i;
    } else {
      inp = Math.round(inp * 0.092903);
      this.meters = true;
      document.getElementById("ruler").setAttribute("id", "rulerM");
      var i = '㎡';
      document.getElementById('rulerM').innerHTML = i;
    }
    document.getElementById('sqrFootIn').value = inp.toString();
    calculate(this.meters);
    console.log(this.meters);
  }
}
function filterTxt(on) {
  if (on) {
    document.getElementById('filtertxt').innerHTML = '<p>MERV Filters</p>';
    let b = document.getElementById('nboxes').innerHTML;
    b = (b * 4).toString() + '+';
    document.getElementById('nboxes').innerHTML =  b;
  } else {
    document.getElementById('filtertxt').innerHTML = "<p>Corsi-Rosenthal Boxes <span class='material-icons md-light'>info</span></p>";
  }
}
function updateTxt(meters) {
  let txt = 'For an  indoor area of [measure] you will need an estimated [nboxes] Corsi-Rosenthal Boxes assuming an 8ft ceiling. *Consult your local HVAC specialists. This software is not yet certified.';


  let n = document.getElementById('nboxes').innerHTML;

  let s = document.getElementById('sqrFootIn').value.toString();
  if (meters) {
    var m = s + ' ㎡';
  } else {
    var m = s + ' ft²';
  }

  result = txt.replace("[measure]", m);
  document.getElementById('mtxt').innerHTML = result.replace("[nboxes]", n);
}

let c = new Calculator();

let r = new Ruler();
node = document.getElementById('container');

let inp = "<div id='inputcontain'><input id='sqrFootIn' type='number' onChange='calculate(r.meters);' ></div>";

node.insertAdjacentHTML('beforeend', inp);

document.getElementById('sqrFootIn').value = '500';

let badd = "<div id='add' onClick='c.a();calculate(r.meters);'>+</div>";
let bsub = "<div id='sub' onClick='c.s();calculate(r.meters);'>-</div>";
node = document.getElementById('inputcontain');
node.insertAdjacentHTML("afterBegin", badd);
node.insertAdjacentHTML("beforeEnd", bsub);

let getbuttons = "<div id='CRButts'> <a href='order.html'> <div id='buy'>Order <span class='material-icons md-light'>shopping_cart</span></div></a><a href='build.html'> <div id='build'>Build ️<span class='material-icons md-light'>build</span></div></a> </div>";
node.insertAdjacentHTML('afterEnd', getbuttons);

node = document.getElementById('container');

function switchFanImg(zoom) {
  var cube = document.getElementById('crcube');
  if (zoom) {
    cube.src = 'assets/CR-Cube-Close.gif';
  } else {
    cube.src = 'assets/CR-Cube.gif';
  }
}


let o = "<div id='ccontain'><a href='https://www.tandfonline.com/doi/full/10.1080/02786826.2022.2054674'><div id='filtertxt'><p>Corsi-Rosenthal Boxes <span class='material-icons md-light'>info</span></p></div></a><a  href='https://www.secondnature.com/blog/what-merv-rating-should-i-use'><img id='crcube' src='./assets/CR-Cube.gif' onmouseover='switchFanImg(true);filterTxt(true);' onmouseout='switchFanImg(false);calculate(r.meters);filterTxt(false);'></a></div>";
node.insertAdjacentHTML('afterbegin', o);

node = document.getElementById('ccontain');
let out = "<div id='nCRB'>x<div id='nboxes'>1</div></div>";
node.insertAdjacentHTML('beforeend', out);

let buy = "<div></div>";
node.insertAdjacentHTML('afterEnd', buy);

let ftb = "<div id='ruler' onClick='r.toggle();'>ft²</div>";
node = document.getElementById('sqrFootIn');
node.insertAdjacentHTML('afterEnd', ftb);


let txt = "<div id='outtxt'><p id='mtxt'>For an  indoor area of [measure] you will need [nboxes] Corsi-Rosenthal Boxes assuming an 8ft ceiling.</p></div>";
node = document.getElementById('inputcontain');
node.insertAdjacentHTML('beforeBegin', txt);

updateTxt(r.meters);
