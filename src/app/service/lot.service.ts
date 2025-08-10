import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Lot } from '../model/lot.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'}
  )
}
@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(private readonly http: HttpClient) { }

  supprimerLot(id: number)
  {
    const url = `${environment.apiURL}/lots/${id}`;

    return this.http.delete(url, httpOptions);
  }

  ajouterLot(lot: Lot): Observable<Lot>
  {
    const url = `${environment.apiURL}/lots`;

    return this.http.post<Lot>(url, httpOptions);
  }
}
