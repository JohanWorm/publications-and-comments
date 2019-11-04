import { Component, Input } from '@angular/core';
import { Comment } from 'src/core/models/comment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/core/services/app.service';
import { MasterUtils } from 'src/core/master/master-utils';

@Component({
  selector: 'create-comment-root',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss'],
  providers: [MasterUtils]
})
export class CreateCommentComponent {
  
  @Input() indexPublication: number;
  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private appService: AppService, private masterUtils: MasterUtils) {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  createComment() {
    let userName: string;
    this.appService.getUserSession().subscribe(
      (data) => {
        if (data["results"].length) {
          userName = data["results"][0].name.first + " " + data["results"][0].name.last;
        } else {
          // Default user
          userName = "Johan Cuberos";
        }
        let newComment = new Comment(userName, this.masterUtils.getDateFromNow(), this.commentForm.controls.comment.value);
        this.saveComment(newComment);
      }
    );
  }

  saveComment(newComment: Comment) {
    this.appService.createComment(newComment, this.indexPublication);
    this.commentForm.reset();
  }
  
}
