import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private posts = new BehaviorSubject<any>(['Eternal wait as a way of life','Letting go is not for the poetic soul','Lost love seldom comes back','Do we continue living a lie','Or have courage to accept the truth']);
  post = this.posts.asObservable();

  constructor() { }

  changePost(post) {
    this.posts.next(post);
  }

}
