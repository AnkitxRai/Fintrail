import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }



  public baseUrl(){
    return environment.basUrl;
  }

  public url(url) {
    return `${this.baseUrl()}/${url}`
  }
}
