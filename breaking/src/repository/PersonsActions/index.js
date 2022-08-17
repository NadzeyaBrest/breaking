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
  getQuoteFromApi = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`/quotes/${id}`);
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
  getTotalPersonsFromApi = async (limit, offset) => {
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
