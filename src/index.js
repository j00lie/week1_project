import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  // document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  for (let i = 0; i < 5; i++) {
    createWikiItem();
  }
}

function createWikiItem() {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  document.body.appendChild(container);

  let wiki_item = document.createElement("div");
  wiki_item.setAttribute("class", "wiki-item");
  container.appendChild(wiki_item);

  const wiki_header = document.createElement("h1");
  wiki_header.setAttribute("class", "wiki-header");
  wiki_header.innerHTML = "Breed X";
  wiki_item.appendChild(wiki_header);

  let wiki_content = document.createElement("div");
  wiki_content.setAttribute("class", "wiki-content");
  wiki_header.appendChild(wiki_content);

  let content_text = document.createElement("p");
  content_text.setAttribute("class", "wiki-content");
  content_text.innerText = "Some text about this breed.";
  wiki_content.appendChild(content_text);

  let img_container = document.createElement("div");
  img_container.setAttribute("class", "img-container");
  wiki_content.appendChild(img_container);

  let img = document.createElement("img");
  img.setAttribute("class", "wiki-img");
  img.setAttribute("src", "");
  img_container.appendChild(img);
}
