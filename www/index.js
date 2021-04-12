import "./style.scss";

// eslint-disable-next-line import/no-unresolved
import { SignatureTemplate } from "esig";
import hljs from "highlight.js/lib/core";

hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"));

const signaturePre = document.querySelector("#signature-pre");
const signatureText = document.querySelector("#signature-text");
const signatureTemplate = SignatureTemplate.new();

// eslint-disable-next-line no-unused-vars
const doUpdate = () => {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const linkedin = document.getElementById("linkedin").value;
  const website = document.getElementById("website").value;

  const result = signatureTemplate.interpolate(
    name,
    position,
    phone,
    email,
    linkedin,
    website
  );
  signaturePre.textContent = result;
  signatureText.textContent = result;

  hljs["highlightElement"](signaturePre);
};

document.querySelector("#copy2clipboard").addEventListener("click", () => {
  //here code
  signatureText.select();
  document.execCommand("copy");
});

document.querySelector("#result-pane").addEventListener("mouseenter", () => {
  document.querySelector("#copy2clipboard").classList.remove("hidden");
});

document.querySelector("#result-pane").addEventListener("mouseleave", () => {
  document.querySelector("#copy2clipboard").classList.add("hidden");
});

document.querySelector(".default-text-input").addEventListener("input", () => {
  //here code
  doUpdate();
});

document.addEventListener("DOMContentLoaded", () => {
  //here code
  console.log("DOM content loaded!");
  doUpdate();
});
