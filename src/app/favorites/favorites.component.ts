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

  constructor(private upbnbService: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnbService.getFavorites().subscribe((favHouses) => {
      this.favorites = favHouses.data;
      console.log("listOfFavoriteHouses", this.favorites)

      favHouses.data.forEach(house => {
        let country = house.country;
        console.log(this.favoriteCountries);
        if (!this.favoriteCountries[country]) {
          this.favoriteCountries[country] = [];
        } else {
          this.favoriteCountries[country].push()
        }
      })


    })


  }

}
