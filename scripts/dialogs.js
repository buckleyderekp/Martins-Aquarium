const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--fred").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--fred")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--gertrude").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--gertrude")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--bob").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bob")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--clementine").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--clementine")
            theDialog.showModal()
        }
    )

}
export default initializeDetailButtonEvents