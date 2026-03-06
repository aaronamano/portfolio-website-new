import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const VACATIONS_2024_ALASKA = 'public/assets/vacations/2024/alaska/';
const VACATIONS_2024_LAS_VEGAS = 'public/assets/vacations/2024/las vegas/';
const VACATIONS_2024_MANISTEE = 'public/assets/vacations/2024/manistee/';
const VACATIONS_2024_ORLANDO = 'public/assets/vacations/2024/orlando/';
const VACATIONS_2024_TORONTO = 'public/assets/vacations/2024/toronto/';

const locations = [
  {
    id: 'alaska',
    name: 'Alaska',
    year: '2024',
    position: [64.2008, -149.4937],
    photos: [
      VACATIONS_2024_ALASKA + 'IMG_9411.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9409.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9262.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9255.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9247.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9143.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9142.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9129.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9085.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9084.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9080.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9079.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9077.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9074.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9073.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9067.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9066.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9065.JPG',
      VACATIONS_2024_ALASKA + 'IMG_9062.JPG',
    ],
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas',
    year: '2024',
    position: [36.1699, -115.1398],
    photos: [
      VACATIONS_2024_LAS_VEGAS + '20240826_093032.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240826_092750.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240826_091652.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240825_233504.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240825_225455.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240825_225453.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240825_223704.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240825_223314.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240825_223200.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240825_012640.jpg',
      VACATIONS_2024_LAS_VEGAS + '20240825_012532.jpg',
    ],
  },
  {
    id: 'manistee',
    name: 'Manistee',
    year: '2024',
    position: [44.2444, -86.3240],
    photos: [
      VACATIONS_2024_MANISTEE + 'IMG_9493.JPG',
      VACATIONS_2024_MANISTEE + 'IMG_9490.JPG',
      VACATIONS_2024_MANISTEE + 'IMG_9483.JPG',
      VACATIONS_2024_MANISTEE + 'IMG_9482.JPG',
      VACATIONS_2024_MANISTEE + 'IMG_9481.JPG',
      VACATIONS_2024_MANISTEE + 'IMG_9480.JPG',
      VACATIONS_2024_MANISTEE + 'IMG_9479.JPG',
      VACATIONS_2024_MANISTEE + 'IMG_9476.JPG',
      VACATIONS_2024_MANISTEE + 'IMG_9433.JPG',
    ],
  },
  {
    id: 'orlando',
    name: 'Orlando',
    year: '2024',
    position: [28.5383, -81.3792],
    photos: [
      VACATIONS_2024_ORLANDO + 'IMG_8766.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8763.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8762.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8761.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8759.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8755.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8750.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8734.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8733.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8732.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8731.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8725.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8717.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8708.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8707.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8706.JPG',
      VACATIONS_2024_ORLANDO + 'IMG_8705.JPG',
    ],
  },
  {
    id: 'toronto',
    name: 'Toronto',
    year: '2024',
    position: [43.6532, -79.3832],
    photos: [
      VACATIONS_2024_TORONTO + 'IMG_9744.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9730.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9729.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9728.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9726.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9724.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9707.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9704.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9703.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9692.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9690.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9689.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9688.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9671.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9670.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9669.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9668.JPG',
      VACATIONS_2024_TORONTO + 'IMG_9663.JPG',
    ],
  },
];

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {location.photos.map((photo, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={photo} 
                  alt={`${location.name} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
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
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">Travel Map</h2>
      <p className="text-primary/70 mb-4 text-center">Click on a marker to view photos from each location</p>
      
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
          {locations.map((location) => (
            <Marker 
              key={location.id} 
              position={location.position}
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
