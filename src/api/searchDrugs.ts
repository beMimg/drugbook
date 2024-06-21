import axios from "axios";

export const searchDrug = async (query: string, limit: number) => {
  try {
    const url = `https://api.fda.gov/drug/label.json?count=openfda.generic_name.exact&search=openfda.generic_name:*${query}*&limit=${limit}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
