import React from "react";

function Header() {
  return (
    <div className="text-center">
      {/* Reduce spacing by setting margins */}
      <img
        src="safezonelogo.svg"
        alt="Logo"
        style={{ height: "350px", marginBottom: "-30px", marginTop: "-30px" }}
      />
      <p className="mb-3">
        Click on a topic to read about others' stories, advice, and support or
        share your own
      </p>
    </div>
  );
}

export default Header;
