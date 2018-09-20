import { Component, OnInit } from '@angular/core';
import { ApitesterService } from '../apitester.service';
import { hellolist } from '../hellotest';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hellodata: hellolist[];
  public apiValue: string;

  constructor(private ApitesterService: ApitesterService) { }

  ngOnInit() {
    this.ApitesterService.getHello().subscribe(response=>{
      this.apiValue = response[0].testtwo
    })
  }
}
