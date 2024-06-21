import axios from "axios";

export const searchDrug = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.fda.gov/drug/label.json?count=openfda.generic_name.exact&search=openfda.generic_name:*${query}*&limit=100`
    );
    return response.data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
