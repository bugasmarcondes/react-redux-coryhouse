import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            {/* Utilizamos Switch para que somente uma rota seja encontrada e utilizada */}
            {/* Se não encontrar uma rota, utiliza o componente PageNotFound */}
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/courses/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
