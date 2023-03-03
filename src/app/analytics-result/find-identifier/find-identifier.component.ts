import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-identifier',
  templateUrl: './find-identifier.component.html',
  styleUrls: ['./find-identifier.component.scss']
})
export class FindIdentifierComponent {

  searchForm: FormGroup<any> = new FormGroup({
    id: new FormControl(
      { value: null, disabled: false },
      {
        nonNullable: false,
        validators: [Validators.required],
      }
  )});

  constructor(private route: Router){}

   loadAnalyse() {
    if(this.searchForm.getRawValue().id){
      this.route.navigate(['/analyse', this.searchForm.getRawValue().id , 'detail']);
    } else {
      // TODO: exibir um toast
    }
    
  }
}
