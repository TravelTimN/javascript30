document.addEventListener("DOMContentLoaded", function () {
    //
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition;
    recognition.interimResults = true;

    let p = document.createElement("p");
    const words = document.querySelector(".words");
    words.appendChild(p);

    recognition.addEventListener("result", e => {
        let transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");
        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement("p");
            words.appendChild(p);
        }


        // would need to 'debounce' or run every so often (call functions)
        if (transcript.includes("get the weather")) {
            console.log("Getting the weather for Dublin");
        }
        if (transcript.includes("I like to travel")) {
            p.append("🙋‍♂️💙✈🌎");
        }
    });

    recognition.addEventListener("end", recognition.start);
    recognition.start();
});
