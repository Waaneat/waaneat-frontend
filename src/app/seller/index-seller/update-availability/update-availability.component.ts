import { Component, Input } from '@angular/core';
import { IndexSellerService } from '../services/index-seller.service';
import { Restaurant } from '../../../../shared/Restaurant';

@Component({
  selector: 'app-update-availability',
  templateUrl: './update-availability.component.html',
  styleUrl: './update-availability.component.scss'
})
export class UpdateAvailabilityComponent {
  @Input() restoDatas = {
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
  constructor(
    private _indexService: IndexSellerService
  ){
    console.log("isavai",this.restoDatas.isAvailable)
  }



  onUpdateAvailability(event: any){
    event.preventDefault();
    this.restoDatas.isAvailable = event.target.checked;
    
    const {availability}:any = this.restoDatas.isAvailable

    this._indexService.updateAvailability(this.restoDatas.id , availability).subscribe(
      (data) => {
        console.log("modifier")
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
}
