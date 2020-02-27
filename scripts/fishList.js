/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish } from "./FishDataProvider.js"
import Fish from "./fish.js"

// Import `useFish` from the data provider module

const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject)
    }
}

export default FishList