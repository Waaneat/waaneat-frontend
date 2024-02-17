import { Component } from '@angular/core';
import {faHome , faGear , faRightFromBracket , faUser , faEdit , faEnvelope , faPhone , faClock , faAdd , faBars , faClose , faShop} from '@fortawesome/free-solid-svg-icons'
import { AddDishComponent } from '../add-dish/add-dish.component';
import { MatDialog } from '@angular/material/dialog';
import { EditDishComponent } from '../edit-dish/edit-dish.component';
import { EditInfoComponent } from '../edit-info/edit-info.component';
import { EditDescComponent } from '../edit-desc/edit-desc.component';
import { EditBackgroundComponent } from '../edit-background/edit-background.component';

@Component({
  selector: 'app-index-seller',
  templateUrl: './index-seller.component.html',
  styleUrl: './index-seller.component.scss'
})
export class IndexSellerComponent {
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
  isMenuActivated = false;
  activeTab: string = 'dashboard'; // Variable pour suivre l'onglet actif

  constructor( 
    private dialog:MatDialog,
  ){}
  
  toggleMenuActivation() {
    this.isMenuActivated = !this.isMenuActivated;
    console.log("hello")
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    console.log(this.activeTab)
  }

  openDialogAddDish(){
    this.dialog.open(AddDishComponent,{
      width:"600px",
      height: "350px"
    })
  }

  openDialogEditDish(){
    this.dialog.open(EditDishComponent,{
      width:"600px",
      height: "350px"
    })
  }

  openDialogEditInfo(){
    this.dialog.open(EditInfoComponent,{
      width:"600px",
      height: "500px"
    })
  }

  openDialogEditDesc(){
    this.dialog.open(EditDescComponent,{
      width:"600px",
      height: "300px"
    })
  }

  openDialogEditBackground(){
    this.dialog.open(EditBackgroundComponent,{
      width:"600px",
      height: "320px"
    })
  }
}

