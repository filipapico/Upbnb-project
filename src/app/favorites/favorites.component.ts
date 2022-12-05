import {Component, OnInit} from '@angular/core';
import {UpbnbService} from "../upbnb.service";
import {House} from "../interfaces";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: House[] = [];
  favoriteCountries: { [key: string]: House[] } = {}
  favoriteCountriesList: string[] = []

  constructor(private upbnbService: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnbService.getFavorites().subscribe((favHouses) => {
      this.favorites = favHouses.data;
      //console.log("list of favorite houses", this.favorites)

      favHouses.data.forEach(house => {
        let country = house.country;
        //console.log("obj fav countries",this.favoriteCountries);
        if (!this.favoriteCountries[country]) {
          this.favoriteCountries[country] = [];
          //console.log("empty list",this.favoriteCountries[country])
        }
        this.favoriteCountries[country].push(house)
        console.log("novo", this.favoriteCountries)
        console.log(Object.keys(this.favoriteCountries))
      })
      let favoriteCountriesList = Object.keys(this.favoriteCountries)
    })
  }
}
