//! < ---------------challenge 1--------------- >
$(document).ready(function() {
    $("#category").change(function() {
        let fruits = ["apple", "orange", "banana", "strawberry"];
        let vegetables = ["carrot", "broccoli", "cucumber", "tomato"];

        //? if the category is fruits, display the fruits
        if($("#category").val() == "fruits") {
            let options = `<option value="">Select a fruit</option>`;
            
            for (let fruit of fruits) {
                options += `<option value="${fruit}">${fruit}</option>`;
            }

            $("#items").html(options);

        //? if the category is vegetables, display the vegetables
        } else if($("#category").val() == "vegetables") {
            let options = `<option value="">Select a vegetable</option>`;
            
            for (let vegetable of vegetables) {
                options += `<option value="${vegetable}">${vegetable}</option>`;
            }
            
            $("#items").html(options);
        }
    });


    //! < ---------------challenge 2--------------- >
    $("#darkMode").on("click", function() {
        $("body").toggleClass("darkMode");
    });
});