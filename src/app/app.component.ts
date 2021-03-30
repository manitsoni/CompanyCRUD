import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CompanyCRUD';
  products: any = [];
  constructor(private httpClient: HttpClient){

  }
  ngOnInit(){
    this.httpClient.get("assets/db.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }
}
