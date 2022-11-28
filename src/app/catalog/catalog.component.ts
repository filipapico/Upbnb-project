import {Component, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {House} from "../interfaces";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  houses: House[] = [];

  constructor(private upbnbService: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnbService.getHouses().subscribe((houses) => {
      this.houses = <House[]>houses.data;
    })
  }
}
