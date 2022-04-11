import React from "react";
import "./Comment.css"

export class Comment extends React.Component {

    constructor(props) {
        super();
        this.state = {
            commentItem : props.commentItem
        };
    }

    render() {
        return (
            <div class="comment">
                <div class="comment-content"> {this.state.commentItem.comment}</div>
            </div>
        );
    }
}