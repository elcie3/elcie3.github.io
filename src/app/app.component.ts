import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'helpline';
  items: Observable<any[]>;
  constructor(firebase: AngularFireDatabase) {
    this.items = firebase.list('Helpline/received').valueChanges();
  }
}
