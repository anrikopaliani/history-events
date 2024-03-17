import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import eventsData, { HistoricalEvent } from "./historyEvents";
import SingleMarker from "./components/SingleMarker";
import FlyToMarker from "./components/FlyToMarker";
import Filter from "./components/Filter";

const defaultPosition: [number, number] = [51.505, -0.09];

const emptyStar = <i className="fa-regular fa-star"></i>;
const fullStar = (
  <i className="fa-solid fa-star" style={{ color: "#fdc401" }}></i>
);

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [favourites, setFavourites] = useState<number[]>(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeEvent, setActiveEvent] = useState<HistoricalEvent | null>();

  const handleFavouriteClick = (eventId: number) => {
    let updatedFavourites = favourites.filter((id) => id !== eventId);
    if (!favourites.includes(eventId)) {
      updatedFavourites = [eventId, ...updatedFavourites];
    }

    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const handleListItemClick = (event: HistoricalEvent) => {
    setActiveEvent({ ...event });
  };

  return (
    <>
      <main className="content">
        <div className="flex flex-col gap-6 h-full map-content">
          <div className="h-12">
            <Filter setSelectedCategory={setSelectedCategory} />
          </div>
          <MapContainer
            zoom={13}
            center={defaultPosition}
            className="map-container"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            {eventsData
              .filter(
                (event) =>
                  !selectedCategory || event.category === selectedCategory
              )
              .map((event) => (
                <SingleMarker
                  event={event}
                  favourites={favourites}
                  handleFavouriteClick={handleFavouriteClick}
                  key={event.id}
                />
              ))}
            {activeEvent && (
              <Popup position={activeEvent.position}>
                <div className="popup-inner">
                  <h2 className="popup-inner__title">{activeEvent.title}</h2>
                </div>
                <p className="popup-inner__description">
                  {activeEvent.description}
                </p>
                <button
                  className="popup-inner__button"
                  onClick={() => handleFavouriteClick(activeEvent.id)}
                >
                  {favourites.includes(activeEvent.id) ? (
                    <span>{fullStar} Unfavourite</span>
                  ) : (
                    <span>{emptyStar} Favourite</span>
                  )}
                </button>
              </Popup>
            )}

            {activeEvent && (
              <FlyToMarker activeEvent={activeEvent} zoomLevel={15} />
            )}
          </MapContainer>
        </div>

        <div className="liked-events">
          <h2 className="liked-events__title">
            <i className="fa-solid fa-star"></i> Favourite Events
          </h2>
          <ul>
            {favourites
              .map((id) => {
                return eventsData.find((event) => event.id === id);
              })
              .map((event) => {
                return (
                  <li
                    className="liked-events__event"
                    key={event?.id}
                    onClick={() =>
                      handleListItemClick(event as HistoricalEvent)
                    }
                  >
                    <h3>{event?.title}</h3>
                  </li>
                );
              })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
