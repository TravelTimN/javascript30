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

    // Filter the list of inventors for those who were born  in the 1500's
    const fifteensDiv = document.getElementById("fifteens");
    const fifteens = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    const table = document.createElement("TABLE");
    const tableRowHead = document.createElement("TR");
    const tableHeader1 = document.createElement("TH"); tableHeader1.innerHTML = "First"; tableRowHead.appendChild(tableHeader1);
    const tableHeader2 = document.createElement("TH"); tableHeader2.innerHTML = "Last"; tableRowHead.appendChild(tableHeader2);
    const tableHeader3 = document.createElement("TH"); tableHeader3.innerHTML = "Birth"; tableRowHead.appendChild(tableHeader3);
    const tableHeader4 = document.createElement("TH"); tableHeader4.innerHTML = "Death"; tableRowHead.appendChild(tableHeader4);
    table.appendChild(tableRowHead);
    fifteensDiv.appendChild(table);
    fifteens.forEach(function (info) {
        const tableRowBody = document.createElement("TR");
        const tableData1 = document.createElement("TD"); tableData1.innerHTML = info.first; tableRowBody.appendChild(tableData1);
        const tableData2 = document.createElement("TD"); tableData2.innerHTML = info.last; tableRowBody.appendChild(tableData2);
        const tableData3 = document.createElement("TD"); tableData3.innerHTML = info.year; tableRowBody.appendChild(tableData3);
        const tableData4 = document.createElement("TD"); tableData4.innerHTML = info.passed; tableRowBody.appendChild(tableData4);
        table.appendChild(tableRowBody);
    });

    //

});
