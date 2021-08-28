import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver'; 
import { forkJoin, Observable } from 'rxjs';
import { PlantnetService } from './plantnet.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private plantnetService: PlantnetService) { }

  public renameFiles(files: File[]): Observable<[File]>{
    const newFiles: File[] = files.slice();
    return forkJoin<File>(this.plantnetService.identifyPlants(newFiles));
  }

  public zipFiles(files: File[]): Promise<void> {
    var zip = new JSZip();
    const zipName = "zipitizip.zip";
    files.forEach((file) => {
      console.log(file);
      zip.file(file.name + '.' + file.type.split('/')[1], file)
    });
    return zip.generateAsync({ type: 'blob' }).then((content) => {  
      if (content) {  
        FileSaver.saveAs(content, zipName);  
      }  
    });  
  }
}
