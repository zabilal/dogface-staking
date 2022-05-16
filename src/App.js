import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Mint from "./mint";
import Navbar from "./navbar";
import Staking from "./staking";
import Airdrop from "./airdrop";
import Home from "./home";

const App = () => {
  return (
    <Router>
      <main
        style={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/mint" render={(props) => <Mint {...props} />} />
          <Route path="/staking" render={(props) => <Staking {...props} />} />
          <Route path="/airdrop" render={(props) => <Airdrop {...props} />} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
