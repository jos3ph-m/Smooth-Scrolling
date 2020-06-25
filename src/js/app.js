import Scrollbar from "smooth-scrollbar";
import { brada } from "./brada";

const bradaTitle = document.getElementById("brada-title");

bradaTitle.textContent = brada("Hello");

let options = {
  damping: 0.1,
};

let customOptions = {
  damping: 0.07,
};

Scrollbar.init(document.querySelector("#my-scrollbar"), options);
Scrollbar.init(document.querySelector("#custom"), customOptions);
