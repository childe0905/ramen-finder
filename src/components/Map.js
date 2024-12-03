import React from "react";
import { GoogleMap } from "@react-google-maps/api";

const Map = ({ center, mapRef }) => {
  const containerStyle = { width: "100%", height: "400px" };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={(map) => (mapRef.current = map)} // 設置地圖引用
    />
  );
};

export default Map;