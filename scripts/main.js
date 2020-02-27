import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'
import FishList from './fishList.js'

FishList()
const arrayOfTheFishObjects = useFish()
// initializeDetailButtonEvents()

// for (const fishObject of arrayOfTheFishObjects) {
//     console.log(fishObject)
// }