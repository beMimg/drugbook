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
    const limit = 10;
    // Pagination:
    const offset = (page - 1) * limit;

    // Counts how many exact drug by generic name exists. (small fetch)
    let getCount = await axios.get(
      `https://api.fda.gov/drug/label.json?count=openfda.generic_name.exact&search=openfda.generic_name.exact:"${encodedQuery}"`
    );

    const numberOfSameGenericNameDrug = parseInt(
      getCount.data.results[0].count
    );

    // Get total number of pages by dividing the total of the same generic name drug by the limit
    // limit is used to fetch only a few number at time we fetching the list by generic name.
    // totalPages will be used in the ListOfDrugsByGenericName Pagination.
    const totalPages = Math.ceil(numberOfSameGenericNameDrug / limit);

    const getList = await axios.get(
      `https://api.fda.gov/drug/label.json?search=openfda.generic_name.exact:"${encodedQuery}"&limit=${limit}&skip=${offset}`
    );

    const listOfDrugsByGenericName = getList.data.results;

    return {
      list: listOfDrugsByGenericName,
      totalPages: totalPages,
    };
  } catch (error) {
    console.error("Error fetching drug details:", error);
    throw error;
  }
};
