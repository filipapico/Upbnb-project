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
  searchHouses: House[] = [];
  pageNumber: number = 2

  constructor(private upbnbService: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnbService.getHouses().subscribe((houses) => {
      this.houses = houses.data;
    })
  }

  changePage(pageNumber: number) {
    if (this.pageNumber < 8) {
      this.upbnbService.getMorePages(this.pageNumber).subscribe((searchHouses) => {
        this.houses = searchHouses.data;
      })
      this.pageNumber++;
    }

  }

  changeValue(e: any) {
    const value = e.target.value;
    this.upbnbService.getSearchHouses(value, this.pageNumber).subscribe((searchHouses) => {
      this.houses = searchHouses.data;
    })
  }
}
