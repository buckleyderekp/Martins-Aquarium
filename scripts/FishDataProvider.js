const fishCollection = [
    {
        name: "Bart",
        species: "Orange Clownfish",
        location: "Carribean",
        length: "3 inches",
        food: ["algae", "crustaceans"],
        image: "https://3.imimg.com/data3/IW/XT/GLADMIN-105863/fish-125x125.jpg"
    },
    {
        name: "Betty",
        species: "Yellow Tang",
        location: "Carribean",
        length: "7.9 inches",
        food: ["benthic turf algae"],
        image: "http://fishstoresnearme.com/search/images/53298625755ecc2d963806_exoticfishreef.jpg"
    },
    {
        name: "Fred",
        species: "Lionfish",
        location: "Carribean",
        length: "6 inches",
        food: ["small fish", "invertabrates", "mollusks"],
        image: "https://oceana.org/sites/default/files/styles/ntsc/public/shutterstock_273670535.jpg?itok=Q-A64Woy"
    },
    {
        name: "Gertrude",
        species: "Discus Fish",
        location: "Carribean",
        length: "9 inches",
        food: ["zooplankton", "inscects"],
        image: "https://i.pinimg.com/236x/27/94/c3/2794c3615cacca410bfbb64b00ae64ae--discus-fish-fish-wallpaper.jpg"
    },
    {
        name: "Bob",
        species: "Blob Fish",
        location: "Atlantic Ocean",
        length: "12 inches",
        food: ["sea urchins", "mollusks"],
        image: "https://thumbs-prod.si-cdn.com/MDU2xZ_XflVMF5zeHM1yP3SOsqo=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/Blobfish-ugly-470.jpg"
    },
    {
        name: "Clementine",
        species: "Angelfish",
        location: "Pacific Ocean",
        length: "9 inches",
        food: ["algae", "jellyfish", "plankton"],
        image: "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80 "
    },

]
export const useFish = () => {
    return fishCollection.slice()
}