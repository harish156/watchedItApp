
export class Post {
     username;
     title;
     content;
     likes;

     constructor(username, title, content) {
         this.username = username;
         this.title = title;
         this.content = content;
     }
}

export class FeedItem {
    feedId;
    username;
    title;
    content;
    likes;
    Comments;

    constructor(id, username, title, content, likes, Comments) {
        this.feedId = id;
        this.username = username;
        this.title = title;
        this.content = content;
        this.likes = likes;
        this.Comments = Comments;
    }
}