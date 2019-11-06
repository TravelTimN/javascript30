document.addEventListener("DOMContentLoaded", function () {

    /*
        * JS Reference vs. Copy
    */


    // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2); // 100, 100
    age = 200;
    console.log(age, age2); // 200, 100 (age2 not redefined)

    let name = "Tim";
    let name2 = name;
    console.log(name, name2); // Tim, Tim
    name = "Chris";
    console.log(name, name2); // Chris, Tim

    let a = true;
    let aa = a;
    console.log(a, aa); // a, a
    a = false;
    console.log(a, aa); // false, true


    // Let's say we have an array
    const players = ["Wes", "Sarah", "Ryan", "Poppy"];
    // and we want to make a copy of it.
    const team = players;
    console.log(players); // [Wes, Sarah, Ryan, Poppy]
    // You might think we can just do something like this:
    /////// commented out so below will work // team[3] = "Lux";
    // however what happens when we update that array?
    console.log(team); // [Wes, Sarah, Ryan, Lux]
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!
    // one way
    const team2 = players.slice();
    console.log(team2); // [Wes, Sarah, Ryan, Poppy]
    team2[3] = "Lux";
    console.log(team2, players); // [Wes, Sarah, Ryan, Lux]
    console.log(players); // [Wes, Sarah, Ryan, Poppy]

    // or create a new array and concat the old one in
    const team3 = ["Lux"].concat(players);
    console.log(team3); // [Lux, Wes, Sarah, Ryan, Poppy]

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = "Tim"
    console.log(players); // [Wes, Sarah, Ryan, Poppy]
    console.log(team4); // [Wes, Sarah, Ryan, Tim]

    const team5 = Array.from(players);
    team5[3] = "Chris";
    console.log(players); // [Wes, Sarah, Ryan, Poppy]
    console.log(team5); // [Wes, Sarah, Ryan, Chris]
    // now when we update it, the original one isn't changed


    // The same thing goes for objects, let's say we have a person object


    // with Objects


    const person = {
        name: 'Wes Bos',
        age: 80
    };


    // and think we make a copy:


    // how do we take a copy instead?


    // We will hopefully soon see the object ...spread


    // Things to note - this is only 1 level deep - both for Arrays and Objects.
    // lodash has a cloneDeep method, but you should think twice before using it.



});