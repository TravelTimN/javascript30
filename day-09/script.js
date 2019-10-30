document.addEventListener("DOMContentLoaded", function() {

    const p = document.querySelector("p");

    const cats = [{name: "Bush Kitty", age: 4}, {name: "Tailless", age: 2}];

    function makeGreen() {
        p.style.color = (p.style.color == "lime") ? "black" : "lime";
        p.style.fontSize = (p.style.fontSize == "50px") ? "1em" : "50px";
    }
    document.querySelector("p").addEventListener("click", makeGreen);

    //----- CONSOLE options -----//

    // Regular
    // console.log("Hello World!");

    // Interpolated (%s)
    console.log("Hello %s! You are my %s!", "🐻", "💖");
    // much better now with ES6 backticks: `Hello ${var1}! You are ${var2}!`

    // Styled (%c)
    console.log("%c Check out my styled console text!", "font-size: 2.5em; border: 3px solid green; background-color: black; color: red; text-shadow: 2px 2px 2px blue; padding: 0.5em;");

    // warning!
    console.warn("console.warn() --- A custom warning message in the console.");

    // Error!
    console.error("console.error() --- A custom error message in the console.");

    // Info
    console.info("console.info() --- a small blue info 'i' icon is shown only in Firefox");

    // Testing
    console.assert(1 === 2, "console.assert() only shows if assertion is not 'truthy'. (ie: 1 === 2)");
    console.assert(p.classList.contains("active"), "False! <p> element does not contain class 'active'");

    // clearing
    // console.clear();
    // good for messing with other developers at bottom of script
    console.log("console.clear() --- clears the console entirely --- good for messing with other developers")

    // Viewing DOM Elements
    console.log("console.log(p) --- shows the DOM element:");
    console.log(p);
    console.log("console.dir(p) --- shows the DOM element in full with all nodes, etc:");
    console.dir(p);

    // Grouping together
    console.log("console.group() or console.groupCollapsed + console.groupEnd() --- groups console.log elements.");
    cats.forEach(cat => {
        // console.group(`${cat.name}`);
        console.groupCollapsed(`${cat.name}`);
        console.log(`This is ${cat.name}.`);
        console.log(`${cat.name} is ${cat.age} years old.`);
        console.log(`${cat.name} is ${cat.age * 7} years old in cat-years.`);
        console.groupEnd(`${cat.name}`);
    });

    // counting
    console.log("console.count() --- counts number of times item logged.");
    console.count("Tim");
    console.count("Chris");
    console.count("Tim");
    console.count("Tim");

    // tables
    console.table(cats);

    // timing
    console.log("console.time() --- time how long it takes to do something");
    console.time("fetching data");
    fetch("https://api.github.com/users/traveltimn")
        .then(data => data.json())
        .then(data => {
            console.timeEnd("fetching data");
            console.log(data);
        }
    );

});