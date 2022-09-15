import React, { useState, useEffect } from "react";
import VisitorNavbar from "@components/VisitorNavbar";
import VisitorSuggestions from "@components/VisitorSuggestions";

function VisitorHome() {
  return (
    <div>
      <VisitorNavbar />
      <VisitorSuggestions />
    </div>
  );
}

export default VisitorHome;
