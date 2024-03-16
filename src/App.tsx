import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const defaultPosition: [number, number] = [51.505, -0.09];

function App() {
  const icon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  return (
    <>
      <main className="content">
        <div className="flex flex-col w-full h-full">
          <div className="h-12"></div>
          <MapContainer
            zoom={13}
            center={defaultPosition}
            className="map-container"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            <Marker position={defaultPosition} icon={icon}>
              <Popup>ds</Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </>
  );
}

export default App;
