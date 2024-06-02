import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
    city:string = "";
	selDate!:Date[];
	selRoomsopt:string="";
	selRooms:string="";
	checkInDate:any;
	checkOutDate:any;
    roomsOptArr:string[] = [" 1 Rooms 2adult"," 2 Rooms 2adult"," 4 Rooms 2adult"]

	searchHotel(){
		console.log("city",this.city)
		console.log("date",this.selDate)
	}

	dataChange(){
      if(this.selDate && this.selDate.length == 2){
		this.checkInDate = this.selDate[0];
		this.checkOutDate = this.selDate[1]
		console.log(this.checkInDate);
		console.log(this.checkOutDate)
	  }
	}
   
	searchRooms(option:string){
     this.selRooms = option;
	 console.log(this.selRooms)
	}
}
