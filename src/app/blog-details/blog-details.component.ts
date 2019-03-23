import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  public blog = [];
  public blogId;

  constructor(private _blogService: BlogService, private route: ActivatedRoute ) {}


  ngOnInit() {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.blogId = id;
      this._blogService.getBlogData()
          .subscribe(data => this.blog = data);
  }

}
