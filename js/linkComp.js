

class Link {
  constructor(name, link) {
    let d = "<a href='link'><div class='lcontainer'><img id='limg' src='is'><p>title</p></div></a>";
    let il = 'assets/links/' + name + '.png'
    d = d.replace("is", il);
    d = d.replace("'link'", link);
    d = d.replace("title", name);
    let node = document.getElementById("linkscont");
    node.insertAdjacentHTML('afterbegin', d);
  }
}

export {Link};
