const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");

const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = () =>{
    memeImage.setAttribute("src", data.url);
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(response => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author);
    })
};
generateMemeBtn.addEventListener("click", generateMeme);