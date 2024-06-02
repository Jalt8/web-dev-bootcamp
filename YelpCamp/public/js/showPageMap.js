mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 9
});

const marker = new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${title}</h3><p>${campLocation}</p>`
            )
    )
    .addTo(map);

map.addControl(new mapboxgl.NavigationControl());