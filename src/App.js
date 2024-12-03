import React, { useState, useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import Weather from "./components/Weather";

const ramenList = [
  "一風堂拉麵（台北店）",
  "屯京拉麵（忠孝店）",
  "北海道拉麵一燈",
  "山頭火拉麵（信義店）",
  "麵屋武藏（台北車站店）",
  "麵屋一燈（中山店）",
  "鳴龍拉麵",
  "鶴龜拉麵（東區店）",
  "豚骨拉麵一幸舍",
  "阿夫利拉麵（信義微風店）",
  "金色拉麵（板橋大遠百店）",
  "麵屋輝",
  "麵屋千雲（永和店）",
  "麵屋杉本（新莊店）",
  "豚人拉麵",
  "豚骨家（板橋府中店）",
  "花月嵐拉麵（新店大坪林店）",
  "天神屋拉麵",
  "麵屋吉田（新莊店）",
  "霸拉麵（三重店）",
];

const App = () => {
  const [center, setCenter] = useState({ lat: 25.033964, lng: 121.564468 }); // 預設中心為台北101
  const mapRef = useRef(null);

  const handlePlaceSelected = (location) => {
    setCenter(location); // 更新地圖中心
    if (mapRef.current) {
      mapRef.current.panTo(location); // 平移地圖到選定位置
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDpm7myIBptTbd4kXwpSeYeCeC37AAupy0" // 替換為您的 Google Maps API 金鑰
      libraries={["places"]} // 確保載入 Places API
    >
      <div className="app">
        <h1>拉麵搜尋系統</h1>
        <div className="ramen-list">
          <h2>台北與新北市有名的拉麵店：</h2>
          <ul>
            {ramenList.map((ramen, index) => (
              <li key={index}>{ramen}</li>
            ))}
          </ul>
        </div>
        <SearchBar onPlaceSelected={handlePlaceSelected} />
        <Map center={center} mapRef={mapRef} />
        <Weather lat={center.lat} lon={center.lng} />
      </div>
    </LoadScript>
  );
};

export default App;