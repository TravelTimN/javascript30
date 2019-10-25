document.addEventListener("DOMContentLoaded", function() {
    const inventors = [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
    ];
    // console.table(inventors);
    const people = ["Beck, Glenn", "Becker, Carl", "Beckett, Samuel", "Beddoes, Mick", "Beecher, Henry", "Beethoven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", "Bellow, Saul", "Benchley, Robert", "Benenson, Peter", "Ben-Gurion, David", "Benjamin, Walter", "Benn, Tony", "Bennington, Chester", "Benson, Leana", "Bent, Silas", "Bentsen, Lloyd", "Berger, Ric", "Bergman, Ingmar", "Berio, Luciano", "Berle, Milton", "Berlin, Irving", "Berne, Eric", "Bernhard, Sandra", "Berra, Yogi", "Berry, Halle", "Berry, Wendell", "Bethea, Erin", "Bevan, Aneurin", "Bevel, Ken", "Biden, Joseph", "Bierce, Ambrose", "Biko, Steve", "Billings, Josh", "Biondo, Frank", "Birrell, Augustine", "Black, Elk", "Blair, Robert", "Blair, Tony", "Blake, William"];
    // console.table(people);

    // FILTER the list of inventors for those who were born  in the 1500's
    const filterDIV = document.getElementById("filter");
    const filterData = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    const filterTable = document.createElement("TABLE");
    const filterTRhead = document.createElement("TR");
    const filterTH1 = document.createElement("TH"); filterTH1.innerHTML = "First"; filterTRhead.appendChild(filterTH1);
    const filterTH2 = document.createElement("TH"); filterTH2.innerHTML = "Last"; filterTRhead.appendChild(filterTH2);
    const filterTH3 = document.createElement("TH"); filterTH3.innerHTML = "Birth"; filterTRhead.appendChild(filterTH3);
    const filterTH4 = document.createElement("TH"); filterTH4.innerHTML = "Death"; filterTRhead.appendChild(filterTH4);
    filterTable.appendChild(filterTRhead);
    filterDIV.appendChild(filterTable);
    filterData.forEach(info => {
        const filterTRbody = document.createElement("TR");
        const filterTD1 = document.createElement("TD"); filterTD1.innerHTML = info.first; filterTRbody.appendChild(filterTD1);
        const filterTD2 = document.createElement("TD"); filterTD2.innerHTML = info.last; filterTRbody.appendChild(filterTD2);
        const filterTD3 = document.createElement("TD"); filterTD3.innerHTML = info.year; filterTRbody.appendChild(filterTD3);
        const filterTD4 = document.createElement("TD"); filterTD4.innerHTML = info.passed; filterTRbody.appendChild(filterTD4);
        filterTable.appendChild(filterTRbody);
    });

    // MAP an array of the inventors' first and last names
    const fullNames= inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    const mapDIV = document.getElementById("map");
    const mapUL = document.createElement("UL");
    fullNames.forEach(name => {
        const mapLI = document.createElement("LI"); mapLI.innerHTML = name; mapUL.appendChild(mapLI);
    });
    mapDIV.appendChild(mapUL);

});
