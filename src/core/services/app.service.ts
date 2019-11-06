import { Injectable } from '@angular/core';
import { Publication } from './../models/publication';
import { Comment } from './../models/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private urlUserNameApi = 'https://randomuser.me/api/'
    private headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

    publications: Array<Publication> = [];

    constructor(private http: HttpClient) { }

    public createPublication(publication: Publication) {
        this.publications.unshift(publication);
    }

    public createComment(comment: Comment, indexPublication: number) {
        if (!this.publications[indexPublication]["comments"]) {
            this.publications[indexPublication]["comments"] = [];
        }

        this.publications[indexPublication]["comments"].push(comment);
    }

    public getUserSession() {
        return this.http.get(this.urlUserNameApi, { headers: this.headers});
    }

}
