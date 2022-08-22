const form = document.querySelector("#form");
const searchTerm = document.querySelector("#searchTerm");

// When the user submits the form, use axios to make a request to GIPHY for information based on that term
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const res = await axios.get("https://api.giphy.com/v1/gifs/search?", {
    params: {
      q: searchTerm.value,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });

  // grab a GIF from the response data and append the GIF to the page
  const newGif = document.createElement("img");
  newGif.setAttribute(
    "src",
    `${res.data.data[Math.floor(Math.random() * 50)].images.original.url}`
  );
  document.querySelector(".gifs").append(newGif);

  // clear the search input
  searchTerm.value = "";
});

// make remove button work
const removeBtn = document.querySelector(".remove");
removeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".gifs").innerHTML = "";
});
