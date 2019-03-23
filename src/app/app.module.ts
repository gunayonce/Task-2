import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import {WeatherService} from './weather.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const appRoutes: Routes = [
    {path: '', component: BlogComponent},
    {path: 'blog-details/:id', component: BlogDetailsComponent},
    {path: 'blog', component: BlogComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    SidebarComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
