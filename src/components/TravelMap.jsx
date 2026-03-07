import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'leaflet/dist/leaflet.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { travelLocations } from '../data/travelLocations';

const createColoredIcon = (color) => L.icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 44"><circle cx="15" cy="15" r="10" fill="${color}" stroke="#333" stroke-width="2"/><circle cx="15" cy="15" r="5" fill="#fff"/><path d="M15 25 L15 42" stroke="#333" stroke-width="2"/></svg>`)}`,
  iconRetinaUrl: `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 44"><circle cx="15" cy="15" r="10" fill="${color}" stroke="#333" stroke-width="2"/><circle cx="15" cy="15" r="5" fill="#fff"/><path d="M15 25 L15 42" stroke="#333" stroke-width="2"/></svg>`)}`,
  iconSize: [30, 44],
  iconAnchor: [15, 42],
  popupAnchor: [0, -44],
});

const getIconForYear = (year) => {
  const colors = {
    '2024': '#3B82F6',
    '2025': '#EF4444',
    '2026': '#10B981',
  };
  return createColoredIcon(colors[year] || '#6B7280');
};

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 6, { duration: 1 });
    }
  }, [center, map]);
  return null;
}

function Gallery({ location, onClose }) {
  if (!location) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-1000 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-secondary rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b border-custom">
          <h2 className="text-xl font-bold text-primary">{location.name} ({location.year})</h2>
          <button onClick={onClose} className="text-primary hover:text-tertiary text-2xl">&times;</button>
        </div>
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {location.photos.map((photo, index) => {
              return (
                <div key={index} className="break-inside-avoid mb-4">
                  <div className="rounded-lg overflow-hidden">
                    <LazyLoadImage 
                      src={photo} 
                      alt={`${location.name} ${index + 1}`}
                      effect="blur"
                      className="w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TravelMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
    setMapCenter(location.position);
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">Travel Logs</h2>
      <p className="text-primary/70 mb-4 text-center">Besides focusing on CS, I enjoy traveling a lot out of Michigan and explore new things. Click on a pinpoint to view my photo dump of a particular location.</p>
      
      <div className="flex gap-4 justify-center mb-4">
        <span className="flex items-center gap-2 text-sm text-primary">
          <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span> 2024
        </span>
        <span className="flex items-center gap-2 text-sm text-primary">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]"></span> 2025
        </span>
        <span className="flex items-center gap-2 text-sm text-primary">
          <span className="w-3 h-3 rounded-full bg-[#10B981]"></span> 2026
        </span>
      </div>
      
      <div className="flex-1 min-h-100 rounded-lg overflow-hidden border border-custom">
        <MapContainer 
          center={[39.8283, -98.5795]} 
          zoom={4} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapUpdater center={mapCenter} />
          {travelLocations.map((location) => (
            <Marker 
              key={location.id} 
              position={location.position}
              icon={getIconForYear(location.year)}
              eventHandlers={{
                click: () => handleMarkerClick(location),
              }}
            >
              <Popup>
                <div className="text-center">
                  <strong className="text-lg">{location.name}</strong>
                  <p className="text-sm">{location.year}</p>
                  <p className="text-xs text-gray-500">{location.photos.length} photos</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {selectedLocation && (
        <Gallery location={selectedLocation} onClose={() => setSelectedLocation(null)} />
      )}
    </div>
  );
}
