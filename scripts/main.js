import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'
import FishList from './fishList.js'
import useTips from './tips/tipDataProvider.js'
import Tip from './tips/tip.js'
import TipList from './tips/tipList.js'

TipList()
FishList()
// const arrayOfTheFishObjects = useFish()
// initializeDetailButtonEvents()

// for (const fishObject of arrayOfTheFishObjects) {
//     console.log(fishObject)
// }