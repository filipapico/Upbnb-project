import {Component, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {House} from "../interfaces";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: House[] = [];
  favoriteCountries: { [key: string]: House[] } = {}
  favoriteCountriesList: string[] = []

  //Attempt to create alternative display for favorites and catalog
  favoriteType = true

  constructor(private upbnbService: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnbService.getFavorites().subscribe((favHouses) => {
      this.favorites = favHouses.data;
      //console.log("list of favorite houses", this.favorites)

      //Create a new object with keys==countries and values==array of favorite house(s) per country
      favHouses.data.forEach(house => {
        let country = house.country;
        if (!this.favoriteCountries[country]) {
          this.favoriteCountries[country] = [];
        }
        this.favoriteCountries[country].push(house)
      })

      //Add to this new array one new element/country (house(s) added to favorites)
      this.favoriteCountriesList = Object.keys(this.favoriteCountries)
    })

  }
}
