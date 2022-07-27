import CardList from "./components/organismes/CardList/index";
import cards from "./cards";
import Wrapper from "./components/organismes/Wrapper";

const App = () => {
  return (
    <div>
      <CardList cards={cards} />
      {/* <Wrapper /> */}
    </div>
  );
};

export default App;
