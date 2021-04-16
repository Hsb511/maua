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
  loadingModal?: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  deleteFile(file: File) {
    const files = this.getFiles();
    const index = files.indexOf(file, 0);
    files.splice(index, 1);
  }

  deleteAllFiles() {
    const files = this.getFiles();
    files.splice(0, files.length);
  }

  upload(loadingModal: any) {
    const files = this.getFiles();
    // TODO CREATE AND CALL UPLOAD SERVICE
    console.log(files);
    this.openLoadingModal(loadingModal);
  }

  private getFiles() : Array<File> {
    var files = [];
    if (this.myFileUploadQueue instanceof MatFileUploadQueueComponent) {
      files = this.myFileUploadQueue.files;
    }
    return files;
  }

  private openLoadingModal(content: any) {
    this.loadingModal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: "dialog-centered"});
    this.loadingModal.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  // TODO CALL THIS METHOD WHEN UPLOAD SERVICE IS DONE
  private closeLoadingModal() {
    this.loadingModal?.close();
  }
}
