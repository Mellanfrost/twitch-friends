const chatContainer = ".chat-scrollable-area__message-container"
const messageContainer = ".chat-line__message"
const messageText = ".text-fragment"
const messageUsername = ".chat-author__display-name"
const messageTimestamp = ".chat-line__timestamp"
const messageLink = ".link-fragment"
const messageMention = ".chat-message-mention"
const messageInLineReply = ".jIBntd"
const messageInLineReplyIcon = ".tw-svg"
const messageInLineReplyText = ".ijgHIL"

const friends = {
    "mellanfrost": {
        [messageContainer]: {
            "background-color": "#113311",
        },
        [messageUsername]: {
            "color": "white",
        },
        [messageText]: {
            "color": "white",
        },
    },
}

function run() {
    document.querySelectorAll(messageContainer).forEach(styleMessage);
    const targetElement = document.querySelector(chatContainer);
    setupObserver(targetElement);
    console.log("Friends script running!")
}

function setupObserver(targetNode) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                }
                if (!node.matches(messageContainer)) {
                    return;
                }
                styleMessage(node);
            });
        });
    });
    observer.observe(targetNode, { childList: true, subtree: true });
}

function styleMessage(messageElement) {
    let username = messageElement.getAttribute("data-a-user");
    if (!(username in friends)) {
        return;
    }
    const styleConfig = friends[username]
    for (const [property, value] of Object.entries(styleConfig[messageContainer])) {
        messageElement.style[property] = value;
    }
    for (const [className, styles] of Object.entries(styleConfig)) {
        messageElement.querySelectorAll(className).forEach(element => {
            for (const [property, value] of Object.entries(styles)) {
                element.style[property] = value;
            }
            if (className !== messageInLineReply) {
                return;
            }
            if (Object.keys(styleConfig[messageInLineReply]).length === 0) {
                return;
            }
            element.querySelectorAll("*").forEach(child => {
                for (const [property, value] of Object.entries(styles)) {
                    child.style[property] = value;
                }
            });
        });
    }
}

if (document.readyState === "complete") {
    run();
} else {
    window.onload = run;
}
