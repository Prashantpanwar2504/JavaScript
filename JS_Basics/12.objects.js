/*
Objects: in js every thing is in the form of object.
    All Javascript values, expect primitives, are objects.

    Objects are variable:
    objects are variable too but can contain many value.
    object value are written as name: value pairs.
    
    A jc object is a collection of named value.
*/

var user = {
    first_name : "Prashant",
    last_name : "Panwar",
    age : 21,
    couser : "MCA(Integrated)",
    lang : ['C++', 'python', 'java', 'javascript', 'matlab'],
};

console.table(user);
user.lang.push("SQL");
console.table(user);


// Methos & object in JS
console.log("===================================================");
// how dow edefine method inside object.

var user2 = {
    name : '',
    couser1 : ['MCA(integrated)'],
    lang1 : ['C++', 'python', 'java', 'javascript', 'matlab'],
    buycourse : function(coursename) {
        this.couser1.push(coursename)
    },
    addlang : function(langname) {
        this.lang1.push(langname)
    },
    information : function(){
        console.log();
    }
};

user2.name= "Prashant Panwar";
user2.buycourse("React Native");
user2.addlang("SQL");
console.table(user2);
user2.information();