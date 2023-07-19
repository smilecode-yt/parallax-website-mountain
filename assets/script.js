let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};
