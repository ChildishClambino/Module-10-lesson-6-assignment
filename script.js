const ts = 1
const privateKey = '6e0ddda3a17ae2117c18e95dd173206e804689e5'
const hash = 'f85478668f2d8bd2da663d2501fec1cb'
const publicKey ='4fa59fddcf6fc8f8b89e6ec6d1b5b700'


async function fetchMarvelCharactersInfo() {
    try {
        const response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
        const data = await response.json();
        return data.data.results;
    } catch (error) {
        console.log("Error", error)
    }
}

async function displayCharacters() {
    const characters = await fetchMarvelCharactersInfo();
    const charactersInfo = document.getElementById("charactersInfo");

    characters.forEach((character => {
        const characterDiv = document.createElement("div");
        characterDiv.className = "character";

        characterDiv.innerHTML = `
        <h4>${character.name}</h4>
        <p>${character.description || "No description available"}</p>
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}"
        alt =${character.name} picture">
        `;

        charactersInfo.appendChild(characterDiv)
    }));
}

addEventListener("DOMContentLoaded", async (event) => {
    await displayCharacters();
});


