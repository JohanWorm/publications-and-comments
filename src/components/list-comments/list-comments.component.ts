import { Component, Input } from '@angular/core';
import { Publication } from 'src/core/models/publication';

@Component({
  selector: 'list-comments-root',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent {
  
  @Input() publication: Publication;
  
}
