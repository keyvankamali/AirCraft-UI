import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-air-craft',
  templateUrl: 'registeration.component.html',
  styles: [`
  .hero {
    background-image: url('/assets/background.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
`]
})

export class AddAirCraftComponent{
[x: string]: any;
  AirCraftArray : any[] = [];
  isResultLoaded = false;

  modelName = "";
  serialNumber = "";
  registrationNumber = "";
  registrationStatus = "";
  registrationDate = "";

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http
  }

  register()
  {
 
    let bodyData = {
      "modelName" : this.modelName,
      "serialNumber" : this.serialNumber,
      "registrationNumber" : this.registrationNumber,
      "registrationStatus" : this.registrationStatus,
      "registrationDate" : this.registrationDate,
    
    };
 
    // this.http.post("https://localhost:7195/api/AirCarft/AddStudent",bodyData).subscribe((resultData: any)=>
    // {
    //   console.log(resultData);
    //   alert("Student Registered Successfully")
    // });
  }

  registrationForm(){
    alert('The New Air Craft submitted successfully')

  }
}