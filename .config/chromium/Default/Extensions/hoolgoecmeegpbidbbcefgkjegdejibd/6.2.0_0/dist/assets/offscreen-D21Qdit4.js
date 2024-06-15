import "./modulepreload-polyfill-C-G4TmQA.js";

async function handleMessages(message) {
    if (message.target !== "offscreen") return false;
    switch (message.type) {
      case "PLAY_AUDIO":
        {
            const audio = new Audio;
            audio.src = message.data;
            await audio.play();
        }
        break;

      default:
        console.warn(`Unexpected message type received: '${message.type}'.`);
        return false;
    }
}

chrome.runtime.onMessage.addListener((msg => void handleMessages(msg)));
