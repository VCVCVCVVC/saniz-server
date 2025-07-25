// script.js

// Function to copy IP to clipboard
function copyIp() {
    const ipInput = document.getElementById('serverIp');
    const copyMessage = document.getElementById('copyMessage');
    ipInput.select();
    document.execCommand('copy'); // Use execCommand for broader compatibility in iframes
    copyMessage.classList.remove('hidden');
    setTimeout(() => {
        copyMessage.classList.add('hidden');
    }, 3000); // Hide message after 3 seconds
}

// --- Developer Tools Deterrent ---
// Disable F12 key
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        // Optional: Display a message to the user
        // console.log("Developer tools are disabled.");
    }
});

// Disable Ctrl+Shift+I (Windows/Linux) and Cmd+Option+I (Mac)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
        e.preventDefault();
        // Optional: Display a message to the user
        // console.log("Developer tools are disabled.");
    }
    // For Mac users (Cmd+Option+I)
    if (e.metaKey && e.altKey && e.key === 'I') {
        e.preventDefault();
        // Optional: Display a message to the user
        // console.log("Developer tools are disabled.");
    }
});

// Disable right-click context menu (which often contains "Inspect Element")
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    // Optional: Display a message to the user
    // console.log("Right-click is disabled.");
});

// Detect if developer tools are open (less reliable, but can be a deterrent)
// This method is often flagged by linters as it's a "hacky" way to detect dev tools.
// It works by checking the difference in console.log behavior or window size changes.
// For simplicity and effectiveness, focusing on keyboard shortcuts is usually better.
// This part is commented out as it's less reliable and can cause performance issues.
/*
const devtools = /./;
devtools.toString = function() {
    this.opened = true;
};
setInterval(function() {
    console.log(devtools);
    if (devtools.opened) {
        // Redirect or show a message
        // window.location.href = "about:blank";
        // alert("Developer tools detected!");
        devtools.opened = false; // Reset for next check
    }
}, 1000);
*/
