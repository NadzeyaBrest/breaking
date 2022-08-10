import Connector from "../connector";

class PersonsActions {
  getPersonsFromApi = async (numberOfCard) => {
    console.log(numberOfCard);
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`/characters?limit=${10}`);
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
