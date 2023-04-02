// Selecting

// - getElementById
document.getElementById("chicken");
// Output: undefined

document.getElementById("banner");
// Output: <img id="banner" src="" alt="">

const banner = document.getElementById("banner");
banner;
// Output: <img id="banner" src="" alt="">

const toc = document.getElementById("toc");
console.dir(toc);
// Output Object{ toc {HTML attributes} }
