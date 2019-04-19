import Options from "./Options.html";

var options = new Options({
  target: document.body,
  data: {
    options: ["Svelte", "React", "Vue", "Angular"]
  }
});

export default options;
