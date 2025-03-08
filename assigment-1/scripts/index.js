//? Input fields
let petName = document.getElementById('petName');
let petAge = document.getElementById('petAge');
let petGender = document.getElementById('petGender');
let petSpecies = document.getElementById('petSpecies');
let petService = document.getElementById('petService');
let petBreed = document.getElementById('petBreed');
let registerButton = document.getElementById('register');

//? Pets array
let pets = [];

//? Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//? Pet constructor
function Pet(name, age, gender, species, service, breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.service = service;
    this.breed = breed;
}

//? Function to display pets in cards
function display() {
    let card = document.getElementById("card");
    if (!card) return; 

    card.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
        card.innerHTML += `
        <div class="card-item">
            <div class="card-content">
                <h3 class="card-title">Pet's Name: ${pets[i].name}</h3>
                <p class="card-description">Age: ${pets[i].age}</p>
                <p class="card-description">Gender: ${pets[i].gender}</p>
                <p class="card-description">Species: ${pets[i].species}</p>
                <p class="card-description">Service: ${pets[i].service}</p>
                <p class="card-description">Breed: ${pets[i].breed}</p>
                ${pets[i].species === "Cat" ? '<img src="img/cat-icon.png" class="species-img">' 
                : pets[i].species === "Dog" ? '<img src="img/dog-icon.png" class="species-img">' : ''}
            </div> 
        </div>
        `;
    }
}

//? Register function
function register(event) {
    event.preventDefault(); 

    //? Check if all fields are filled out
    if (!petName.value || !petAge.value || !petGender.value || !petSpecies.value || !petService.value || !petBreed.value)
        alert("Please fill out all fields");
    else{  //? Create new pet object
        let newPet = new Pet(petName.value, petAge.value, petGender.value, petSpecies.value, petService.value, petBreed.value);``
        //? Add new pet to pets array and store in local storage
        let storedPets = localStorage.getItem("pets");
        pets = storedPets ? JSON.parse(storedPets) : [];
        
        pets.push(newPet);
        localStorage.setItem("pets", JSON.stringify(pets)); 
        
        //? Clear the form
        clearForm();

        //? take user to index page
        window.location.href = "index.html"; 
    }
}

//? Function to clear the form
function clearForm() {
    petName.value = "";
    petAge.value = "";
    petGender.value = "";
    petSpecies.value = "";
    petService.value = "";
    petBreed.value = "";
}

//? Event listener for register button
if (registerButton) {
    registerButton.addEventListener('click', register);
}

//? Init function
function init() {
    //? Get pets from local storage
    let storedPets = localStorage.getItem("pets");
    pets = storedPets ? JSON.parse(storedPets) : [];

    //? Add default pets if there are no pets in local storage
    if (pets.length === 0) {
        pets.push(new Pet("Bella", 6, "Female", "Cat", "Grooming", "American Shorthair"));
        pets.push(new Pet("Kira", 6, "Female", "Cat", "Grooming", "Siamese"));
        pets.push(new Pet("Chipi", 5, "Female", "Cat", "Grooming", "Tabby"));
        localStorage.setItem("pets", JSON.stringify(pets)); //? Store default pets in local storage
    }

    //? Display pets
    display();
}

//? Call init function
window.onload = init;
