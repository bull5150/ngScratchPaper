import { Component, OnInit } from '@angular/core';
import { form_data } from '../models/form_data';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'forms',
  templateUrl: './formsreview.component.html',
  styleUrls: ['./formsreview.component.css']
})
export class FormsreviewComponent implements OnInit {

  public formData: form_data[];

  constructor() { 
  
  }
  ngOnInit() {
    this.formData = [{
      fname: null,
      lname: null,
      email: null,
      phone: null,
      cont_method: null,
      gender: null,
      checkbox: null,
      radiobtn: null,
      datepick: null
    }]
  }
  dataFill(){
    this.formData = [{
      fname: "Frankie",
      lname: "Muniz",
      email: "frankthetank@muniz.com",
      phone: "402-444-4444",
      cont_method: "He drives race cars apparently",
      gender: "female",
      checkbox: true,
      radiobtn: "3",
      datepick: new NgbDate(1985, 12, 5)
    }]
  }
  dataClear(){
    this.formData = [{
      fname: null,
      lname: null,
      email: null,
      phone: null,
      cont_method: null,
      gender: null,
      checkbox: null,
      radiobtn: null,
      datepick: null
    }]
  }
  dayChange(){
    //can do something after user changes the date
  }
}
