import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private service: CompanyService) { }
  company !: Company[];
  editForm !: FormGroup;
  submitted = false;
  ngOnInit(): void {
    let Id = window.localStorage.getItem("Id");
    alert(Id)
    if(!Id){
      alert("Invalid Action");
      this.router.navigate(['/get-company']);
    }
    else{
      this.editForm = this.formBuilder.group({
        id : [Math.floor(Math.random()*10)+ (new Date()).getTime()],
        name : ['', [Validators.required, Validators.minLength(8)]],
        email: ['', [Validators.required, Validators.email ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        address: ['', Validators.required],
        totalEmployees: ['', Validators.required],
        totalBranch: ['', Validators.required],
        isActive: ['', Validators.required]
      });
    }
    this.service.getCompanyById(Number(Id)).subscribe(
      res => { 
        console.log(res);
        this.editForm.setValue(res);
      }
    )
  }
  get registerFormControl() {
    return this.editForm.controls;
  }
  onSubmit()
  { 
      debugger
      this.service.UpdateCompany(this.editForm.value).subscribe(
        res => {
          console.log(this.editForm.value)
          alert(this.editForm.value);
          alert("Update Success");
          this.router.navigate(['/get-company']);
        }
      );
    
  }

}
