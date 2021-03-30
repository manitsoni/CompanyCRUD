
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company, Branch } from '../company'
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {
  companyData !: Observable<Company[]>;
  ngOnInit(): void {
    this.getData();
    window.localStorage.removeItem("Id");
    console.log(this.companyData);
  }
  constructor(private formBuilder: FormBuilder, private router:Router, private service : CompanyService) { 
    this.getData();
  }
  getData(){
    this.companyData = this.service.getData();
  }
  Edit(Id : number){
    window.localStorage.removeItem("Id");
    window.localStorage.setItem("Id",Id.toString());
    this.router.navigate(['/edit-company'])
  }
  Delete(Id : number){
    this.service.delete(Id).subscribe(
      res =>{
        alert("Delete Success");
        this.getData();
      }
    );
    
  }

}
