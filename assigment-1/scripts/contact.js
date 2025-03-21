//? Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//? Contact form handling
$(document).ready(function() {
    $("#sendMessage").on('click', function(event) {
        event.preventDefault();
        
        //? Get form values
        const name = $("#contactName").val();
        const email = $("#contactEmail").val();
        const subject = $("#contactSubject").val();
        const message = $("#contactMessage").val();
        
        //? Simple validation
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields");
            return;
        }
        
        //? Show success message (in a real app, this would send data to a server)
        alert("Thank you for your message! We will get back to you soon.");
        
        //? Clear the form
        $("#contactName").val("");
        $("#contactEmail").val("");
        $("#contactSubject").val("");
        $("#contactMessage").val("");
    });
}); 

//? Map API
document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('map');
    const placeholderDiv = mapElement.querySelector('.map-placeholder');
    if (placeholderDiv) {
        mapElement.removeChild(placeholderDiv);
    }

    const map = new ol.Map({
        target: 'map',
        layers: [   
            new ol.layer.Tile({
                source: new ol.source.OSM() 
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([-117.08552166118741, 32.72303025855904]), 
            zoom: 15
        })
    });

    const markerFeature = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([-117.08552166118741, 32.72303025855904])
        )
    });

    const markerStyle = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 6,
            fill: new ol.style.Fill({color: '#F0A04B'}),
            stroke: new ol.style.Stroke({color: 'white', width: 2})
        })
    });

    markerFeature.setStyle(markerStyle);

    const vectorSource = new ol.source.Vector({
        features: [markerFeature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayer);
});
