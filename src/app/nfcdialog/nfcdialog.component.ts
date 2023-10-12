import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nfcdialog',
  templateUrl: './nfcdialog.component.html',
  styleUrls: ['./nfcdialog.component.css']
})
export class NfcdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NfcdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dataService: DataService) { }


    onCancel(): void {
      this.dialogRef.close();
    }
}
