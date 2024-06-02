import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { FormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';



@NgModule({
  declarations: [
    HotelsComponent,
    HotelListComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),

  ]
})
export class HotelsModule { }
