import React from "react";
import "./Publisher.css";
import {Post} from "../dataModel/dataModel";
import {RichTextEditor} from "../richTextEditor/RichTextEditor";

export class Publisher extends React.Component {
    constructor() {
        super();
        const params = new URLSearchParams(window.location.search);
        this.state = {
            richTextValue : '',
            title : '',
            username : params.get('username')
        };
    }

    onRichTextValueChange(value) {
        this.state.richTextValue = value;
    }

    updateTitle(event) {
        this.state.title = event.currentTarget.value;
    }

    async submitContent() {
        // Publish the review
        const currPost = new Post(this.state.username, this.state.title, this.state.richTextValue);
        const response = await fetch('http://localhost:4003/Posts/add', {
           method : 'POST',
           body : JSON.stringify(currPost),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            let data = await response.text();
            console.log("Post was added successfully from the web app.");
        } else {
            console.log("Post was not added from the web app.");
        }
        this.forceUpdate();
    }

    render() {
        return (
            <div class="publisher">
                <div class="publisher-info">
                    Did you watch something cool and want to share your thoughts or honest review about it? Type in the following
                    publisher and post it!
                </div>

                <span class="post-title" >
                    <span class="post-title-label"> Post Title : </span>
                    <input type="text" class="post-title-input" id="postTitle" name="postTitle"  onChange={this.updateTitle.bind(this)}/>
                </span>
                <RichTextEditor richTextValue={this.state.richTextValue}
                                onValueChange={this.onRichTextValueChange.bind(this)}>
                </RichTextEditor>
                <input class="submit-button" type="submit"
                       value="Submit" onClick={this.submitContent.bind(this)}></input>
            </div>
        );
    }
}