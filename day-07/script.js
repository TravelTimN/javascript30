document.addEventListener("DOMContentLoaded", function() {

    const people = [
        {name: "Melessa", year: 1979},
        {name: "Danny", year: 1982},
        {name: "Stacy", year: 1983},
        {name: "Tim", year: 1984},
        {name: "Jenn", year: 1987},
        {name: "Baby", year: 2010}
    ];

    const comments = [
        {text: "Love this!", id: 523423},
        {text: "Super good", id: 823423},
        {text: "You are the best", id: 2039842},
        {text: "Ramen is my fav food ever", id: 123523},
        {text: "Nice Nice Nice!", id: 542328},
    ];

    // Array.prototype.some() // is at least one person 19?
    // Array.prototype.every() // is everyone 19?

    // version 1
    const isAdult = people.some((person) => {
        const currentYear = new Date().getFullYear();
        return currentYear - person.year >= 19;
    });
    // version 2 (shorthand / implicit return)
    const isAdultAlt = people.some((person) => new Date().getFullYear() - person.year >= 19);

    
    console.log({isAdult})
    console.log({isAdultAlt})

});
