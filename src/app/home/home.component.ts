import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY } from 'rxjs';
import { CustomAmmDialogComponent } from '../custom-amm-dialog/custom-amm-dialog.component';
import { DataService } from '../data.service';
import { NfcdialogComponent } from '../nfcdialog/nfcdialog.component';
import { QrdialogComponent } from '../qrdialog/qrdialog.component';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  

constructor(private dataService: DataService,public dialog: MatDialog) {}
  flipped = false;
  flip() {
    this.flipped = !this.flipped;
  }
  southAfricanPhoneNumberRegex = /^(\+27|0)[1-9][0-9]{8}$/;
  users:any[] = [
    {
        "firstName": "Bob",
        "lastName": "George",
        "email": "bob@email.com",
        "address": "24 Main Road",
        "cellNumber": "0123456789",
        "shortCode": "XXX12345",
		    "rating": 5,
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tincidunt venenatis. Phasellus tincidunt aliquam nibh mollis ullamcorper. Integer a ipsum at lacus mollis tincidunt a vel ipsum. Nullam sed metus porta, sagittis magna quis, imperdiet ipsum. Phasellus faucibus mi quis feugiat placerat. Ut placerat, ipsum ac accumsan vehicula, dui nibh finibus augue, eget cursus sapien ex sed leo. Nulla convallis orci non arcu mollis ultrices. Vestibulum tempor non sapien ac sodales. Sed ac mauris ac libero dictum finibus. Mauris rhoncus neque ut bibendum viverra. Mauris a fringilla mauris, ut bibendum tortor. Mauris euismod iaculis enim mattis rutrum. Vivamus suscipit massa placerat, hendrerit metus ut, consequat ex. Vestibulum vitae commodo nisi. Nullam pellentesque sollicitudin lacus ac rhoncus."
    },
    {
        "firstName": "Alice",
        "lastName": "Burger",
        "email": "alice@email.com",
        "address": "256 Time Ave",
        "cellNumber": "0987654321",
        "shortCode": "XXX12345",
        "rating": 5,
        "bio": "Donec posuere tempor euismod. Nulla rutrum velit eu leo ultrices, vitae eleifend nisi porta. Etiam finibus maximus nunc, consectetur efficitur tortor eleifend quis. Integer tincidunt elit at erat viverra aliquam. Quisque a nisi metus. Donec scelerisque ligula ante, non aliquet ligula accumsan nec. Proin laoreet ante id massa eleifend dapibus. Duis tempus metus elit, sit amet maximus tortor dictum quis. Morbi sit amet gravida neque, sit amet luctus eros. Integer ultrices ut velit non gravida. Etiam laoreet libero et est rhoncus, a ultricies leo euismod."
    },
    {
        "firstName": "Trudy",
        "lastName": "Turner",
        "email": "trudy@email.com",
        "address": "16 Park Lane",
        "cellNumber": "0654987321",
        "shortCode": "XXX12345",
		    "rating": 4,
        "bio": "Aenean nec augue neque. Vivamus neque enim, pretium at mollis feugiat, luctus id purus. Phasellus sagittis commodo diam, ut eleifend tellus pulvinar id. Quisque id mi porttitor, dapibus justo sed, consectetur libero. Nunc feugiat massa non urna mollis luctus. Morbi tincidunt quam nec quam malesuada vulputate. Quisque aliquet lacus nisi, ac rhoncus ipsum pellentesque nec."
    },
    {
        "firstName": "Pieter",
        "lastName": "Scott",
        "email": "pieter@email.com",
        "address": "512 Town Way",
        "cellNumber": "0129874563",
        "shortCode": "XXX12345",
		    "rating": 5,
        "bio": "Suspendisse potenti. Nulla facilisi. Cras eu tempor magna. Nunc egestas, magna sed commodo interdum, elit lacus ullamcorper massa, vitae aliquet lectus diam vitae lorem. Maecenas eu accumsan odio, et lacinia orci. Pellentesque tempor diam justo, eu dictum leo mollis id. Proin iaculis neque et libero tristique, sit amet ultricies mauris maximus. Nam id velit hendrerit, ornare mi at, imperdiet ligula. Donec iaculis, elit a consectetur sollicitudin, magna urna interdum dui, id tincidunt nisl lorem id orci."
    }
  ];

  loggedInUser:any =     {
      "firstName": "Douglas",
      "lastName": "Wait",
      "email": "dw@email.com",
      "address": "24 Main Road",
      "cellNumber": "0123456789",
      "shortCode": "XXX12345",
      "rating": 5,
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tincidunt venenatis. Phasellus tincidunt aliquam nibh mollis ullamcorper. Integer a ipsum at lacus mollis tincidunt a vel ipsum. Nullam sed metus porta, sagittis magna quis, imperdiet ipsum. Phasellus faucibus mi quis feugiat placerat. Ut placerat, ipsum ac accumsan vehicula, dui nibh finibus augue, eget cursus sapien ex sed leo. Nulla convallis orci non arcu mollis ultrices. Vestibulum tempor non sapien ac sodales. Sed ac mauris ac libero dictum finibus. Mauris rhoncus neque ut bibendum viverra. Mauris a fringilla mauris, ut bibendum tortor. Mauris euismod iaculis enim mattis rutrum. Vivamus suscipit massa placerat, hendrerit metus ut, consequat ex. Vestibulum vitae commodo nisi. Nullam pellentesque sollicitudin lacus ac rhoncus."
  };



  ngOnInit(){
    ////dont remove dis is net iriterend om me te werk
    // setTimeout(() => {
    //   document.getElementById('mycard')?.click();
    // }, 500);
    // setTimeout(() => {
    //   document.getElementById('mycard')?.click();
    // }, 1500);
    // this.getLoggedUser();
  

  }
  getLoggedUser(){
    this.dataService.getLoggedUserInfo().subscribe(result => {
     //get object from backend
      return;
    });
  }

  searchedUser:any  = '';

  nouserfound:boolean = false;
  isValidNr:boolean = false;
  searchVal:string='';
  searchContact(){
    
    this.searchedUser = '';
    this.nouserfound = false;
    this.isValidNr = false; 

    this.searchVal = (document.getElementById("search") as HTMLInputElement).value as string;
    
    if(this.searchVal == '')
      return;

    // this.dataService.getUsersearch(searchVal as string).subscribe((result: any) =>{      
    //   console.log(result);
   
    // });
    

    for(let item of this.users){/////net vir dev, die moet net gereturn word met regte obj/// user found
      if(item.cellNumber == this.searchVal){
        this.searchedUser = <User>item; 
        this.isValidNr = true;
      }
    }
    if( this.searchedUser == ''){////no user found
      this.nouserfound = true;
      this.isValidNr = this.southAfricanPhoneNumberRegex.test(this.searchVal);
    }

  }
  removeSearchContact(){
  
    this.searchedUser = '';
    this.nouserfound = false;
    this.isValidNr = false; 
  }

  customAmm:any=null;

  openCustomAmmDialog(): void {
    let dialogRef = this.dialog.open(CustomAmmDialogComponent, {
      width: 'auto'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.customAmm = result;      
    });
  }

  openQRDialog(): void {
    let dialogRef = this.dialog.open(QrdialogComponent, {
      width: '420px',
      maxWidth: '90vw'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.customAmm = result;      
    });
  }
  openNFCDialog(): void {
    let dialogRef = this.dialog.open(NfcdialogComponent, {
      width: '420px',
      maxWidth: '90vw'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.customAmm = result;      
    });
  }

 
}
