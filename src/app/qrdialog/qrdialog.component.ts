import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qrdialog',
  templateUrl: './qrdialog.component.html',
  styleUrls: ['./qrdialog.component.css']
})
export class QrdialogComponent implements OnInit{
  
  constructor(
    public dialogRef: MatDialogRef<QrdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dataService: DataService) { }

    output:any = '';
    
    ngOnInit() {
        
    }
    onCodeResult($event:any){      
      console.log('This works on success?');
    }
    onEvent($event:any){
      this.output = $event;
      console.log($event);
    }
    onCancel(): void {
      this.dialogRef.close();
    }
    onError($event:any){
      console.log($event);
    }
}
