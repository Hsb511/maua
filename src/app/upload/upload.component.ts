import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatFileUploadQueueComponent } from 'angular-material-fileupload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @ViewChild('fileUploadQueue') myFileUploadQueue?: ElementRef;

  constructor() { }

  deleteFile(file: File) {
    if (this.myFileUploadQueue instanceof MatFileUploadQueueComponent) {
      const files = this.myFileUploadQueue.files;
      console.log(files);
      const index = files.indexOf(file, 0);
      files.splice(index, 1);
    }
  }
}
