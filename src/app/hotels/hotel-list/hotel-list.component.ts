import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
searchHotelObj:any={
    city:null,
    checkIn:null,
    checkOut:null,
    rooms:null
}

hotelList:any

constructor(private activatedRoute:ActivatedRoute, private http:HttpService){
  this.searchHotelObj.city = this.activatedRoute.snapshot.queryParamMap.get('city');
  this.searchHotelObj.checkIn = this.activatedRoute.snapshot.queryParamMap.get('checkIn');
  this.searchHotelObj.checkOut = this.activatedRoute.snapshot.queryParamMap.get('checkout');
  this.searchHotelObj.rooms = this.activatedRoute.snapshot.queryParamMap.get('rooms')

  console.log(this.searchHotelObj)

}

ngOnInit(){
  let endpoint = 'searchHotels';
  this.http.getHotelDataFromServer(endpoint,this.searchHotelObj).subscribe((el:any)=>{
    if(el && el.response && el.response.personalizedSections){
      this.hotelList = el.response.personalizedSections[0].hotels
      console.log('hotels',this.hotelList)
    }
  })
}
}
