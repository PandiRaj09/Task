import { Component, ViewChild,OnInit, Injectable } from '@angular/core';  
import {IonSlides } from '@ionic/angular';  
import { ModalController } from '@ionic/angular';
import { ModalPopoverPage } from '../../modal-popover/modal-popover.page';
import { ModalPopover1Page } from'../../modal-popover1/modal-popover1.page';

import{ HomeService } from'../../services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  modalDataResponse: any;//MODEL POPUP

  @ViewChild('slides', { static: true }) slider: IonSlides;  
  segment = 0;  
  selectedSection: any;
  sections: any;
  filterTerm:string;





  @Injectable({
    providedIn: 'root'
  })

  Data:any;
  transfer: any;
  fileOpener: any;
  filePlug: any;
  table: any;
  table1:any;
  constructor(public modalCtrl: ModalController,private Service:HomeService ) { }
  
  async initModal() { //MODEL POPUP START
    const modal = await this.modalCtrl.create({
      component: ModalPopoverPage,
      // componentProps: {
      //   'name': 'The Winter Soldier'
      // }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        // console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }
  
  isModalOpen = false;
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  } //MODEL POPUP END


  async initModal1() { //MODEL POPUP2 START
    const modal = await this.modalCtrl.create({
      component: ModalPopover1Page,
      // componentProps: {
      //   'name': 'The Winter Soldier'
      // }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        // console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }
  
  async segmentChanged(ev: any) {  //SEGMENT START
    await this.slider.slideTo(this.segment);  
  }  
  
  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }
  
  Segment(table){//data passing one segment to another
    this.table=table.id;
    this.table1=table.status;
    console.log(this.table);
    console.log('jobdata',table);
    console.log('jobdata',this.table1);
    this.segment=1;
  }
 
  segment0()
  {
    this.segment=0;
  }
  segment1()
  {
    this.segment=1;
  }
  
  segment2()
  {
    this.segment=2;
  }
  segment3()
  {
    this.segment=3;
  }


//   buttonClickHandler() {
//     this.selectedSection = this.sections.second;
// }
get(){
  
  this.Service.getdata().subscribe((data) => {
    this.Data = data;
    console.log("data",this.Data)
});
}
exportToExcel() {
  this.Service.exportToExcel(this.Data, 'TASK');
  }
 
  
//Event START TABLE ALTER
tab=true;
tap=true;

ALL(){
this.tab=true;
this.tap=true;
}
JOBNO(){
this.tab=true
this.tap=false;
}
MAWBNO(){
   this.tap=true
  this.tab=false;

}

//Event END ALTER TABLE


colbtn=false;//Event START BUTTON COLOR
colbtn1=true;
clrchge(){
  if(this.colbtn=true){
    this.colbtn1=false;
  }}
  clrchge1(){
  if(this.colbtn1=true){
    this.colbtn=false;
   
  }
}  //Event END BUTTON COLOR
 


ngOnInit() {
  // this.get1();
  }

 
}
