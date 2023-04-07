import React from "react";
import TourContext from "./tour-context";
const TourContextProvider = (props) => {
  const tourContext = {
    tours: [
      {
        date: "JUL 16",
        location: "DETROIT, MI",
        venue: "DTE ENERGY MUSIC THEATRE",
      },
      {
        date: "JUL 19",
        location: "TORONTO, ON",
        venue: "BUDWEISER STAGE",
      },
      {
        date: "JUL 22",
        location: "BRISTOW, VA",
        venue: "JIGGY LUBE LIVE",
      },
      {
        date: "JUL 29",
        location: "PHOENIX, AZ",
        venue: "AK-CHIN PAVILION",
      },
      {
        date: "AUG 2",
        location: "LAS VEGAS, NV",
        venue: "T-MOBILE ARENA",
      },
      {
        date: "AUG 7",
        location: "CONCORD, CA",
        venue: "CONCORD PAVILION",
      },
    ],
  };
  return (
    <TourContext.Provider value={tourContext}>
      {props.children}
    </TourContext.Provider>
  );
};
export default TourContextProvider;
