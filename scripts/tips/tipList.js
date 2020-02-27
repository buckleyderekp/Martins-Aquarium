import useTips from "./tipDataProvider.js";
import Tip from "./tip.js";




const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElementTip = document.querySelector(".tip")
    const individualTips = useTips()

    for (const tipObject of individualTips) {
        contentElementTip.innerHTML += Tip(tipObject)
    }
}
export default TipList