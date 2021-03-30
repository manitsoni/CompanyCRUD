import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  Url='';
  header :any;
  constructor(private http : HttpClient) {
    this.Url = "http://localhost:3000";
	  const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  Create(data:Company)
  {
    debugger;
    console.log(data);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.post<Company[]>(this.Url + '/company' , data,  this.header);
  }
  getData(){
    return this.http.get<Company[]>(this.Url + '/company');
  }
  delete(id : number){
    alert(id);
    return this.http.delete<Company>(this.Url + '/company/' + id, this.header)
    debugger

  }
  getCompanyById(Id : number){
    return this.http.get<Company[]>(this.Url + '/company/' + Id);
  }
  UpdateCompany(data : Company){
    return this.http.put<Company>(this.Url+'/company/'+data.id,data);
  }
}
