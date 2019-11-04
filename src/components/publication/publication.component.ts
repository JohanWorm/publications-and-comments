import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Publication } from 'src/core/models/publication';
import { MasterUtils } from './../../core/master/master-utils';

@Component({
  selector: 'publication-root',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
  providers: [MasterUtils]
})
export class PublicationComponent {

  @Input() publication: Publication;
  @Input() indexPublication: number;
  @ViewChild("publicationWrapper", { static: false }) publicationWrapper: ElementRef;

  constructor(private masterUtils: MasterUtils) {

  }

  addReaction() {
    if (!this.publication.reactions) {
      this.publication.reactions = [];
    }
    this.publication.reactions.push({
      backgroundColor: this.masterUtils.getRandomColor()
    });
  }

  focusComment() {
    this.publicationWrapper.nativeElement.children[3].children[0].children[0].children[0].children[0].focus();
  }

}
