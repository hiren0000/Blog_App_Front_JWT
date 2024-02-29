import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandler } from '../interfaces/FileHandler';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  

  @Output() files: EventEmitter<FileHandler> = new EventEmitter();

  @HostBinding("style.background")
  private background = "#eee";

  constructor(private sanitizer:DomSanitizer) { }

  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent)
  {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt: DragEvent)
  {
    evt.preventDefault()
    evt.stopPropagation();
    this.background = "#eee";
  }

  @HostListener("drop", ["$event"])
  public onDrop(evt: DragEvent)
  {
    evt.preventDefault()
    evt.stopPropagation();
    this.background = "#eee";

    const evntfile = evt.dataTransfer!.files[0];
    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(evntfile));

    let fileHandle:FileHandler = 
    {
      file: evntfile,
      url: url,
    }

    this.files.emit(fileHandle);

  }

}
