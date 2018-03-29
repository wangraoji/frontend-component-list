import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    production: boolean;

    ngOnInit(){
        this.production = environment.production;
    }
}
