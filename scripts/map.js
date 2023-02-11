const buttonSubmit = document.getElementById("button-submit");
const mapBanOne = document.getElementById("map-ban-one");
const mapBanTwo = document.getElementById("map-ban-two");

const maps = ["Ascent", "Bind", "Breeze", "Fracture", "Haven", "Icebox", "Lotus", "Pearl", "Split"];

buttonSubmit.addEventListener("click", () => {
    // Prevent default form submit
    event.preventDefault();

    // shuffle array
    let shuffledMaps = shuffle(maps);

    // pick a random integer
    const randomInt = randomInteger(0, shuffledMaps.length - 1);
    
    // get values from form
    const banOne = mapBanOne.value;
    const banTwo = mapBanTwo.value;

    // remove banned maps from shuffledMaps array
    let index = shuffledMaps.indexOf(banOne);
    if (index !== -1) {
        shuffledMaps.splice(index, 1);
    }

    index = shuffledMaps.indexOf(banTwo);
    if (index!== -1) {
        shuffledMaps.splice(index, 1);
    }

    // shuffle array again
    shuffledMaps = shuffle(shuffledMaps);

    alert(`Banned Maps: ${banOne} & ${banTwo}\nMap Chosen: ${shuffledMaps[randomInt]}`);

});

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Get random integer between min (inclusive) and max (inclusive)
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}