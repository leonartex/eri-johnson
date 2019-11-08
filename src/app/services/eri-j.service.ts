import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EriJService {

  constructor(private http: HttpClient) { }

  public verificaEri(img): Observable<any> {
    const blob = new Blob([img], {type: 'image/jpeg'});
    const file = new File([blob], 'eri.jpg', { type: 'image/jpeg' });

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('foto', file);

    const url = `http://localhost:3000/eri/`;
    return this.http.post(url, formData);
  }
}
