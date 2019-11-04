import { Component, Input } from '@angular/core';
import { Publication } from 'src/core/models/publication';
import { AppService } from 'src/core/services/app.service';

@Component({
  selector: 'list-publications-root',
  templateUrl: './list-publications.component.html',
  styleUrls: ['./list-publications.component.scss']
})
export class ListPublicationsComponent {

  publications: Array<Publication>;

  constructor(private appService: AppService) {

  }
  
}
