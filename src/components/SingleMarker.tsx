import { Marker, Popup } from "react-leaflet";
import { HistoricalEvent } from "../historyEvents";
import { Icon } from "leaflet";

interface SingleMarkerProps {
  event: HistoricalEvent;
  favourites: number[];
  handleFavouriteClick: (eventId: number) => void;
}

const icon: Icon = new Icon({
  iconUrl: "marker.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const emptyStar = <i className="fa-regular fa-star"></i>;
const fullStar = (
  <i className="fa-solid fa-star" style={{ color: "#fdc401" }}></i>
);

const SingleMarker = ({
  event,
  favourites,
  handleFavouriteClick,
}: SingleMarkerProps) => {
  return (
    <>
      <Marker position={event.position} key={event.id} icon={icon}>
        <Popup position={event.position}>
          <div className="popup-inner">
            <h2 className="popup-inner__title">{event.title}</h2>
          </div>
          <p className="popup-inner__description">{event.description}</p>
          <button
            onClick={() => handleFavouriteClick(event.id)}
            className="popup-inner__button"
          >
            {favourites.includes(event.id) ? (
              <span>{fullStar} Unfavourite</span>
            ) : (
              <span>{emptyStar} Favourite</span>
            )}
          </button>
        </Popup>
      </Marker>
    </>
  );
};

export default SingleMarker;
