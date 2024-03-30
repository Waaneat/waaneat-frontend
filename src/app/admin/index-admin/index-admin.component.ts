import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {faHome , faGear , faRightFromBracket , faUser , faEdit , faEnvelope , faPhone , faClock , faAdd , faBars , faClose , faShop , faTrash , faCaretDown , faSearch , faStore , faUsers , faUserGear} from '@fortawesome/free-solid-svg-icons'
import { EditDishComponent } from '../../seller/index-seller/edit-dish/edit-dish.component';
import { EditBackgroundComponent } from '../../seller/index-seller/edit-background/edit-background.component';
import { AddDishComponent } from '../../seller/index-seller/add-dish/add-dish.component';


@Component({
  selector: 'app-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrl: './index-admin.component.scss'
})
export class IndexAdminComponent {
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
  faCaretDown = faCaretDown
  faSearch = faSearch
  faStore = faStore
  faUsers = faUsers
  faUserGear = faUserGear

  isMenuActivated = false;
  activeTab: string = 'vendeurs'; // Variable pour suivre l'onglet actif

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

  // openDialogEditInfo(){
  //   this.dialog.open(EditInfoComponent,{
  //     width:"600px",
  //     height: "500px"
  //   })
  // }

  // openDialogEditDesc(){
  //   this.dialog.open(EditDescComponent,{
  //     width:"600px",
  //     height: "300px"
  //   })
  // }

  openDialogEditBackground(){
    this.dialog.open(EditBackgroundComponent,{
      width:"600px",
      height: "320px"
    })
  }
}
