import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  obs:Observable<object>
  datiSalvati:object;
  constructor(public http: HttpClient)

  {

  }

  pressami()
  {
    this.obs = this.http.get("percorso delle api")
    this.obs.subscribe(this.leggiDati);
  }

  leggiDati = (dati:object) =>{this.datiSalvati = dati}
}
