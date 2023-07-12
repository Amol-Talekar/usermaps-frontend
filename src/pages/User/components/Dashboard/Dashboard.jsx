import React, { useState } from "react";
import * as Styles from "./style";
import TableView from "../TableView/TableView";
import MapView from "../MapView/MapView";

const Dashboard = (props) => {
  const { userDetails } = props;

  const [selectedViewOption, setSelectedViewOption] = useState("table");
  const handleViewOptionChange = (option) => {
    setSelectedViewOption(option);
  };
  return (
    <Styles.Container>
      <Styles.ViewSelectorContainer>
        <Styles.ChoiceButton
          isactive={selectedViewOption === "table" ? "true" : "false"}
          onClick={() => handleViewOptionChange("table")}
        >
          Table View
        </Styles.ChoiceButton>
        <Styles.ChoiceButton
          isactive={selectedViewOption === "map" ? "true" : "false"}
          onClick={() => handleViewOptionChange("map")}
        >
          Map View
        </Styles.ChoiceButton>
      </Styles.ViewSelectorContainer>

      <Styles.ViewComponentBox>
        {selectedViewOption == "table" ? (
          <TableView userDetails={userDetails} />
        ) : null}
        {selectedViewOption == "map" ? (
          <MapView userDetails={userDetails} />
        ) : null}
      </Styles.ViewComponentBox>
    </Styles.Container>
  );
};

export default Dashboard;
