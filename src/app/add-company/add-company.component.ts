import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company, Branch } from '../company'
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  submitted = false;

  companyForm !: FormGroup;
  company !: Company[];
 

  constructor(private formBuilder: FormBuilder, private router:Router, private service : CompanyService) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      id : [Math.floor(Math.random()*10)+ (new Date()).getTime()],
      name : ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      address: ['', Validators.required],
      totalEmployees: ['', Validators.required],
      totalBranch: ['', Validators.required],
      isActive: ['', Validators.required],
      branch : this.formBuilder.array([this.formBuilder.group({id : Math.floor(Math.random()*10)+ (new Date()).getTime() , name: '', address: ''})])
    });
  }

  get registerFormControl() {
    return this.companyForm.controls;
  }
  onSubmit()
  { 
    debugger
    this.submitted = true;
    if(this.companyForm.invalid)
    {
      debugger
      alert("Not Submitted")
      return;

    }
    else 
    {
      debugger
      this.service.Create(this.companyForm.value).subscribe(
        res => {
          this.router.navigate(['/get-company']);
        }
      );
    }
  }

  get Branch() {
    return this.companyForm.get('branch') as FormArray;
  }
  addNewBranch()
  {
    this.Branch.push(this.formBuilder.group({id : '', name: '', address: ''}))
  }

  deleteBranch(index : number) {
    this.Branch.removeAt(index);
  }

}
