/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";
import Fish from "./fish.js";

// Import `useFish` from the data provider module

const contentTarget = document.querySelector(".fishList")

const FishList = () => {
    let fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation

    }

    fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }

    fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }
}

export default FishList