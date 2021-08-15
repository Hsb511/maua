import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html'
})
export class LoadingModalComponent { 
  @ViewChild('modalBody') modalBody?: ElementRef;

  constructor(private renderer: Renderer2) { }

  openModal() {
    if (this.modalBody != null) {
      this.renderer.setStyle(this.modalBody.nativeElement.children[0], "display", "block");
      this.renderer.setStyle(this.modalBody.nativeElement.children[1], "display", "none");
      this.renderer.setStyle(this.modalBody.nativeElement.children[2], "display", "block");
      this.renderer.setStyle(this.modalBody.nativeElement.children[3], "display", "none");
    }
  }

  closeModal() {
    if (this.modalBody != null) {
      this.renderer.setStyle(this.modalBody.nativeElement.children[0], "display", "none");
      this.renderer.setStyle(this.modalBody.nativeElement.children[1], "display", "block");
      this.renderer.setStyle(this.modalBody.nativeElement.children[2], "display", "none");
      this.renderer.setStyle(this.modalBody.nativeElement.children[3], "display", "block");
    }
  }
}
