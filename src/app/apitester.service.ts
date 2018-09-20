import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { hellolist } from './hellotest';


@Injectable()
export class ApitesterService {

  constructor(private http: HttpClient) { }
  public getHello(){
    return this.http.get<hellolist[]>('/api/tester')
  }
}
