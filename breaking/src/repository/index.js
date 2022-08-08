import connector from "./connector";
import PersonsActions from "./PersonsActions";

class Repository {
  connector = connector;
  PersonsActions = PersonsActions;
}
export default new Repository();
