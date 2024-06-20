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

;// CONCATENATED MODULE: ./src/Teleparty/BrowseScripts/Stan/stan_browse_injected.js

function addNativePartyButton() {
    if (document.getElementById('native-party-button') != null) {
        return undefined;
    }
    const buttonsContainer = document.querySelector('.program__actions');
    if (buttonsContainer == null) {
        return undefined;
    }
    const watchButton = buttonsContainer.querySelector('a');
    const nativePartyButton = document.createElement('a');
    nativePartyButton.setAttribute('style', 'background: linear-gradient(273.58deg, #9E55A0 0%, #EF3E3A 100%); border-color: #e50914; color: #fff;');
    nativePartyButton.setAttribute('id', 'native-party-button');
    nativePartyButton.setAttribute('class', watchButton.getAttribute('class'));
    nativePartyButton.innerHTML = '<span>Start a Teleparty</span>';
    buttonsContainer.insertBefore(nativePartyButton, buttonsContainer.children[0]);
    return [{ button: nativePartyButton, play: () => watchButton.click() }];
}
addNativePartyHandler(addNativePartyButton);

/******/ })()
;