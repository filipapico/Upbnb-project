import {Component, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {Reservations} from "../interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  reservations!: Reservations
  pastReservations!: Reservations

  constructor(private upbnbService: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnbService.getCurrentReservations().subscribe((reservations) => {
      this.reservations = reservations
      //console.log(this.reservations)
    })

    this.upbnbService.getPastReservations().subscribe((pastReservations:Reservations)=> {
      this.pastReservations = pastReservations
      console.log("past",this.pastReservations)
    })

  }


}

