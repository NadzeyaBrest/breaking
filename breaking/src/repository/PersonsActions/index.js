import Connector from "../connector";

class PersonsActions {
  getPersonsFromApi = async (limit, offset) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(
        `/characters?limit=${limit}&offset=${offset}`
      );
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getPersonFromApi = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`/characters/${id}`);
      result.value = response.data[0];
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getRandomQuoteFromApi = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("/quote/random");
      result.value = response.data[0];
      console.log(result.value);
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getQuoteFromApi = async (nameForQuotes) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(
        `/quote?author=${nameForQuotes}`
      );
      result.value = response.data[0];
    } catch (error) {
      result.error = error;
    }
    return result;
  };

  getPersonFromApiName = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(
        `/characters?name=${name}`
      );
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getTotalPersonsFromApi = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("/characters");
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
}
export default new PersonsActions();
