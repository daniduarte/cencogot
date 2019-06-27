import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl: string = "https://anapioficeandfire.com/api";
  pageSize: number = 9;

  constructor(private http:HttpClient) { }

  public getHouses (currentPage: number) {
    return this.http.get<any[]>(this.baseUrl + '/houses' + '?page=' + currentPage + '&pageSize=' + this.pageSize, { observe: 'response' });
  }

  public getCharacters (currentPage: number) {
    return this.http.get<any[]>(this.baseUrl + '/characters' + '?page='+ currentPage +'&pageSize=' + this.pageSize, { observe: 'response' });
  }
}
