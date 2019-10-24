window.onload = function () {
    // update picture with random Lorem Picsum image
    const btn = this.document.getElementById("button");
    btn.addEventListener("click", pictureUpdate);
    function pictureUpdate() {
        const image = document.querySelector("img");
        let randomNum = Math.floor((Math.random() * 999) + 1);
        image.src = "https://picsum.photos/id/" + randomNum + "/500/300";
    }

    // get all input fields
    const inputs = document.querySelectorAll(".controls input");

    // get data attributes, and update value using CSS variable + name
    function handleUpdate() {
        const suffix = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    // trigger changes on 'change' and 'slider'
    inputs.forEach(input => input.addEventListener("change", handleUpdate));
    inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
};
