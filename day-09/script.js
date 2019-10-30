document.addEventListener("DOMContentLoaded", function() {

    const cats = [{name: "Bush Kitty", age: 4}, {name: "Tailless", age: 2}];

    function makeGreen() {
        const p = document.querySelector("p");
        p.style.color = (p.style.color == "lime") ? "black" : "lime";
        p.style.fontSize = (p.style.fontSize == "50px") ? "1em" : "50px";
    }

    document.querySelector("p").addEventListener("click", makeGreen);

    // Regular

    // Interpolated

    // Styled

    // warning!

    // Error :|

    // Info

    // Testing

    // clearing

    // Viewing DOM Elements

    // Grouping together

    // counting

    // timing

});