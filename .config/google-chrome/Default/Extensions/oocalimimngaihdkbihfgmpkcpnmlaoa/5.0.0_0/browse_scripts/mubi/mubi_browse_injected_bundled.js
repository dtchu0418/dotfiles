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

;// CONCATENATED MODULE: ./src/Teleparty/BrowseScripts/Mubi/mubi_browse_injected.js

function addNativePartyButton() {
    var _a, _b;
    if (document.getElementById('native-party-button') != null) {
        return undefined;
    }
    const buttonsContainer = document.querySelector('[itemprop="trailer"]');
    if (buttonsContainer == null) {
        return undefined;
    }
    let watchButton = (_a = document.querySelector('#watch-now-button')) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (watchButton == null) {
        watchButton = (_b = document.querySelector('[data-testid="play-button"]')) === null || _b === void 0 ? void 0 : _b.parentElement;
        if (watchButton == null)
            return undefined;
    }
    const trailerButton = buttonsContainer.querySelector('a');
    const nativePartyButton = document.createElement('button');
    nativePartyButton.setAttribute('style', 'background: linear-gradient(273.58deg, #9E55A0 0%, #EF3E3A 100%); border-color: #e50914; color: #fff;display: inline-flex; align-items: center; justify-content: center; cursor: pointer; margin-right: 6px;');
    nativePartyButton.setAttribute('id', 'native-party-button');
    nativePartyButton.setAttribute('class', trailerButton.classList.toString());
    nativePartyButton.innerHTML = '<span>Start a Teleparty</span>';
    buttonsContainer.style.flexDirection = 'row';
    buttonsContainer.style.display = 'flex';
    buttonsContainer.insertBefore(nativePartyButton, trailerButton);
    return [{ button: nativePartyButton, play: () => watchButton.click() }];
}
addNativePartyHandler(addNativePartyButton);

/******/ })()
;