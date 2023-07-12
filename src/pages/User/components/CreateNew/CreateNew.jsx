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

const CreateNew = (props) => {
  const { userDetails } = props;
  const { _id } = userDetails;
  const [placename, setPlacename] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({ lat: 20.59, lng: 78.96 });
  const [markerKey, setMarkerKey] = useState(0);

  const handlePlacenameChange = (e) => {
    e.preventDefault();
    setPlacename(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const apiKey = import.meta.env.REACT_APP_GOOGLE_MAP_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const handleGoogleMapClick = (e) => {
    setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  useEffect(() => {
    setMarkerKey((prevKey) => prevKey + 1); // Update the marker key whenever the marker position changes
  }, [location]);

  const handleSubmit = async () => {
    let obj = { placename, description, location, _id };

    try {
      const res = await axios.post(
        "http://localhost:8020/users/addLocation/",
        obj
      );
      console.log("res.data => ", res.data);
      if (res?.data?.message == "Location added successfully") {
        alert("Location added successfully");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Styles.Container>
      <Styles.LabelInput>
        <Styles.Label>Place Name</Styles.Label>
        <Styles.Input
          onChange={(e) => handlePlacenameChange(e)}
          placeholder="placename"
          type="text"
        />
      </Styles.LabelInput>

      <Styles.LabelInput>
        <Styles.Label>Description</Styles.Label>
        <Styles.Input
          onChange={(e) => handleDescriptionChange(e)}
          placeholder="description"
          type="text"
        />
      </Styles.LabelInput>

      <Styles.DisplayLatLng>
        <p>
          lat : <strong>{location?.lat}</strong>{" "}
        </p>
        <p>
          lng : <strong>{location?.lng}</strong>{" "}
        </p>
      </Styles.DisplayLatLng>

      <Styles.GoogleMapBox>
        {isLoaded ? (
          <GoogleMap
            zoom={4}
            center={{ lat: location.lat, lng: location.lng }}
            mapContainerClassName="map-container"
            onClick={(e) => handleGoogleMapClick(e)}
          >
            {location?.lat && location?.lng && (
              <Marker
                key={markerKey}
                position={{ lat: location.lat, lng: location.lng }}
              />
            )}
          </GoogleMap>
        ) : (
          <h6>Google map Not Loaded</h6>
        )}
      </Styles.GoogleMapBox>

      <Styles.Button onClick={handleSubmit}>Submit</Styles.Button>
    </Styles.Container>
  );
};

export default CreateNew;
