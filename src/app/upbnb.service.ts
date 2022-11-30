import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {House, Houses, Features, Host, Photos, Reviews, Reservations} from "./interfaces";

const SOURCE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";

@Injectable({
  providedIn: 'root'
})
export class UpbnbService {
  constructor(private http: HttpClient) {
  }

  getHouses() {
    return this.http.get<Houses>(SOURCE_URL + "/casas"); //<Houses> está a dizer que a informação que vem do URL tem o formato definido no interface Houses
  }

  getCurrentReservations(){
    return this.http.get<Reservations>(SOURCE_URL + "/casas/current");
  }

  getPastReservations(){
    return this.http.get<Reservations>(SOURCE_URL + "/casas/past");
  }

  getDetails(id: number) {
    return this.http.get<House>(SOURCE_URL + "/casas/" + id);
  }

  getHost(id: number) {
    return this.http.get<Host>(SOURCE_URL + "/casas/" + id + "/host")
  }

  getPhotos(id: number) {
    return this.http.get<Photos>(SOURCE_URL + "/casas/" + id + "/photos")
  }

  getReviews(id: number) {
    return this.http.get<Reviews>(SOURCE_URL + "/casas/" + id + "/reviews")
  }

  getFeatures(id:number) {
    return this.http.get<Features>(SOURCE_URL + "/casas/" + id + "/features")
  }

}
