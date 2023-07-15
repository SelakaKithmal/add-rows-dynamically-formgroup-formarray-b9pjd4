import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import * as uuid from 'uuid';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  myForm: FormGroup;
  formControls = [
    { type: 'input', label: 'Name', name: 'name', inputType: 'text' },
    { type: 'input', label: 'Email', name: 'email', inputType: 'email' },
    { type: 'select', label: 'Country', name: 'country', options: [
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'Mexico', value: 'MX' }
      ]
    }
    // Add more form controls as needed
  ];
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.myForm = this.formBuilder.group({});
    this.formControls.forEach(control => {
      const formControl = new FormControl('', Validators.required);
      this.myForm.addControl(control.name, formControl);
    });
  }
 
}
