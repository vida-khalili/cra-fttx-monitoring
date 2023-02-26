import EXCards from "src/pages/operator/components/RightPanel/ExCards";
import React from "react";
import CityCards from "src/pages/operator/components/RightPanel/CityCards";
import OperatorRankCard from "src/pages/operator/components/RightPanel/OperatorRank";
import Actions from "src/pages/operator/components/RightPanel/Actions";



const RightPanel = () => (
  <>
    <EXCards />
    <CityCards />
    <OperatorRankCard />
    <Actions />
  </>
);

export default RightPanel;
