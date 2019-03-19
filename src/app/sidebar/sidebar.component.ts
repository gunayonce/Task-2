import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  response :any;

  constructor(private http: HttpClient) {
    this.getWeather();
  }

  getWeather(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=baku&appid=1c706bf928d42fb1961906671f69220c&units=metric&lang=ru,en,az')
        .subscribe((response)=>{
          this.response = response;
          console.log(this.response);
        });
  }

  ngOnInit() {
  }

}
