import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {
  AirCraftArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  modelName = "";
  serialNumber = "";
  registrationNumber = "";
  registrationStatus = "";
  registrationDate = "";

  constructor(private http: HttpClient) { }

  getAirCrafts()
  {
    return this.http
    .get("https://localhost:7195/api/AirCraft/GetAirCraft").subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.AirCraftArray = resultData;
    });
  }

  getAirCraft(airCraftId: any)
  {
    return this.http.get("https://localhost:7195/api/AirCraft/GetAirCraft"+ "/"+ airCraftId.id)
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
 
    this.http.post("https://localhost:7195/api/AirCraft/AddAirCraft",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
        this.getAirCrafts();
    });
  }

  delete(airCraftId: any)
  {
    this.http.delete("https://localhost:7195/api/AirCraft/DeleteAirCraft"+ "/"+ airCraftId.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getAirCrafts();
    });
  }
}
