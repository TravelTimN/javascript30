document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.querySelector("canvas");
    const canvasContext = canvas.getContext("2d"); // can't draw on canvas, only canvas context
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasContext.lineJoin = "round";
    canvasContext.lineCap = "round";
    // canvasContext.strokeStyle = "#000000"; // initial stroke color (overridden below)
    // canvasContext.lineWidth = 1; // initial line width (overridden below)

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
    // canvasContext.globalCompositeOperation = "color";

    let isDrawing = false;
    let direction = true;
    let lastX, lastY, hue = 0;

    function draw(e) {
        if (!isDrawing) return; // stop function when not moused-down
        canvasContext.strokeStyle = `hsl(${hue}, 100%, 50%)`; // set stroke color to HSL
        canvasContext.beginPath(); // begin drawing path
        canvasContext.moveTo(lastX, lastY); // end drawing path
        canvasContext.lineTo(e.offsetX, e.offsetY); // connect points from moveTo to lineTo
        canvasContext.stroke(); // add stroke line of path
        [lastX, lastY] = [e.offsetX, e.offsetY]; // reset last X/Y to recent offsets
        hue++; // increment HSL hue by 1 each time
        if (hue >= 360) {hue = 0;} // once hue is 360, reset to 0
        if (canvasContext.lineWidth >= 100 || canvasContext.lineWidth <= 1) {direction = !direction;} // swap true/false
        if (direction) {canvasContext.lineWidth++;} else {canvasContext.lineWidth--;} // increment and decrement accordingly
    }

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY]; // reset last X/Y to recent offsets
    });

});