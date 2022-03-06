

class LinkchainTxt {
  constructor() {

  }
  on() {
    document.getElementById('lctxt').innerHTML = 'Linkchain 🔗⛓️';
    document.getElementById('linkimg').src = './assets/Linkchain-EpiYeti@.png';
    document.getElementById('linkimg').style = 'border:none;border-radius:0px;';
  }
  off() {
    document.getElementById('lctxt').innerHTML = 'Epi-Yeti ✅';
    document.getElementById('linkimg').src = './assets/Linkchain-EpiYeti.png';
    document.getElementById('linkimg').style = '';
  }
}

let lctxt = new LinkchainTxt();


node = document.body;
let e = '<div onmouseover="lctxt.on()" onmouseout="lctxt.off()" id="linkcontainer"><linkbutt ><a href="https://thememeticist.github.io/Linkchain/">[inner]</a></linkbutt></div>';

let i = '<div >[inner]</div>';

let i2 = '<img width="64" height="64" id="linkimg" src="./assets/Linkchain-EpiYeti.png"><p id="lctxt">Epi-Yeti ✅</p>';



i = i.replace('[inner]', i2);

e = e.replace('[inner]', i);

node.insertAdjacentHTML('afterBegin', e);
