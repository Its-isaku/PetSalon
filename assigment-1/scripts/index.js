//? Input fields
let petName = document.getElementById('petName');
let petAge = document.getElementById('petAge');
let petGender = document.getElementById('petGender');
let petSpecies = document.getElementById('petSpecies');
let petService = document.getElementById('petService');
let petTemperaments = document.getElementById('petTemperaments');
let petBreed = document.getElementById('petBreed');
let registerButton = document.getElementById('register');
let goHomeButton = document.getElementById('returnHome');

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
function Pet(name, age, gender, species, service, temperaments, breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.service = service;
    this.temperaments = temperaments;
    this.breed = breed;
}

//? Function to displayPets pets in cards
function displayPets() {
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
                <p class="card-description">Temperaments: ${pets[i].temperaments}</p>
                <p class="card-description">Breed: ${pets[i].breed}</p>
                ${pets[i].species === "Cat" ? '<img src="img/cat-icon.png" class="species-img">' 
                : pets[i].species === "Dog" ? '<img src="img/dog-icon.png" class="species-img">' : ''}
                <div class="card-buttons">
                    <button class="card-button" onclick="editPet(${i})">Edit</button>
                    <button class="card-button" onclick="deletePet(${i})">Delete</button>
                </div>
            </div> 
        </div>
        `;
    }
}

function displayTable() {
    let table = document.getElementById("table-pets");
    if (!table) return; //? Verificar si la tabla existe

    //? Clear the table first to prevent duplicate entries but preserve headers
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Specie</th>
            <th>Service</th>
            <th>Temperaments</th>
            <th>Breed</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    `;
    
    for (let i = 0; i < pets.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${pets[i].name}</td>
            <td>${pets[i].age}</td>
            <td>${pets[i].gender}</td>
            <td>${pets[i].species}</td>
            <td>${pets[i].service}</td>
            <td>${pets[i].temperaments}</td>
            <td>${pets[i].breed}</td>
            <td><button onclick="editPet(${i})" class="editBtn">Edit</button></td>
            <td><button onclick="deletePet(${i})" class="deleteBtn">Delete</button></td>
        </tr>
        `;
    }
}

function displayTotals(){
    let total = pets.length;
    let groomingTotal = 0;
    let hairCutTotal = 0;
    let petBathTotal = 0;
    let nailTrimTotal = 0;

    for (let pet of pets) {
        if (pet.service === "Grooming")
            groomingTotal++;
        if (pet.service === "Haircut")
            hairCutTotal++;
        if (pet.service === "Pet bathingh")
            petBathTotal++;
        if (pet.service === "Nail trim")
            nailTrimTotal++;
    }

    let totalServices = document.getElementById("totals");
    
    //? Clear the totals first
    totalServices.innerHTML = "";
    totalServices.innerHTML += `
    <p><span>Total:${total}</span></p>
    <p><span>Grooming:${groomingTotal}</span></p>
    <p><span>Haircut:${hairCutTotal}</span></p>
    <p><span>Pet bathing:${petBathTotal}</span></p>
    <p><span>Nail trim:${nailTrimTotal}</span></p>
    `;
}

//TODO: make it show it in the HTML ass a small
//? Function to register a new pet
function register(event) {

    //? Create new pet object
    let newPet = new Pet(petName.value, petAge.value, petGender.value, petSpecies.value, petService.value, petTemperaments.value, petBreed.value);

    //? Check if the new pet object is valid
    if (isValid(newPet)) {
        //? Add new pet to pets array and store in local storage
        let storedPets = localStorage.getItem("pets");
        pets = storedPets ? JSON.parse(storedPets) : [];
        
        pets.push(newPet);
        localStorage.setItem("pets", JSON.stringify(pets)); 
        
        //? Clear the form
        clearForm();

        //? Display the updated list of pets in the table
        displayTable();

        //? Displays te totals
        displayTotals()
    }
}

//? Function to validate form
function isValid(pet) {
    let validation = true;
    
    if (pet.name === "" && pet.age === "" && pet.gender === "" && pet.species === "" && pet.service === "" && pet.breed === ""){
        validation = false;
        alert("Please fill all the inputs.");
    } 
    else{

        if (pet.name === "") {
            validation = false;
            alert("Please enter a name for the pet.");
        }
        
        if (pet.age === "") {
            validation = false;
            alert("Please enter an age for the pet.");
        }
        
        if (pet.gender === "") {
            validation = false;
            alert("Please enter a gender for the pet.");
        }
        
        if (pet.species === "") {
            validation = false;
            alert("Please enter a species for the pet.");
        }
        
        if (pet.service === "") {
            validation = false;
            alert("Please enter a service for the pet.");
        }

        if (pet.temperaments === "") {
            validation = false;
            alert("Please enter a temperament for the pet.");
        }
        
        if (pet.breed === "") {
            validation = false;
            alert("Please enter a breed for the pet.");
        }
    }

    return validation;
}

//? Function to delete a pet
function deletePet(index) {
    pets.splice(index, 1);
    localStorage.setItem("pets", JSON.stringify(pets)); 
    displayPets();
    displayTable();
    displayTotals()
}

function editPet(index) {
    let pet = pets[index];

    let newName = prompt("Enter the new name for the pet:", pet.name);
    let newAge = prompt("Enter the new age for the pet:", pet.age);
    let newGender = prompt("Enter the new gender for the pet:", pet.gender);
    let newSpecies = prompt("Enter the new species for the pet:", pet.species);
    let newService = prompt("Enter the new service for the pet:", pet.service);
    let newTemperaments = prompt("Enter the new temperament for the pet:", pet.temperaments); 
    let newBreed = prompt("Enter the new breed for the pet:", pet.breed);

    //? Update the pet object with the new values
    pet.name = newName;
    pet.age = newAge;
    pet.gender = newGender;
    pet.species = newSpecies;
    pet.service = newService;
    pet.temperaments = newTemperaments; 
    pet.breed = newBreed;

    //? Save the updated pets array to local storage
    localStorage.setItem("pets", JSON.stringify(pets));

    //? Display the updated list of pets
    displayPets();
    displayTable();
    displayTotals()
}

//? Function to clear the form
function clearForm() {
    petName.value = "";
    petAge.value = "";
    petGender.value = "";
    petSpecies.value = "";
    petService.value = "";
    petTemperaments.value = "";
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
        pets.push(new Pet("Bella", 6, "Female", "Cat", "Grooming", "Social", "American Shorthair"));
        pets.push(new Pet("Kira", 6, "Female", "Cat", "Grooming", "Social", "Siamese"));
        pets.push(new Pet("Chipi", 5, "Female", "Cat", "Grooming", "Nervous", "Tabby"));
        localStorage.setItem("pets", JSON.stringify(pets)); //? Store default pets in local storage
    }

    //? Display pets
    displayPets();

    //? Display pets in table
    displayTable();

    //? Displays te totals
    displayTotals()
}

//? Call init function
window.onload = init;