import {Component, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  houses: House[] = [];

  constructor(private upbnb: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnb.getHouses().subscribe((houses: Houses) => {
      this.houses = <House[]>houses.data;
    })
  }

  //DUVIDA - por que razão não dá para usar o interface Houses

}
