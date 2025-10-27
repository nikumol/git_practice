const messagesList = ["I like to wear shorts. Their comfy and easy to wear.", "They call them Dragon Diamonds, but they are my turd", "I AM ERROR","- It's dangerous to go alone! Take this!",  
    "I'll show you a real man's balls.", "My hotel's as clean as an elven arse", "Look at the big boy at the diner there. He sure is hungry.", "Arrows on the ground point to secret areas ya know.",
    "Mountains're nice.", "By the way... Do you happen to know what the fine is here in Cyrodiil for necrophilia? Just asking."];


const giveRandomMessage = (array) => {
    return array[Math.floor(Math.random() * 10)];
};

console.log(giveRandomMessage(messagesList));




