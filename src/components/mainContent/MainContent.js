import React from "react";
import "./MainContent.css"
import {RightPanel} from "../rightPanel/RightPanel";
import SideBar from "../Sidebar/SideBar";

class MainContent extends React.Component {
    render() {
        return (
            <div class="main-content container-fluid">
                <div class="row">
                    <div class="left-panel col-2">
                        <SideBar></SideBar>
                    </div>
                    <div class="right-panel col-10">
                        <RightPanel></RightPanel>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;