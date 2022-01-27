function anotherAddEventListener(typeOfEvent, callback) {
    //Detect Event Code...

    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }

    if (eventThatHappened.eventType == typeOfEvent) {
        callback(eventThatHappened);
    }
}

//debugger;
anotherAddEventListener("keypress", function(event){
    console.log(event);
});

document.addEventListener("keypress", function(event){
    console.log(event);
});