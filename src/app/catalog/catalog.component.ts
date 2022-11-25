import {Component, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  houses: House[] = [];

  constructor(private upbnb: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnb.getHouses().subscribe((houses: Houses) => {
      this.houses = <House[]>houses.data;
    })
  }
}
