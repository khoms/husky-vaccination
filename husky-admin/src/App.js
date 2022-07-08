import "./App.css";
import SideMenu from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useContext } from "react";
import Appointment from "./components/Screens/Appointment";
import Home from "./components/Screens/Dashboard";
import Dog from "./components/Screens/Dog";
import Setting from "./components/Screens/Setting";
import Header from "./components/Header";
import LoginPage from "./components/Screens/Login";

import { AuthContext } from "./provider/AuthProvider";

const App = () => {
  const [inactive, setInactive] = useState(false);

  const { loading, userToken } = useContext(AuthContext);
  console.log("context bata aako value", userToken);

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (userToken) {
    return (
      <div className="App">
        <Router>
          <SideMenu
            onCollapse={(inactive) => {
              console.log(inactive);
              setInactive(inactive);
            }}
          />

          <div className={`container ${inactive ? "inactive" : ""}`}>
            {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
            {/* {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {/* {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null} */}
            {/* </>))}  */}
            <Header />

            <Switch>
              <Route exact path={"/"}>
                <Home />
              </Route>
              <Route exact path={"/manage"}>
                <Appointment />
              </Route>
              <Route path={"/setting"}>
                <Setting />
              </Route>
              <Route path={"/dogs"}>
                <Dog />
              </Route>
              <Route path={"/logout"}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  } else {
    return <LoginPage />;
  }
};

export default App;
