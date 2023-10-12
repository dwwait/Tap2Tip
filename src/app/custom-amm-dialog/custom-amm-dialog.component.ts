import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-custom-amm-dialog',
  templateUrl: './custom-amm-dialog.component.html',
  styleUrls: ['./custom-amm-dialog.component.css']
})
export class CustomAmmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomAmmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private dataService: DataService) { }

    onCancel(): void {
      this.dialogRef.close();
    }
    enter(){      
      this.dialogRef.close(this.customForm.value.ammount);
    }

    customForm = new FormGroup({     
      ammount: new FormControl("",[
        Validators.required,
        Validators.pattern("[0-9]*")])
    });
    get Ammount(): FormControl{
      return this.customForm.get("ammount") as FormControl;
    }


}
