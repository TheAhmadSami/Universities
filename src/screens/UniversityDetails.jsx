import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useUniversites } from "../hooks/useUniversites";

const UniversityDetails = () => {
  const { data } = useUniversites();
  const { id } = useParams();
  const university = data?.find((u) => u?.name == id?.replace("%20", " "));

  return (
    <div className="container-full">
      <h1 className="main-title">{university?.name}</h1>
      <h3 className="sub-title">
        {university?.country}, <span>{university?.["state-province"]}</span>
      </h3>
      <p className="domain">Domain: {university?.web_pages?.[0]}</p>
      <iframe className="univeristy-iframe" src={university?.web_pages?.[0]} title="description"></iframe>
    </div>
  );
};

export default UniversityDetails;
