import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker for the company location
    const companyMarker = L.marker([51.505, -0.09]).addTo(map);
    companyMarker.bindPopup("<b>Mindtrail Technologies Pvt Ltd</b><br>Plot No-97,<br> Sri, 60 Feet Rd, beside CGR International School,<br> Ayyappa Society, Mega Hills, Madhapur, <br>Hyderabad, Telangana 500081").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="map-container" />;
};

export default Map;

