import { Component, OnInit } from '@angular/core';
import {faScaleBalanced , faUser , faLocation , faLocationDot , faMagnifyingGlassLocation , faPhone , faUtensils , faStar , faBars , faLock , faHeart , faClose , faShop} from '@fortawesome/free-solid-svg-icons'
import { Restaurant } from '../../shared/Restaurant';
import { MatDialog } from '@angular/material/dialog';
import { IndexCustomerService } from './services/index-customer.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrl: './index-customer.component.scss'
})
export class IndexCustomerComponent implements OnInit{
  faScaleBalanced = faScaleBalanced
  faUser = faUser
  faLocation = faLocation
  faLocationDot = faLocationDot
  faMagnifyingGlassLocation = faMagnifyingGlassLocation
  faPhone = faPhone
  faUtensils = faUtensils
  faStar = faStar
  faBars = faBars
  faLock = faLock
  faHeart = faHeart
  faClose = faClose
  faShop = faShop
  isMenuOpen = true;
  restaurants:Restaurant[] = [];
  
  constructor(
    private dialog:MatDialog,
    private _indexService: IndexCustomerService,
    private _geolocationService: GeolocationService
  ){}

  ngOnInit(): void {
      this.onGetSomeResto();
      this.getLocation();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onGetSomeResto(){
    this._indexService.getSomeResto().subscribe(
      (datas:any)=>{
        this.restaurants = datas.callback;
      },
      (err : any) => {
        alert(err.error.callback)
      }
    );
  }

  getLocation(){
    this._geolocationService.getGeolocationService().then(resp=>{
      console.log(resp.lng," : ",resp.lat)
    })
  }
}
