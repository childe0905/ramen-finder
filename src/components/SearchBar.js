import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";

// 拉麵店名和地理位置列表
const ramenLocations = [
  { name: "一風堂拉麵（台北店）", location: { lat: 25.034153, lng: 121.564293 } },
  { name: "屯京拉麵（忠孝店）", location: { lat: 25.041504, lng: 121.556563 } },
  { name: "北海道拉麵一燈", location: { lat: 25.048561, lng: 121.517166 } },
  { name: "山頭火拉麵（信義店）", location: { lat: 25.032728, lng: 121.567432 } },
  { name: "麵屋武藏（台北車站店）", location: { lat: 25.047851, lng: 121.515645 } },
  { name: "麵屋一燈（中山店）", location: { lat: 25.052471, lng: 121.520334 } },
  { name: "鳴龍拉麵", location: { lat: 25.033983, lng: 121.545196 } },
  { name: "鶴龜拉麵（東區店）", location: { lat: 25.041572, lng: 121.556212 } },
  { name: "豚骨拉麵一幸舍", location: { lat: 25.033736, lng: 121.564498 } },
  { name: "阿夫利拉麵（信義微風店）", location: { lat: 25.036267, lng: 121.565901 } },
  // 可繼續新增更多店家
];

const SearchBar = ({ onPlaceSelected }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    // 搜索匹配的拉麵店
    const matchedRamen = ramenLocations.find((ramen) =>
      ramen.name.includes(searchInput)
    );

    if (matchedRamen) {
      // 找到匹配的店名，返回位置
      onPlaceSelected(matchedRamen.location);
    } else {
      alert("未找到匹配的店名，請重新輸入！");
    }
  };

  return (
    <div className="search-bar">
      {/* 自動完成框 */}
      <Autocomplete
        apiKey="YOUR_GOOGLE_MAPS_API_KEY" // 替換為您的 API 金鑰
        onPlaceSelected={(place) => {
          if (place.geometry && place.geometry.location) {
            const location = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            onPlaceSelected(location);
          }
        }}
        options={{ types: ["geocode"] }}
        placeholder="搜尋地點或拉麵店名..."
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
        }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} // 更新輸入框內容
      />
      {/* 搜索按鈕 */}
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 15px",
          marginLeft: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        搜尋
      </button>
    </div>
  );
};

export default SearchBar;