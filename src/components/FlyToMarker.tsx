import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { HistoricalEvent } from "../historyEvents";

const FlyToMarker = ({
  activeEvent,
  zoomLevel,
}: {
  activeEvent: HistoricalEvent;
  zoomLevel: number;
}) => {
  const map = useMap();

  useEffect(() => {
    if (activeEvent.position) {
      const zoom = zoomLevel ?? map.getZoom();
      map.flyTo(activeEvent.position, zoom, { duration: 1 });
    }
  }, [map, activeEvent, zoomLevel]);

  return null;
};

export default FlyToMarker;
