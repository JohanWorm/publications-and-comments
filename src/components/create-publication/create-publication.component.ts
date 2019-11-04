import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Publication } from 'src/core/models/publication';
import { AppService } from 'src/core/services/app.service';
import { MasterUtils } from 'src/core/master/master-utils';

@Component({
  selector: 'create-publication-root',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.scss'],
  providers: [MasterUtils]
})
export class CreatePublicationComponent {

  publicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private appService: AppService, private masterUtils: MasterUtils) {
    this.publicationForm = this.formBuilder.group({
      publication: ['', Validators.required]
    });
  }

  createPublication() {
    let userName: string;
    this.appService.getUserSession().subscribe(
      (data) => {
        if (data["results"].length) {
          userName = data["results"][0].name.first + " " + data["results"][0].name.last;
        } else {
          //Default user
          userName = "Johan Cuberos";
        }
        let newPublication = new Publication(userName, this.masterUtils.getDateFromNow(), this.publicationForm.controls.publication.value);
        this.savePublication(newPublication);
      }
    );
  }

  savePublication(newPublication: Publication) {
    this.appService.createPublication(newPublication);
    this.publicationForm.reset();
  }

}
