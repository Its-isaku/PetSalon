//? Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//? service constructor
function Service(name, price) {
    this.name = name;
    this.price = price;
}

//?function validate
function validService(service) { //! fix animation
    let isvalidTitle = true;
    let isvalidPrice = true;

    if(service.name == "") {
        isvalidTitle = false;
        $(".smallError").fadeIn(300).addClass("show");
    } else {
        $(".smallError").fadeOut(300).removeClass("show");
    }

    if(service.price == "") {
        isvalidPrice = false;
        $(".smallPrice").fadeIn(300).addClass("show"); 
    } else {
        $(".smallPrice").fadeOut(300).removeClass("show");
    }

    return isvalidTitle && isvalidPrice;
}

//? add services to table with delete and edit functionality
function displayTable() {
    let table = $("#table-services");
    table.empty();
    
    let storedServices = localStorage.getItem("services");
    let services = storedServices ? JSON.parse(storedServices) : [];
    
    services.forEach((service, index) => {
        table.append(`
            <tr>
                <td>${service.name}</td>
                <td>$${service.price}</td>
                <td><button class="editBtn" data-index="${index}">Edit</button></td>
                <td><button class="deleteBtn" data-index="${index}">Delete</button></td>
            </tr>
        `);
    });

    attachButtonEvents();
}

//? Attach events to the delete and edit buttons
function attachButtonEvents() {
    //? Delete button functionality
    $(".deleteBtn").on('click', function() {
        const index = $(this).data('index');
        deleteService(index);
    });
    
    //? Edit button functionality
    $(".editBtn").on('click', function() {
        const index = $(this).data('index');
        editService(index);
    });
}

//? Delete a service
function deleteService(index) {
    //? Get services from localStorage
    let storedServices = localStorage.getItem("services");
    let services = storedServices ? JSON.parse(storedServices) : [];
    
    //? Remove the service at the specified index
    services.splice(index, 1); //? remove 1 element at index
    
    //? Save updated services back to localStorage
    localStorage.setItem("services", JSON.stringify(services));
    
    //? Refresh the table
    displayTable();

}

//? Edit a service
function editService(index) {
    //? Get services from localStorage
    let storedServices = localStorage.getItem("services");
    let services = storedServices ? JSON.parse(storedServices) : [];
    
    //? Get the service to edit
    let service = services[index];
    
    //? Populate the form with service details
    $('#serviceTitle').val(service.name);
    $('#servicePrice').val(service.price);
    
    //? Change button to update mode
    let btn = $("#serviceBtn");
    btn.text("Update Service");
    btn.data("editing", true);
    btn.data("index", index);
    
    //? Show a message that we're editing
    $("<div id='editingMessage'>Editing service: " + service.name + "</div>")
        .css({
            "background-color": "#F0A04B", 
            "padding": "10px", 
            "border-radius": "5px",
            "margin-bottom": "10px",
            "text-align": "center",
            "font-weight": "bold"
        })
        .insertBefore("#serviceBtn");
}

//? Modified register function to handle both add and update
function register(event) {
    event.preventDefault();
    
    //? Get values from form
    let title = $('#serviceTitle').val();
    let price = $('#servicePrice').val();
    
    //? Create a new service object
    let service = new Service(title, price);
    
    //? Validate the service
    if (validService(service)) {
        //? Check if we're editing an existing service or adding a new one
        let btn = $("#serviceBtn");
        let isEditing = btn.data("editing");
        
        //? Get existing services
        let storedServices = localStorage.getItem("services");
        let services = storedServices ? JSON.parse(storedServices) : [];
        
        if (isEditing) {
            //? Update existing service
            let index = btn.data("index");
            services[index] = service;
            
            //? Reset button
            btn.text("Add Service");
            btn.data("editing", false);
            
            //? Remove editing message
            $("#editingMessage").remove();
            
            //? Show success message
            alert("Service updated successfully!");
        } else {
            //? Add new service
            services.push(service);
            console.log("New service added:", service);
        }
        
        //? Save to localStorage
        localStorage.setItem("services", JSON.stringify(services));
        
        //? Refresh the table
        displayTable();
        
        //? Clear form
        $('#serviceTitle').val('');
        $('#servicePrice').val('');
    }
}

//? Add initial services if none exist
function addInitialServices() {
    let storedServices = localStorage.getItem("services");
    let services = storedServices ? JSON.parse(storedServices) : [];
    
    if (!storedServices || services.length === 0) {
        let initialServices = [
            new Service("Grooming", 30),
            new Service("Haircut", 25),
            new Service("Pet bathing", 20),
            new Service("Nail trim", 15)
        ];
        
        localStorage.setItem("services", JSON.stringify(initialServices));
    }
    
    displayTable();
}

//? function init (modified)
function init() {
    //? Hook event for the service button
    $("#serviceBtn").on('click', register);
    $("#serviceBtn").data("editing", false);
    
    //? Make sure errors are completely hidden on page load
    $(".smallError, .smallPrice").hide().css("display", "none");
    
    //? Add initial services and display table
    addInitialServices();
}

window.onload = init;