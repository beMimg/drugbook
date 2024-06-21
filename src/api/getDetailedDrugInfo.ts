import axios from "axios";

export const getDetailedDrugInfo = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.fda.gov/drug/label.json?search=id:"${id}"`
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
