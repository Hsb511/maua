import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MatFileUploadQueueComponent } from 'angular-material-fileupload';
import { LoadingModalComponent } from '../loading-modal/loading-modal.component';

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
    // TODO CREATE AND CALL UPLOAD SERVICE
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
