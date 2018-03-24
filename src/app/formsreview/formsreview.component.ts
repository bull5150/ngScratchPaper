import { Component, OnInit } from '@angular/core';
import { form_data } from '../models/form_data';

@Component({
  selector: 'forms',
  templateUrl: './formsreview.component.html',
  styleUrls: ['./formsreview.component.css']
})
export class FormsreviewComponent implements OnInit {

  public formData: form_data[];
  public model: Date;

  constructor() { 
  
  }

  ngOnInit() {
    this.formData = [{
      fname: null,
      lname: null,
      email: null,
      phone: null,
      cont_method: null,
      gender: null
    }]
  }

  dataFill(){
    this.formData = [{
      fname: "Frankie",
      lname: "Muniz",
      email: "frankthetank@muniz.com",
      phone: "402-444-4444",
      cont_method: "He drives race cars apparently",
      gender: "female"
    }]
  }

  dataClear(){
    console.log(this.formData[0].gender)
    this.formData = [{
      fname: null,
      lname: null,
      email: null,
      phone: null,
      cont_method: null,
      gender: null
    }]
  }
}
