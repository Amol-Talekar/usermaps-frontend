import React, { useState, useEffect } from "react";
import * as Styles from "./style";
import "./style.css";
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import axios from "axios";

const MapView = (props) => {
  const { userDetails } = props;
  const { userlocations } = userDetails;
  const [markerKey, setMarkerKey] = useState(0);

  const apiKey = import.meta.env.REACT_APP_GOOGLE_MAP_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const handleGoogleMapClick = (e) => {
    setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  useEffect(() => {
    setMarkerKey((prevKey) => prevKey + 1); // Update the marker key whenever the marker position changes
  }, [userlocations]);
  console.log("userlocations from MapView => ", userDetails);

  return (
    <Styles.MapContainer>
      {isLoaded ? (
        <GoogleMap
          zoom={4}
          center={{
            lat: 20.59,
            lng: 75.96,
          }}
          mapContainerClassName="map-container"
        >
          {userlocations?.map((item, index) => (
            <Marker
              key={item?._id}
              position={{
                lat: Number(item?.location?.lat),
                lng: Number(item?.location?.lng),
              }}
              style={{ width: "5px" }}
            />
          ))}
        </GoogleMap>
      ) : (
        <h6>Google Map Not Loaded</h6>
      )}
    </Styles.MapContainer>
  );
};

export default MapView;
