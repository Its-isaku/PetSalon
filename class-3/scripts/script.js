//? object constructor
function Student(name,email,age,address){
    //? properties
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = address;
}

let student1 = new Student("Rafael","rafael@SDGKU.edu",20,"Apple Streat");
let student2 = new Student("George","george@SDGKU.edu",99,"New York");

console.log(student1, student2);