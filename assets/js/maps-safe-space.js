
// Google Maps Javascript directly from documentation

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 53.346788505821884, lng: - 6.271116615196459 },
    });
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position,
            label,
        });
        
        marker.addListener("click", () => {
            infoWindow.setContent(label);
            infoWindow.open(map, marker);
        });
        return marker;
    });

    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}

const locations = [
    { lat: 53.3445397, lng: -6.269746 },  // street 66
    { lat: 53.3456414, lng: -6.2689735 },  // penny lane
    { lat: 53.3456414, lng: -6.2689735 },  // panti bar
    { lat: 53.3470976, lng: -6.2822105 },  // vegan sandwich co
    { lat: 53.3476158, lng: -6.2802144 },  // token
    { lat: 53.3457871, lng: -6.2641931 },  // cut & sew wellington quay
    { lat: 53.3585153, lng: -6.2752571 },  // the back page
    { lat: 53.3554264, lng: -6.2659513 },  // veginity
    { lat: 53.3515121, lng: -6.2661519 },  // chapters
    { lat: 53.3269035, lng: -6.2646264 },  // blackbird
];

window.initMap = initMap;
