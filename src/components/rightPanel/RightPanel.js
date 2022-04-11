import React from "react";
import "./RightPanel.css"
import {Publisher} from "../publisher/Publisher";
import {Feeds} from "../feeds/Feeds";

export class RightPanel extends React.Component {
    render() {
        return (
            <div class="right-panel-content">
                <div class="main-banner">
                    <img src="WatchedIt.png" className="img-rounded banner-image" alt="Cinque Terre"/>
                    WatchedIt is A social media app for movie reviews and suggestions. You can create a N/W of friends who share similar movie interests and read their reviews.
                </div>
                <div class="publisher-area">
                   <Publisher></Publisher>
                    <Feeds></Feeds>
                </div>
            </div>
        );
    }
}