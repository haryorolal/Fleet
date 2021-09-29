import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser, Icontact } from '../vacancy/vacancy.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

httpOption = { headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded'}) };

constructor(private http:HttpClient) { }


  postCandidate(candidate){
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type' : 'application/json' }) };
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded'}) };
    //return this.http.post<IUser>(`${environment.api}/postAllfleet`, candidate, httpOptions)
    //return this.http.post(`http://localhost:8012/api/fleetbackend.php`, candidate, {responseType: 'text'});
    return this.http.post(`https://www.ovitfleet.com/api/fleetbackend.php`, candidate, {responseType: 'text'} )
    //return this.http.post(`https://www.mordfleet.com/api/mordfleet.php`, candidate, {responseType: 'text'} )
  }

  postcontact(contact){
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded'}) };
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type' : 'application/json'}) };
    //return this.http.post(`http://localhost:8012/api/contact.php`, contact, {responseType: 'text'});
    return this.http.post(`https://www.ovitfleet.com/api/contact.php`, contact, {responseType: 'text'});
    //return this.http.post(`https://www.mordfleet.com/api/contact.php`, contact, {responseType: 'text'});
  }

  postemail(email){
    return this.http.post("http://localhost:8012/api/email.php", email, {responseType: 'text'}); 
    //return this.http.post(`https://www.mordfleet.com/api/email.php`, email, {responseType: 'text'});
  }

  
}
