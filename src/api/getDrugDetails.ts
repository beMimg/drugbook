import axios from "axios";

export const getListOfDrugsByGenericName = async (
  query: string,
  page: number
) => {
  try {
    // encode the query, `NAPROXEN SODIUM` will not work, bewucase spaces are not directly supported in URL.
    // encodeURIComponent is a built-in javascript function to replace spaces with `%20`.
    const encodedQuery = encodeURIComponent(query);

    // Get 20 items per fetching.
    const limit = 20;
    // Pagination:
    const offset = (page - 1) * limit;

    const response = await axios.get(
      `https://api.fda.gov/drug/label.json?search=openfda.generic_name:"${encodedQuery}"&limit=${limit}&skip=${offset}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching drug details:", error);
    throw error;
  }
};
