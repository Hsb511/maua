import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatFileUploadQueueComponent } from 'angular-material-fileupload';
import { FileService } from '../common/file.service';
import { LoadingModalComponent } from '../loading-modal/loading-modal.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @ViewChild('fileUploadQueue') myFileUploadQueue?: ElementRef;
  @ViewChild('appLoadingModal') appLoadingModal?: ElementRef;  

  constructor(private fileService: FileService) { }

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
    this.openModal();
    const files = this.getFiles();
    this.fileService.renameFiles(files).subscribe((newFiles) => {
      this.fileService.zipFiles(newFiles).then(() => this.closeModal());
    });
  }

  private getFiles() : Array<File> {
    var files = [];
    if (this.myFileUploadQueue instanceof MatFileUploadQueueComponent) {
      files = this.myFileUploadQueue.files;
    }
    return files;
  }

  private openModal() {
    if (this.appLoadingModal instanceof LoadingModalComponent) {
      this.appLoadingModal?.openModal();
    }
  }

  private closeModal() {
    if (this.appLoadingModal instanceof LoadingModalComponent) {
      this.appLoadingModal?.closeModal();
    }
  }
}
