
function BellBoy (f_name, age, hasWorkPermit, languages) {
    this.f_name = f_name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellBoy1 = new BellBoy ("Timmy", 19, true, ["French", "English"]);

var bellBoy2 = new BellBoy ("Jimmy", 20, true, ["Spanish", "English"]);