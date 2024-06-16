import axios from "axios";

export const searchDrug = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.fda.gov/drug/label.json?search=openfda.generic_name:*${query}*&limit=3`
    );
    console.log(response.data);
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
};
