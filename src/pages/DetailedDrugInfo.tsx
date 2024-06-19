import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDrugInfo } from "../api/getDetailedDrugInfo";

const DetailedDrugInfo = () => {
  const [drugInfo, setDrugInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getDrugInfo = async () => {
      try {
        if (id) {
          const response = await getDetailedDrugInfo(id);
          setDrugInfo(response?.data?.results[0]);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getDrugInfo();
  }, [id]);

  console.log(drugInfo);
  return <div>DetailedInfoDrug</div>;
};

export default DetailedDrugInfo;
