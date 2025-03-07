//? navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//? pet constructor
function Pet(name, age, gender, species, service, breed){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.service = service;
    this.breed = breed;
}

//? pets Array
let pets = [];

//? create 3 pets
let Pet1 = new Pet("Bella", 6, "Femele", "Cat", "Grooming", "American Shorthair");
pets.push(Pet1);

let Pet2 = new Pet("Kira",6, "Femele", "Cat", "Grooming", "Siamis");
pets.push(Pet2);

let Pet3 = new Pet("Chipi", 5, "Femele", "Cat", "Grooming", "Taby");
pets.push(Pet3);

document.addEventListener("DOMContentLoaded", function() {
    display();
});

//? function to display pets in cards
function display(){
    let card = document.getElementById("card");
    card.innerHTML = "";
    for(let i = 0; i < pets.length; i++){
        card.innerHTML += `
        <div class="card-item">
            <div class="card-content">
                <h3 class="card-title">Pet's Name: ${pets[i].name}</h3>
                <p class="card-description">Age: ${pets[i].age}</p>
                <p class="card-description">Gender: ${pets[i].gender}</p>
                <p class="card-description">Species: ${pets[i].species}</p>
                <p class="card-description">Service: ${pets[i].service}</p>
                <p class="card-description">Breed: ${pets[i].breed}</p>
                ${pets[i].species === "Cat" ? '<img src="img/cat-icon.png" class="species-img">' : pets[i].species === "Dog" ? '<img src="img/dog-icon.png" class="species-img">' : ''}
            </div> 
        </div>
        ` 
    }
}