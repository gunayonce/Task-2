import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Blog';
  public lang = 'az';

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('az');
    }
    switchLanguage(language: string) {
        this.translate.use(language);
        this.lang = this.translate.currentLang;
        console.log(this.lang);
    }
}
