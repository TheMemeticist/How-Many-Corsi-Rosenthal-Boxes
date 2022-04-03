

import {Link} from './linkComp.js';

let buylinks = {
  'Clean AR Air':'https://cleanarair.com/',
  'Clean Air Crew':'https://cleanaircrew.org/air-cleaners/',
  'Mini CR-Box':'https://www.texairfilters.com/mini-corsi-rosenthal-box-filter-kit/',
  'Zero COVID Canada':'https://docs.google.com/presentation/d/150_1ImNcnlaKI3DElDcHfO7sVkSW_4_Anm76O9BHw0E/edit#slide=id.p',
};

let links = [];
let node = document.getElementsByTagName("BODY")[0];
let d = "<a href='index.html'><div id='backbutt'><div class='material-icons md-light'>arrow_back</div></div><div id='linkscont'></div><a>";
node.insertAdjacentHTML('afterbegin', d);
for (let key in buylinks) {
  let l = new Link(key, buylinks[key]);
  links.push(l);
};
