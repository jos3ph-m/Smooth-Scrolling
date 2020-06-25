import Scrollbar from "smooth-scrollbar";
import { there } from "./there";

const bradaTitle = document.getElementById("brada-title");

bradaTitle.textContent = there("Hello");

let options = {
  damping: 0.1,
};

let customOptions = {
  damping: 0.02,
  thumbMinSize: 100,
  alwaysShowTracks: true,
  continuousScrolling: false,
};

Scrollbar.init(document.querySelector("#my-scrollbar"), options);
Scrollbar.init(document.querySelector("#custom"), customOptions);
