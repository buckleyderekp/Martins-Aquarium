const fishCollection = [
    {
        name: "Bart",
        species: "Orange Clownfish",
        location: "Carribean",
        length: 5,
        food: ["algae", "crustaceans"],
        image: "https://3.imimg.com/data3/IW/XT/GLADMIN-105863/fish-125x125.jpg"
    },
    {
        name: "Betty",
        species: "Yellow Tang",
        location: "Carribean",
        length: 7.9,
        food: ["benthic turf algae"],
        image: "http://fishstoresnearme.com/search/images/53298625755ecc2d963806_exoticfishreef.jpg"
    },
    {
        name: "Fred",
        species: "Lionfish",
        location: "Carribean",
        length: 6,
        food: ["small fish", "invertabrates", "mollusks"],
        image: "https://oceana.org/sites/default/files/styles/ntsc/public/shutterstock_273670535.jpg?itok=Q-A64Woy"
    },
    {
        name: "Gertrude",
        species: "Discus Fish",
        location: "Carribean",
        length: 10,
        food: ["zooplankton", "inscects"],
        image: "https://i.pinimg.com/236x/27/94/c3/2794c3615cacca410bfbb64b00ae64ae--discus-fish-fish-wallpaper.jpg"
    },
    {
        name: "Bob",
        species: "Blob Fish",
        location: "Atlantic Ocean",
        length: 11,
        food: ["sea urchins", "mollusks"],
        image: "https://thumbs-prod.si-cdn.com/MDU2xZ_XflVMF5zeHM1yP3SOsqo=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/Blobfish-ugly-470.jpg"
    },
    {
        name: "Clementine",
        species: "Angelfish",
        location: "Pacific Ocean",
        length: 9,
        food: ["algae", "jellyfish", "plankton"],
        image: "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80 "
    },

]
export const useFish = () => {
    return fishCollection.slice()
}
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}