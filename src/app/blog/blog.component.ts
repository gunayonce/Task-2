import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blog = [];

  constructor(private _blogService: BlogService, private translate: TranslateService ) {
  }

  ngOnInit() {
    this._blogService.getBlogData()
        .subscribe(data => this.blog = data);
  }

}
