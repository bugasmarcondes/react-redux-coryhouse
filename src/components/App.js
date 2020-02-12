import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            {/* Utilizamos Switch para que somente uma rota seja encontrada e utilizada */}
            {/* Se não encontrar uma rota, utiliza o componente PageNotFound */}
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
