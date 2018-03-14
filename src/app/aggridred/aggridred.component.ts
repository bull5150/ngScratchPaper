import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aggridred',
  templateUrl: './aggridred.component.html',
  styleUrls: ['./aggridred.component.css']
})
export class AggridredComponent implements OnInit {

  public params: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit() {
   
  }

}
