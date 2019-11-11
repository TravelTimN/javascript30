document.addEventListener("DOMContentLoaded", function () {

    const bands = [
        "The Plot in You", "The Devil Wears Prada", "Pierce the Veil", "Norma Jean",
        "The Bled", "Say Anything", "The Midway State", "We Came as Romans",
        "Counterparts", "Oh, Sleeper", "A Skylit Drive", "Anywhere But Here", "An Old Dog"
    ];

    // replace 'a ', 'an ', 'the ' with nothing
    function strip(bandName) {
        return bandName.replace(/^(a|the|an) /i, "").trim();
    }

    // sort bands using arrow function + ternary operator
    sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

    // map each ban to <li> within <ul#bands>
    document.querySelector("#bands").innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("");

});
