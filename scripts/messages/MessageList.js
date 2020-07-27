import { getMessagesByFriend } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")
const friendListSection = document.querySelector(".friends")

/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
    render([])
}

/*
    RENDERING FUNCTION
*/
const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}

// Listen for when a friend is selected
friendListSection.addEventListener("change", changeEvent => {

    if (changeEvent.target.classList.contains("friend")) {
        // Get messages for friend and render the list of messages
        const friendName = changeEvent.target.value
        const messages = getMessagesByFriend(friendName)
        render(messages)
    }
})

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.
*/
const eventHub = document.querySelector(".container")

eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    contentTarget.classList = []
    contentTarget.classList.add(color)
})
