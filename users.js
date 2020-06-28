var User = function (name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
};

User.prototype.introduction = function() {
    return ("Me llamo " + this.name + " " + this.lastName + " y tengo " + this.age);
};

var nayib = new User("Nayib", "Abdala", 34);
var german = new User("German", "Escobar", 38);

console.log(nayib.introduction());
console.log(german.introduction());

//Ensayo para Git Hub
