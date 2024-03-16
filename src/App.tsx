import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { Icon } from "leaflet";

const defaultPosition: [number, number] = [51.505, -0.09];

function App() {
  return (
    <>
      <main className="content">
        <div className="flex flex-col w-full h-full">
          <div className="h-12"></div>
          <MapContainer
            zoom={13}
            center={defaultPosition}
            // className="map-container"
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            <Marker position={defaultPosition}>
              <Popup>ds</Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </>
  );
}

export default App;
