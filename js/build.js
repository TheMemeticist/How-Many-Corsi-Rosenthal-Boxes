import {Link} from './linkComp.js';


let buildlinks = {
  'Single Filter Air Cleaner':'https://www.youtube.com/watch?v=lEpFeiWwvPI',
  'Table-Top Box':'https://github.com/661020786/Anemoi',
  'CR-Thomas Box V1':'https://grabcad.com/library/diy-corsi-rosenthal-thomas-box-v1-20x25x1-inch-filters-1',
  'CAD Model':'https://grabcad.com/library/diy-corsi-rosenthal-box-20x20x1-inch-filters-1',
  'First Time Build':'https://www.youtube.com/watch?v=aEn2xzlvrdo',
  'How to Make a CR-Box':'https://www.youtube.com/watch?v=aw7fUMhNov8',
  'Universal CR-Box':'https://www.instructables.com/Efficient-Box-Fan-Air-Cleaner-a-Universal-Corsi-Ro/',
  'DIY Box Fan Air Filters':'https://cleanaircrew.org/box-fan-filters/',
};
let videos = ['How to Make a CR-Box', 'First Time Build', 'Single Filter Air Cleaner'];
let links = [];
let node = document.getElementsByTagName("BODY")[0];
let d = "<a href='index.html'><div id='backbutt'><div class='material-icons md-light'>home</div></div><a><div id='linkscont'></div>";
node.insertAdjacentHTML('afterbegin', d);
for (let key in buildlinks) {
  let l;
  if (videos.includes(key)) {
    l = new Link(key, buildlinks[key], true);
  } else {
    l = new Link(key, buildlinks[key]);
  }
  links.push(l);
};
