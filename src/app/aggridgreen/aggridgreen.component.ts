import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggridgreen',
  templateUrl: './aggridgreen.component.html',
  styleUrls: ['./aggridgreen.component.css']
})
export class AggridgreenComponent implements OnInit {

  public params: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit() {
  }

}
