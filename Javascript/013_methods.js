var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
    moveSuitcase: function() {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        this.moveSuitcase();
    }
}

houseKeeper1.moveSuitcase();