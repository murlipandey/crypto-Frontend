import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complain-box',
  templateUrl: './complain-box.component.html',
  styleUrls: ['./complain-box.component.css']
})
export class ComplainBoxComponent implements OnInit {
  public imagePath;
  urls: any[] = [];
  public message: string;
  config: any;
  collection = { count: 20, data: [] };
  searchText;

 constructor(private http : HttpClient) {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "1526" + (i + 1),
          status: "In progress"
        }
      );
    }

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  preview(event: any) {
    if (event.target.files === 0) {

      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var filelength = event.target.files.length;
    for (let i = 0; i < filelength; i++) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.urls.push(event.target.result);
      }
      reader.readAsDataURL(event.target.files[i]);
    }
  }

search(){
    let headers = new HttpHeaders();
    const url = "http://localhost:8001/complaint/search?userId=7878"
    return this.http.get(url)
  }
 

  pageChanged(event) {
    this.config.currentPage = event;
  }




  ngOnInit() {
  }

  public Submit(): void {

    alert("your complaint successfully submitted");

  }

  public uploadImage() {

  }
}

