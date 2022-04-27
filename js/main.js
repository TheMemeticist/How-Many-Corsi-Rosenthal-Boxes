
let node = document.getElementById('container');

let getbuttons = "<div id='CRButts'> <a href='order.html'> <div id='buy'>Order <span class='material-icons md-light'>shopping_cart</span></div></a><a href='build.html'> <div id='build'>Build ️<span class='material-icons md-light'>build</span></div></a> </div>";
node.insertAdjacentHTML('afterBegin', getbuttons);

node = document.getElementById('container');




let txt = "<p>This app has mutated into a new variant called VapourWare. Click the link below.</p><a href='https://thememeticist.github.io/VapourWare/'><div id='vape'><img src='assets/VapourWare.jpg'></div></a><p>But you can still find links to build CR-Boxes for now. *Always consult your local HVAC specialists.</p>";
node.insertAdjacentHTML('beforeBegin', txt);

updateTxt(r.meters);
