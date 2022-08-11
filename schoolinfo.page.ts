import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolinfo',
  templateUrl: './schoolinfo.page.html',
  styleUrls: ['./schoolinfo.page.scss'],
})
export class SchoolinfoPage implements OnInit {
  TAMIL:any;
  ENGLISH:any;
  MATHS:any;
  PHYSICS:any;
  CHEMISTRY:any;
  Total:any;
 isShow=false;
 isShowT=false;
 isShowE=false;
 isShowM=false;
 isShowP=false;
 isShowC=false;
 
 StdName:string='';
 SAddress:string='';
 SCLName:string='';
 Total1: any;
 StdName1:any;
 SAddress1:any;
 SCLName1:any;


 isCLGShow=false;
  isShowCS=false;
  isShowENG=false;
  isShowMTS=false;
  isShowSS=false;
  isShowSC=false;
  CLGName: string='';
  CLGSAddress: string='';
  CLGStdName:string='';
  Total2: any;
  Total4: any;
  CLGName1: any;
  CLGSAddress1: any;
  CLGStdName1: any;
  ComputerSciences: any;
  Logic: any;
  Mathematics: any;
  Statistics: any;
  SystemsScience: any;

 
  constructor() { }

  ngOnInit() {
  }

colbtn=true;//Event START BUTTON COLOR
colbtn1=false;
clrchge(){
  if(this.colbtn1=true){
    this.colbtn=false;
  }}
  clrchge1(){
  if(this.colbtn=true){
    this.colbtn1=false;
  }
}  //Event END BUTTON COLOR
 

sum()
{

this.Total=( Number(this.TAMIL)+Number(this.ENGLISH)+Number(this.MATHS)+Number(this.PHYSICS)+Number(this.CHEMISTRY))
console.log("sum",this.Total);
}

show(){
this.isShow=!this.isShow;
}

showT(){
  this.isShowT=!this.isShowT;
  }
  showE(){
    this.isShowE=!this.isShowE;
    }
    showM(){
      this.isShowM=!this.isShowM;
      }
      showP(){
        this.isShowP=!this.isShowP;
        }
        showC(){
          this.isShowC=!this.isShowC;
          }

save()
{
 this.SCLName1;
 this.SAddress1;
 this.StdName1;
 this.Total1;

//  this.service.save().subscribe(Data => {
//   console.log(Data);
this.SCLName1=this.SCLName;
this.SAddress1=this.SAddress;
this.StdName1=this.StdName;
this.Total1=this.Total;

  console.log("mydata",this.SCLName1);
  console.log("mydata",this.SAddress1);
  console.log("mydata",this.StdName1);
  console.log("mydataTotal",this.Total1);
}



//COLLEGE 


sum2()
{

this.Total2=( Number(this.ComputerSciences)+Number(this.Logic)+Number(this.Mathematics)+Number(this.Statistics)+Number(this.SystemsScience))
console.log("sum",this.Total2);
}
CLGshow(){
  this.isCLGShow=!this.isCLGShow;
}


showCS(){
  this.isShowCS=!this.isShowCS;
  }
  showENG(){
    this.isShowENG=!this.isShowENG;
    }
    showMTS(){
      this.isShowMTS=!this.isShowMTS;
      }
      showSS(){
        this.isShowSS=!this.isShowSS;
        }
        showSC(){
          this.isShowSC=!this.isShowSC;
          }


          save1()
          {
           this.CLGName1;
           this.CLGSAddress1;
           this.CLGStdName1;
           this.Total4;
          
          //  this.service.save().subscribe(Data => {
          //   console.log(Data);
          this.CLGName1=this.CLGName;
          this.CLGSAddress1=this.CLGSAddress;
          this.CLGStdName1=this.CLGStdName;
          this.Total4=this.Total2;
          
            console.log("mydata",this.CLGName1);
            console.log("mydata",this.CLGSAddress1);
            console.log("mydata",this.CLGStdName1);
            console.log("mydataTotal",this.Total4);
          }
          



}
