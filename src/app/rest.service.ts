import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl:string = "https://anapioficeandfire.com/api";

  constructor(private http:HttpClient) { }

  public getHouses () {
    return this.http.get(this.baseUrl + '/houses');
  }

  public getCharacters () {
    return this.http.get(this.baseUrl + '/characters');
  }
}
