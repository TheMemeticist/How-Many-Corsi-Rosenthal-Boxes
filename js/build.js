import {Link} from './linkComp.js';


let buildlinks = {
  'First time build - James Smith':'https://www.youtube.com/watch?v=aEn2xzlvrdo',
  'Ask This Old House':'https://www.youtube.com/watch?v=aw7fUMhNov8',
  'Instructables':'https://www.instructables.com/Efficient-Box-Fan-Air-Cleaner-a-Universal-Corsi-Ro/',
  'Clean Air Crew':'https://cleanaircrew.org/box-fan-filters/',
};

let links = [];
let node = document.getElementsByTagName("BODY")[0];
let d = "<a href='index.html'><div id='backbutt'><div class='material-icons md-light'>arrow_back</div></div><div id='linkscont'></div><a>";
node.insertAdjacentHTML('afterbegin', d);
for (let key in buildlinks) {
  let l = new Link(key, buildlinks[key]);
  links.push(l);
};
