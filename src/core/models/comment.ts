export class Comment {

    userName: string;
    date: string;
    comment: string; 

    constructor(userName: string, date: string, comment: string) {
        this.userName = userName;
        this.date = date;
        this.comment = comment;
    }
}