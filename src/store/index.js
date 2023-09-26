import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFulltexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
//logo parts

export default state;
