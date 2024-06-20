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

;// CONCATENATED MODULE: ./src/Teleparty/BrowseScripts/JioCinema/jio_cinema_browse_injected.js

function addNativePartyButton() {
    if (document.getElementById('native-party-button') != null) {
        return undefined;
    }
    const buttonsContainer = document.querySelector('.mui-style-8eznwp-buttonsContainer');
    if (buttonsContainer == null) {
        return undefined;
    }
    const watchButton = buttonsContainer.children[0];
    const nativePartyButton = document.createElement('button');
    nativePartyButton.setAttribute('style', 'background: linear-gradient(273.58deg, #9E55A0 0%, #EF3E3A 100%); border-color: #e50914; color: #fff;display: inline-flex; align-items: center; justify-content: center; border-radius: 250px; padding: 12px 24px; cursor: pointer; font-family: "JioType Var"; font-weight: 500; font-size: 0.875rem; line-height: 1.75; height: 48px; margin-right: 6px;');
    nativePartyButton.setAttribute('id', 'native-party-button');
    nativePartyButton.innerHTML = '<span>Start a Teleparty</span>';
    buttonsContainer.style.flexDirection = 'row';
    buttonsContainer.insertBefore(nativePartyButton, buttonsContainer.children[0]);
    return [{ button: nativePartyButton, play: () => watchButton.click() }];
}
addNativePartyHandler(addNativePartyButton);

/******/ })()
;