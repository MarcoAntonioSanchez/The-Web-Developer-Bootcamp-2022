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

// - getElementsByTagName
// - getElementsByClassName

const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const links = document.querySelectorAll("p a");

for (let link of links) {
  console.log(link.href);
}
