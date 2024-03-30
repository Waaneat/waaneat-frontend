import { Component, OnInit } from '@angular/core';
import {faHome , faGear , faRightFromBracket , faUser , faEdit , faEnvelope , faPhone , faClock , faAdd , faBars , faClose , faShop , faTrash} from '@fortawesome/free-solid-svg-icons'
import { MatDialog } from '@angular/material/dialog';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { EditBackgroundComponent } from './edit-background/edit-background.component';
import { Dish } from '../../../shared/Dish';
import { IndexSellerService } from './services/index-seller.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Restaurant } from '../../../shared/Restaurant';
import { User } from '../../../shared/User';
import { StorageService } from '../../services/storage.service';
import { AddDishDialogComponent } from '../dialogs/add-dish-dialog/add-dish-dialog.component';
import { UpdateSellerInformationComponent } from './update-seller-information/update-seller-information.component';
import { UpdateRestoDescComponent } from './update-resto-desc/update-resto-desc.component';
import { AuthenticationService } from '../../authentication/authentication.service';


@Component({
  selector: 'app-index-seller',
  templateUrl: './index-seller.component.html',
  styleUrl: './index-seller.component.scss'
})
export class IndexSellerComponent implements OnInit{
  faHome = faHome
  faGear = faGear
  faRightFromBracket = faRightFromBracket
  faUser = faUser
  faEdit = faEdit
  faEnvelope = faEnvelope
  faPhone = faPhone
  faClock = faClock
  faAdd = faAdd
  faBars = faBars
  faClose = faClose
  faShop = faShop
  faTrash = faTrash
  isMenuActivated = false;
  activeTab: string = 'dashboard'; // Variable pour suivre l'onglet actif

  dishes:Dish[] = [];
  dish: Dish | null = null;
  restaurant: Restaurant | null = null
  

  constructor( 
    private dialog:MatDialog,
    private _indexService: IndexSellerService,
    private storageService: StorageService,
    private authService:AuthenticationService
  ){
    
  }

  ngOnInit(): void {
    
    this.getDishesList();
    this._indexService.getDishesList()

    this.getRestaurantData();
    if (this.dish && this.dish.id) {
      this.getDish(this.dish.id);
    }
    
  }

  

  getDish(id: string): Observable<Dish> {
    return this._indexService.getDish(id).pipe(
      map((data: Dish) => {
        this.dish = data;
        return data;
      }),
      catchError((error: any) => {
        alert(error.message);
        throw error;
      })
    );
  }

  noDishesMessage = ""

  getDishesList() {
    this._indexService.dish$.subscribe((dishesData) => {
      console.log(dishesData)
      this.dishes = dishesData;
    });
  }

  restoData = {
    id:"",
    restoName:"",
    username:"",
    email:"",
    tel:"",
    restoDesc:"",
    hourStart:"",
    hourEnd:"",
    isAvailable:false
  }
  getRestaurantData() {
  
    this._indexService.getRestaurantData().subscribe(
      (data:any)=>{
        
        this.restoData = data.callback.data;
        console.log("this:",this.restoData)
        
      },
      (err : any) => {
        alert(err.error.callback)
      }
    );
  }
  
  toggleMenuActivation() {
    this.isMenuActivated = !this.isMenuActivated;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    if(tab=="deconnexion"){
      this.authService.logoutSeller();
    }
  }

  openDialogAddDish(){
    this.dialog.open(AddDishDialogComponent,{
      width:"600px",
      height: "450px",
      data: {
        dishes: this.dishes // Passer la variable dishes au composant AddDishComponent
      }
    })
  }

  openDialogEditDish(id: string) {
    this.getDish(id).subscribe((dish: any) => {
      console.log("this is dish",dish.callback)
      // Une fois que les données du plat sont récupérées, ouvrez la boîte de dialogue
      this.dialog.open(EditDishComponent, {
        width: "600px",
        height: "450px",
        data: dish.callback // Passer les données du plat au composant de dialogue
      });
    },
    (error: any) => {
      console.error("Error fetching dish:", error);
      // Gérer l'erreur ici
    });
  }

  openDialogEditInfo(){
    console.log("yep:",this.restoData)
    this.dialog.open(UpdateSellerInformationComponent,{
      width:"600px",
      height: "500px",
      data: this.restoData
    })
  }

  openDialogEditDesc(){
    this.dialog.open(UpdateRestoDescComponent,{
      width:"600px",
      height: "300px",
      data:this.restoData
    })
  }

  openDialogEditBackground(){
    this.dialog.open(EditBackgroundComponent,{
      width:"600px",
      height: "320px"
    })
  }
}

