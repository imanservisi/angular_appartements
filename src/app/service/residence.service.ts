import { Injectable } from '@angular/core';
import { Residence } from '../model/residence.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Lot } from '../model/lot.model';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }

  listeResidences(): Observable<Residence[]>
  {
    return this.http.get<Residence[]>(environment.apiURL);
  }

  ajouterResidence(res: Residence): Observable<Residence>
  {
    return this.http.post<Residence>(environment.apiURL, res, httpOptions);
  }

  supprimerResidence(id: number)
  {
    const url = `${environment.apiURL}/${id}`;

    return this.http.delete(url, httpOptions);
  }

  consulterResidence(id: number): Observable<Residence>
  {
    const url = `${environment.apiURL}/${id}`;

    return this.http.get<Residence>(url);
  }

  modifierResidence(res: Residence):Observable<Residence>
  {
    return this.http.put<Residence>(environment.apiURL, res, httpOptions);
  }

  consulterLotsByResidenceId(id: number): Observable<Lot[]>
  {
    const url = `${environment.apiURL}/${id}/lots`;

    return this.http.get<Lot[]>(url);
  }
}
