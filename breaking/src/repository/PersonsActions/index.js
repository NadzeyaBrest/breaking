import Connector from "../connector";

class PersonsActions {
  getPersonsFromApi = async (limit) => {
    console.log(limit);
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`/characters?limit=${limit}`);
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
}
export default new PersonsActions();
