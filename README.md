# twitch-friends

Friend-like system for twitch chat  
Highlight messages from your friends to more easily notice their messages  

Add custom highlights for any users you like  
Message styling done by applying css styles to messages of specified users  

**Note: Currently does not work with 7tv!**  

## Showcase

Adding a simple blue background instantly makes the message from your friend stand out  
Much easier to spot when they are typing!  

<img src="./assets/styled_chat_1.gif" width=50% height=50%>  

### Unique highlights for different people

Did you notice the message from your other friend?  
Here it is again with a different, much brighter, style applied  

<img src="./assets/styled_chat_2.gif" width=50% height=50%>  

## How to Use

1. Copy the code to a userscript manager of choice
2. Edit the friends object to include your friends and the styling you want for them
3. Done!

## Style Examples


<img src="./assets/style_example_01.png" width=50% height=50%>  

```javascript
const friends = {
    "mellanfrost": {
        [messageContainer]: {
            "background-color": "#652CB3",
            "border-color": "orange",
            "border-style": "solid",
            "border-width": "5px",
            "border-radius": "5px",
        },
        [messageUsername]: {
            "color": "orange",
        },
        [messageText]: {
            "color": "orange",
            "font-weight": "bold",
        },
    },
}
```
