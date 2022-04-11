import React from "react";
import NavBar from "../navBar/NavBar";
import "./Header.css";

export class Header extends React.Component {

    constructor() {
        super();
        const params = new URLSearchParams(window.location.search);
        this.state = {
            username : params.get('username')
        }
    }

     render() {
         return (
             <div class=" header container-fluid">
                 <div class="row">
                <div class="logo col-2">
                    <h2> Watched It! </h2>
                    <img src="WatchedIt.png" class="logo-image img-rounded"></img>
                </div>
                 <div class="nav-area col-8"><NavBar></NavBar></div>
                 <div class="user-info col-2"> User - {this.state.username} </div>
                 </div>
             </div>
         );
     }
}