import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Adress";
import "./App.css"; // Vous pouvez personnaliser votre application avec du CSS

function App() {
  return (
    <div className="App">
      <h1>Mon App Profil</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
