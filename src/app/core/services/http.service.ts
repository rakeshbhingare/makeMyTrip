import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { end } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl:string = 'http://localhost:3000/';

httpheaders:HttpHeaders = new HttpHeaders({
  'content-type':'application/json'
})

  constructor(private http:HttpClient) { }

  // to get the data from backend we need to use the httpparms methods 
  getHotelDataFromServer(endpoint:string,obj:any){
let httpparams = new HttpParams()
                 .set('city',obj.city)
                 .set('checkIn',obj.checkIn)
                 .set('checkout',obj.checkOut)
                 .set('rooms',obj.rooms)

    const url = this.baseurl + endpoint;
    return this.http.get(url,{headers:this.httpheaders,params:httpparams} )
  }


  getDataFromServer(endpoint:string,obj:any){
   const url = this.baseurl + endpoint
   return this.http.get(url,{headers:this.httpheaders})
  }


}
