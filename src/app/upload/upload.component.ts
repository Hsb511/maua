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
    const files = this.getFiles();
    const index = files.indexOf(file, 0);
    files.splice(index, 1);
  }

  deleteAllFiles() {
    const files = this.getFiles();
    files.splice(0, files.length);
  }

  upload() {
    const files = this.getFiles();
    // TODO APPELER LE SERVICE D'UPLOAD
    console.log(files);
  }

  private getFiles() : Array<File> {
    var files = [];
    if (this.myFileUploadQueue instanceof MatFileUploadQueueComponent) {
      files = this.myFileUploadQueue.files;
    }
    return files;
  }
}
