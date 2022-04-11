import React from "react";
import {Feed} from "../feed/Feed";
import {FeedItem} from "../dataModel/dataModel"

export class Feeds extends React.Component {

    constructor() {
        super();
        this.state = {
            feeds :  []
        };
    }

    async componentDidMount() {
        //Call API to fetch the feeds
        const response = await fetch('http://localhost:4003/Posts/', {
            method : 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            let data = await response.json();
            let feeds = [];
            if (data) {
                data.map((item) => {
                    feeds.push(new FeedItem(
                        item._id,
                        item.username,
                        item.title,
                        item.content,
                        item.likes,
                        item.Comments));
                })
            }
            this.setState({ feeds : feeds});
            console.log("Feeds were retrieved successfully from server.");
        } else {
            console.log("Feeds were not retrieved..");
        }
    }

    render() {
        return (
            <div class="feeds">
                See what your friends have wrote....
                {this.state.feeds.map((feed) => <Feed feedItem={feed}/>)}
            </div>
        );
    }
}