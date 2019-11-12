import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EriJService {

  constructor(private http: HttpClient) { }

  public verificaEri(img): Observable<any> {
    const formData = new FormData();
    formData.append('foto', img);

    const url = `http://localhost:3000/eri/`;
    return this.http.post(url, formData);
  }
}
