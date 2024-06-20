/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/Teleparty/BrowseScripts/NativePartyHandler.ts
const addNativePartyHandler = (tryAddButton) => {
    setInterval(() => {
        try {
            const buttons = tryAddButton();
            if (buttons) {
                for (const button of buttons) {
                    button.button.addEventListener("click", () => {
                        localStorage.setItem("nativeParty", JSON.stringify({
                            shouldStart: true,
                            expiry: Date.now() + 1000 * 60 * 2,
                            randomId: Math.random().toString(),
                        }));
                        button.play();
                        // Clear the click event listener
                        button.button.removeEventListener("click", () => {
                            //
                        });
                    });
                }
            }
        }
        catch (error) {
            // silent catch
        }
    }, 500);
};

;// CONCATENATED MODULE: ./src/Teleparty/BrowseScripts/Crave/crave_browse_injected.js

function addNativePartyButton() {
    if (document.getElementById('native-party-button') != null) {
        return undefined;
    }
    const button = document.querySelector('[data-link-type="show-page-cta"]');
    if (button == null) {
        return undefined;
    }
    const nativePartyButton = document.createElement('a');
    nativePartyButton.setAttribute('style', 'background: linear-gradient(273.58deg, #9E55A0 0%, #EF3E3A 100%); border-color: #e50914; color: #fff !important; cursor: pointer;');
    nativePartyButton.setAttribute('id', 'native-party-button');
    nativePartyButton.innerHTML = '<span>Start a Teleparty</span>';
    nativePartyButton.setAttribute('data-button-style', "PRIMARY");
    button.parentElement.insertBefore(nativePartyButton, button);
    return [{ button: nativePartyButton, play: () => button.click() }];
}
addNativePartyHandler(addNativePartyButton);

/******/ })()
;