import React from "react";
import "./Card.css";

import { CardBanner } from "./CardBanner";
import { CardContent } from "./CardContent";

export const CardContainer = () => {
  return (
    <div>
      <a href="https://www.reactjs.org">
        <CardBanner />
        <CardContent />
      </a>
    </div>
  );
};
