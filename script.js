let started = false;

document.getElementById("click-start").onclick = () => {
    started = true;
    document.getElementById("click-start").style.display = "none";
    document.getElementById("virus-screen").style.display = "block";

    // SOUND
    let audio = new Audio("siren.mp3");
    audio.play();

    // SCREEN SHAKE
    setInterval(() => {
        document.body.style.transform = 
            `translate(${Math.random()*10}px, ${Math.random()*10}px)`;
    }, 50);

    // TERMINAL EFFECT
    const terminal = document.getElementById("terminal");
    let lines = [
        "Scanning system files...",
        "Trojan found in C:/Windows/system32",
        "Deleting system drivers...",
        "Encrypting personal files...",
        "Uploading data to remote server...",
        "ERROR: SYSTEM FAILURE"
    ];
    let i = 0;

    let termInterval = setInterval(() => {
        terminal.innerHTML += lines[i] + "\n";
        i++;
        if (i === lines.length) {
            clearInterval(termInterval);
            fakeUpdate();
        }
    }, 900);
};

// FAKE WINDOWS UPDATE
function fakeUpdate() {
    const win = document.getElementById("windows-update");
    win.style.display = "block";

    let percent = 0;
    let interval = setInterval(() => {
        percent++;
        document.getElementById("percent").innerText = percent + "%";

        if (percent === 100) {
            clearInterval(interval);
            document.getElementById("percent").innerText = 
                "System Destroyed.";
        }
    }, 100);
}
