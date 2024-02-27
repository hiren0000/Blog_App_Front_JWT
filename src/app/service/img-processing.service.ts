import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandler } from '../interfaces/FileHandler';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ImgProcessingService {

  constructor(private sanitizer:DomSanitizer) { }

  public creatImages(post: Post)
  {
    const postImages: any[] = post.postImages;

    const postImagesToFileHandle : FileHandler[] = [];

    for(let i = 0; i < postImages.length; i++)
    {
      const imageFileData = postImages[i];
      const imageBlob = this.dataURItoBlob(imageFileData.imgByte, imageFileData.imageType);

      const imgFile = new File([imageBlob], imageFileData.imageName, {type: imageFileData.imageType});

      const finalImgFileHandler:FileHandler = 
      {
        file:imgFile,
        url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imgFile)),
      };

      postImagesToFileHandle.push(finalImgFileHandler);
    }

    post.postImages = postImagesToFileHandle;
    return post;
   
  }

  public dataURItoBlob(picBytes:any, imageType:any)
  {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i=0; i<byteString.length; i++)
    {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], {type:imageType});
    return blob;

  }
}
