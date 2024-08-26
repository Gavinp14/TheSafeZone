import Header from "../components/Header/Header";
import React from "react";
import CommunityCardGrid from "../components/CardGrid/CommunityCardGrid";

function Home() {
  return (
    <div className="App">
      <Header />
      <CommunityCardGrid />
    </div>
  );
}

export default Home;
