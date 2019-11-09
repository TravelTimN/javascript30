document.addEventListener("DOMContentLoaded", function () {

    const addItems = document.querySelector(".add-items");
    const itemsList = document.querySelector(".plates");
    const items = JSON.parse(localStorage.getItem("items")) || []; // existing localStorage items, or blank []


    function addItem(e) {
        e.preventDefault(); // stop page from reloading
        const text = (this.querySelector("[name=item]")).value; // get item name from input
        const item = {
            // text: text,
            text, // shorthand ES6 of same exact line above (text: text)
            done: false
        }
        items.push(item); // push the item into 'items[]'
        populateList(items, itemsList); // visually update the checkbox
        // localStorage.setItem("items", items); // returns [object Object] in Application>LocalStorage
        localStorage.setItem("items", JSON.stringify(items)); // localStorage only accepts 'strings'
        this.reset(); // reset the input to blank
    }

    function populateList(plates = [], platesList) {
        // add new <li> item with <input> + <label> for each item pushed to items[]
        platesList.innerHTML = plates.map((plate, i) => {
            return `
                <li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""}>
                    <label for="item${i}">${plate.text}</label>
                </li>
            `;
        }).join("");
    }

    function toggleDone(e) {
        if (!e.target.matches("input")) return; // skip this unless it's an <input> element
        const el = e.target; // <input> is the event target
        const index = el.dataset.index; // index is the data-index value
        items[index].done = !items[index].done; // toggle boolean of 'done'
        localStorage.setItem("items", JSON.stringify(items)); // store it in localStorage
        populateList(items, itemsList); // visually update the checkbox
    }

    addItems.addEventListener("submit", addItem); // on 'submit', add value of input
    itemsList.addEventListener("click", toggleDone); // on 'click', toggle checkbox
    populateList(items, itemsList); // build list of <li> elements from localStorage or new items

});