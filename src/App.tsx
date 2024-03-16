import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import eventsData from "./historyEvents";

const defaultPosition: [number, number] = [51.505, -0.09];

const emptyStar = <i className="fa-regular fa-star"></i>;
const fullStar = (
  <i className="fa-solid fa-star" style={{ color: "#fdc401" }}></i>
);

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
            {eventsData.map((event) => (
              <Marker position={event.position} key={event.id} icon={icon}>
                <Popup>
                  <div className="popup-inner">
                    <h2 className="popup-inner__title">{event.title}</h2>
                  </div>
                  <p className="popup-inner__description">
                    {event.description}
                  </p>
                  <button className="popup-inner__button">
                    <span>{emptyStar}</span> Favourite
                  </button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>
    </>
  );
}

export default App;
