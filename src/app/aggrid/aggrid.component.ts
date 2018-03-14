import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';
import { AggridredComponent } from '../aggridred/aggridred.component';
import { football_teams } from '../models/football_teams';

@Component({
  selector: 'aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css']
})
export class AggridComponent implements OnInit {

  public gridOptions: GridOptions;
  public defaultColDef;
  public gridData: football_teams[];
  public divFlag: string;

  constructor() { 
    this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "Rank",
                field: "id",
                width: 100
            },
            {
                headerName: "University",
                field: "univ",
                width: 300
            },
            {
                headerName: "Name",
                field: "name",
                width: 200
            },
            {
                headerName: "Conference",
                field: "conf",
                width: 100
            },
            {
                headerName: "Wins",
                field: "win",
                width: 100
            },
            {
                headerName: "Losses",
                field: "loss",
                width: 100,
              cellRendererFramework: AggridredComponent,
            },
        ];
        this.defaultColDef = {editable: true};
  }

  createWestData(){
    this.gridData = [{
      id: 5,
      univ: "University of Nebraska",
      name: "Cornhuskers",
      conf: "B10 West",
      win: 4,
      loss: 8
    },{
      id: 3,
      univ: "University of Iowa",
      name: "Hawkeyes",
      conf: "B10 West",
      win: 8,
      loss: 5
    },{
      id: 1,
      univ: "University of Wisconsin",
      name: "Badgers",
      conf: "B10 West",
      win: 13,
      loss: 1
    },{
      id: 2,
      univ: "University of Northwestern",
      name: "Wildcats",
      conf: "B10 West",
      win: 10,
      loss: 3
    },{
      id: 4,
      univ: "University of Purdue",
      name: "Boiler Makers",
      conf: "B10 West",
      win: 7,
      loss: 6
    },{
      id: 6,
      univ: "University of Minnesota",
      name: "Gophers",
      conf: "B10 West",
      win: 2,
      loss: 7
    },{
      id: 7,
      univ: "University of Illinois",
      name: "Illini",
      conf: "B10 West",
      win: 2,
      loss: 10
    }
  ]}
  
  createEastData(){
    this.gridData = [{
      id: 1,
      univ: "The University of Ohio State",
      name: "Buckeyes",
      conf: "B10 East",
      win: 11,
      loss: 2
    },{
      id: 3,
      univ: "University of Michigan",
      name: "Wolverines",
      conf: "B10 East",
      win: 8,
      loss: 5
    },{
      id: 2,
      univ: "University of Penn State",
      name: "Lions",
      conf: "B10 East",
      win: 11,
      loss: 2
    },{
      id: 5,
      univ: "University of Rutgers",
      name: "Knights",
      conf: "B10 East",
      win: 4,
      loss: 8
    },{
      id: 2,
      univ: "University of Michigan State",
      name: "Spartans",
      conf: "B10 East",
      win: 10,
      loss: 3
    },{
      id: 6,
      univ: "University of Indiana",
      name: "Hoosiers",
      conf: "B10 East",
      win: 5,
      loss: 7
    },{
      id: 7,
      univ: "University of Maryland",
      name: "Turtles",
      conf: "B10 East",
      win: 4,
      loss: 8
    }
  ]}
  showdifferent(){
    if(this.divFlag === "West")
    {
      this.divFlag = "East";
      this.createEastData();
    }
    else
    {
      this.divFlag = "West";
      this.createWestData();
    }
  }
  ngOnInit() {
      this.createWestData();
      this.divFlag = "West";
  }

}
