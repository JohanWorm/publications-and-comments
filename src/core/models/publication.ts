import { Comment } from './comment';

export class Publication {

    userName: string;
    date: string;
    publication: string;
    reactions: Array<object>;
    comments: Array<Comment>;

    constructor(userName: string, date: string, publication: string, reactions?: object, comments?: Comment) {
        this.userName = userName;
        this.date = date;
        this.publication = publication;

        if (reactions) {
            this.reactions.push(reactions);
        }

        if (comments) {
            this.comments.push(comments);
        }
    }
    
}