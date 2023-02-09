import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoaderComponent} from "../../components/loader/loader.component";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private dialogRef: MatDialogRef<LoaderComponent>;

  constructor(public dialog: MatDialog) {
  }

  public show(): void {
    this.dialogRef = this.dialog.open(LoaderComponent, {
      id: 'loading',
      hasBackdrop: true,
      disableClose: true,
    });
  }

  public hide(): void {
    this.dialogRef.close();
  }
}
