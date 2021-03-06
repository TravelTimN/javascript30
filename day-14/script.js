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
    const captain = person;
    captain.number = 99;
    console.log(person);
    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {number: 98, age: 12});
    console.log(cap2);

    // We will hopefully soon see the object ...spread
    // EDIT: this is working! video must be outdated
    const cap3 = {...person};
    console.log(cap3);
    // Things to note - this is only 1 level deep - both for Arrays and Objects.
    // lodash has a cloneDeep method, but you should think twice before using it.

    const tim = {
        name: "Tim",
        age: 35,
        social: {
            slack: "tim_ci",
            linkedin: "travel-tim-nelson"
        }
    }
    console.log(tim);
    // make a copy of 'tim' Object
    const dev = Object.assign({}, tim);
    dev.name = "Chris";
    dev.age = 36;
    //////////// dev.social.slack = "2bn-chris";
    //////////// dev.social.linkedin = "c-quinn";
    // doing this will cause 'tim' social objects to update as well
    // because it can only go 1 level deep... nothing within social
    // you would need to 'clone deep'/'deep clone' to fix this problem
    console.log(dev);
    // another way aside from deep cloning, doesn't affect tim.social
    // JSON.stringify(tim) this turns it into a string though, no longer an object
    // but adding JSON.part(...) will turn it back into an Object
    // no insight on performance with this, but is a hacky way of achieving this
    const dev2 = JSON.parse(JSON.stringify(tim));
    dev2.name = "Chris";
    dev2.age = 36;
    dev2.social.slack = "2bn-chris";
    dev2.social.linkedin = "c-quinn";
    console.log(dev2);

});