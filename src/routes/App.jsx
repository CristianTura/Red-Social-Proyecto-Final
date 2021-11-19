import React from "react";
import "../assets/styles/global2.css";
import { DataProvider } from "../context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompletePerfil from "../pages/CompletePerfil";
import FormNewsPage from "../pages/FormNewsPage";
import FormEventPage from "../pages/FormEventPage";
import FormEventEdit from "../components/FormEvent/FormEventEdit";
import FormJobsPage from "../pages/FormJobsPage";


const App = () => {
    return (
        <DataProvider>
            <Router>

                <Switch>

                    <Route exact path="/formprofile">
                        <CompletePerfil />

                    </Route>

                    <Route exact path="/formevent">
                        <FormEventPage />
                    </Route>
                    <Route exact path="/editevent">

                        <FormEventEdit />
                    </Route>

                    <Route exact path="/formnews">
                        <FormNewsPage />
                    </Route>

                    <Route exact path="/formjobs">
                        <FormJobsPage />
                    </Route>

                </Switch>
            </Router>
        </DataProvider>
    );

};

export default App;

