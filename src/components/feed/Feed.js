import React from "react";
import "./Feed.css"
import {Comment} from "../comment/Comment";

// The component that represents a single Feed Item on the Feeds list

export class Feed extends React.Component {

    showEditPost = false;
    showAddComment = false;
    newCommentValue = "";

    constructor(props) {
        super();
        const params = new URLSearchParams(window.location.search);
        this.state = {
            feedItem : props.feedItem,
            username : params.get('username')
        };
    }

    editPostClicked() {
        this.showEditPost = true;
        this.forceUpdate();
    }

    // update a feed Item.
    async updatePost(post) {
        const response = await fetch(`http://localhost:4003/Posts/update/${post.feedId}`, {
            method : 'POST',
            body : JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            let data = await response.text();
            console.log("Post was updated successfully from the web app.");
        } else {
            console.log("Post was not updated from the web app.");
        }
    }

    async savePostClicked() {
        this.showEditPost = false;
        await this.updatePost(this.state.feedItem);
        this.forceUpdate();
    }

    updateFeedItemValue(event) {
        const stateVal = this.state;
        stateVal.feedItem.content = event.currentTarget.value;
        this.setState(stateVal);
    }

    addCommentClicked() {
        this.showAddComment = true;
        this.forceUpdate();
    }

    addNewCommentValue(event) {
        this.newCommentValue = event.currentTarget.value;
    }

    async updateComment() {
        const stateVal = this.state;
        stateVal.feedItem.Comments.push({
            username : this.state.username,
            comment : this.newCommentValue
        });
        this.setState(stateVal);
        this.newCommentValue = "";
        await this.updatePost(stateVal.feedItem);
        this.showAddComment = false;
        this.forceUpdate();
    }

    render() {
        const comments = this.state.feedItem.Comments;
        return (
            <div class="feed">
                <div class="feed-top-bar">
                    <div class="feed-header">
                        <span class="feed-title"> {this.state.feedItem.title}</span>
                        <span class="posted-by"> -Posted by {this.state.feedItem.username}</span>
                    </div>
                    <button type="button" className="btn-basic btn-xs edit-button"
                            onClick={this.editPostClicked.bind(this)}>
                        edit post
                    </button>
                </div>
                { this.showEditPost
                    ? <div class="edit-content">
                        <textarea id="postArea" cols="70" rows = "3" value={this.state.feedItem.content}
                                  onChange={this.updateFeedItemValue.bind(this)}></textarea>
                        <button type="button" className="btn-basic btn-xs save-button"
                                onClick={this.savePostClicked.bind(this)}> save
                        </button>
                      </div>
                    : <div className="feed-content"> {this.state.feedItem.content} </div>
                }

                { comments.length  > 0 &&
                    <div class="feed-comments">
                        <div class="comment-num">
                            {comments.length > 1 ? `${comments.length} Comments...` : `${comments.length} Comment`}
                        </div>
                        {this.state.feedItem.Comments.map((commentItem) => <Comment commentItem={commentItem}/>)}
                    </div>
                }
                <button type="button" className="btn-basic btn-xs add-comment-button"
                        onClick={this.addCommentClicked.bind(this)}>
                    Add comment
                </button>
                { this.showAddComment
                    ? <div class="add-comment">
                         <textarea id="commentArea" cols="70" rows = "3"
                                   onChange={this.addNewCommentValue.bind(this)}></textarea>
                        <button type="button" className="btn-basic btn-xs save-button"
                                onClick={this.updateComment.bind(this)}> save
                        </button>
                      </div>
                    : ""
                }
            </div>
        );
    }
}