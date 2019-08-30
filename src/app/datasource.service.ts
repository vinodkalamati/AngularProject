import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  private _url: string ="https://api.themoviedb.org/3/movie/popular?api_key=4c081a9b73f4f73f73c5d5048012d817&language=en-US";
  
  constructor(private http: HttpClient) { }

  getdata():Observable<any>{
    return this.http.get(this._url); 
  }
}
