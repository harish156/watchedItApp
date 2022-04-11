import React from "react";
import {Header} from "../header/Header";
import MainContent from "../mainContent/MainContent";

class MainPage extends React.Component {
    render() {
        return (
            <div class="main">
                <Header></Header>
                <MainContent></MainContent>
            </div>
        );
    }
}

export default MainPage;