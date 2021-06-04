import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private urlHarryAPI = 'https://www.kiwime.com/oqdb/files/1003884477/OpenQuizzDB_003/openquizzdb_3.json';

  constructor(private http: HttpClient) { }


  getQuestion(): Observable<any> {
    return this.http.get<any>(this.urlHarryAPI);
  }


}
