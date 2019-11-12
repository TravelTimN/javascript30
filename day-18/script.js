document.addEventListener("DOMContentLoaded", function () {

    // const timeNodes = [...document.querySelectorAll("[data-time]")]; // spread syntax into new Array
    const timeNodes = Array.from(document.querySelectorAll("[data-time]")); // Array.from

    // map it from array of node list, then mapped into seconds
    const seconds = timeNodes
        .map(node => node.dataset.time)
        .map(timeCode => {
            // however, these are blank in console, which means "string"
            // can only do math functions on numbers, not strings
            const [mins, secs] = timeCode.split(":").map(parseFloat);
             // .map(parseFloat) converts from string to integer
            return (mins * 60) + secs;
        })
        // .reduce to get grand total of all seconds
        .reduce((total, secnds) => total + secnds);
    
    let secondsRemaining = seconds; // seconds from above
    const hours = Math.floor(secondsRemaining / 3600); // 4 whole hours
    // hours is actually 4.9 but we want the modulo of that .9 (secRem % 3600) // 3600 = secs in 1hr
    secondsRemaining = secondsRemaining % 3600; // 3538 secs remaining
    const mins = Math.floor(secondsRemaining / 60); // 58 whole mins
    secondsRemaining = secondsRemaining % 60; // 58 secs remaining
    // console everything
    console.log(`Total Time of Videos: ${hours} hours, ${mins} minutes, ${secondsRemaining} seconds`);

    // Extra Credit (from 12:15 in video lesson)
    // Use just a single .reduce without using .map
    // 1. take in the array of nodes
    // 2. convert dataset.time into mins/secs
    // 3. convert that into seconds
    // 4. convert that into whole numbers
    // 5. finally add it all together

});
