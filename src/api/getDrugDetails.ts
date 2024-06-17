import axios from "axios";

export const getDrugDetails = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}&limit=1`
    );
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
  }
};
