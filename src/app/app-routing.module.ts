import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { GetCompanyComponent } from './get-company/get-company.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo :'get-copmany',
    pathMatch:'full'
  },{
    path:'get-company',
    component:GetCompanyComponent
  },{
    path:'nav-bar',
    component:NavBarComponent
  },{
    path:'add-company',
    component:AddCompanyComponent
  },{
    path:'edit-company',
    component:EditCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
