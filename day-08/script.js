document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.querySelector("#canvas");
    const cntxt = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cntxt.strokeStyle = "#d56627";
    cntxt.lineJoin = "round";
    cntxt.lineCap = "round";
    cntxt.lineWidth = 1;
    // cntxt.globalCompositeOperation = "multiply";

    let isDrawing = false;
    let direction = true;
    let lastX, lastY, hue = 0;

    function draw(e) {
        if (!isDrawing) return; // stop function when not moused-down
        cntxt.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        cntxt.beginPath();
        cntxt.moveTo(lastX, lastY);
        cntxt.lineTo(e.offsetX, e.offsetY);
        cntxt.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        hue++;
        if (hue >= 360) {
            hue = 0;
        }
        if (cntxt.lineWidth >= 100 || cntxt.lineWidth <= 1) {
            direction = !direction;
        }
        if (direction) {
            cntxt.lineWidth++;
        } else {
            cntxt.lineWidth--;
        }
        // cntxt.lineWidth(direction ? cntxt.lineWidth++ : cntxt.lineWidth--);
    }

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

});