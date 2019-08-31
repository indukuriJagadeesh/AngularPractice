import { Component, OnInit ,VERSION  } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';

const uploadURL = 'http://localhost:8080/uploadFile';
const uploadURLForMultiple = 'http://localhost:8080/uploadMultipleFiles';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})


export class SecondComponent implements OnInit {

  percentDone: number;
  uploadSuccess: boolean;
  version = VERSION

  constructor(
    private http: HttpClient,
    ) { }

  
  title = 'Upload a File';

  upload(files: File[]){
    //pick from one of the 4 styles of file uploads below
    //this.uploadAndProgress(files);
    this.uploadAndProgressForMultiple(files);
  }

  urls = [];
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result); 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  uploadAndProgressForMultiple(files: File[]){
    console.log('calling>>'+files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('files',f))
    
    this.http.post(uploadURLForMultiple, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }

  uploadAndProgress(files: File[]){
    console.log('calling>>'+files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file',f))
    
    this.http.post(uploadURL, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }

  //public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'photo'});

  ngOnInit() {
    /*
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };*/
 }

}


