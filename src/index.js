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
  // https://dog.ceo/api/breed/hound/images/random
  let breeds = ["affenpinscher", "african", "airedale", "akita", "appenzeller"];
  breeds.forEach((breed) => createWikiItem(breed));
}

function createWikiItem(breed) {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  document.body.appendChild(container);

  let wiki_item = document.createElement("div");
  wiki_item.setAttribute("class", "wiki-item");
  container.appendChild(wiki_item);

  const wiki_header = document.createElement("h1");
  wiki_header.setAttribute("class", "wiki-header");
  wiki_header.innerHTML = "Breed: " + breed;
  wiki_item.appendChild(wiki_header);

  let wiki_content = document.createElement("div");
  wiki_content.setAttribute("class", "wiki-content");
  wiki_item.appendChild(wiki_content);

  let img_container = document.createElement("div");
  img_container.setAttribute("class", "img-container");
  wiki_content.appendChild(img_container);

  let content_text = document.createElement("p");
  content_text.setAttribute("class", "wiki-text");
  content_text.innerText = "Some text about this breed.";
  wiki_content.appendChild(content_text);

  let img = document.createElement("img");
  img.setAttribute("class", "wiki-img");
  let url = `https://dog.ceo/api/breed/${breed}/images/random`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      img.src = result.message;
    });
  //img.alt = "Picture of " + breed;
  img_container.appendChild(img);
}
