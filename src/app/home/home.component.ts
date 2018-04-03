import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('posts',[
      transition('* => *',[
        query(':enter', style({ opacity:0 }),{ optional:true }),

        query(':enter', stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 0, transform: 'translateY(-75%)',offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',offset: .3}),
            style({opacity: 1, transform: 'translateY(0)',offset: 1}),
          ]))
        ]),{ optional:true }),

        query(':leave', stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 1, transform: 'translateY(0)',offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)',offset: 1}),
          ]))
        ]),{ optional:true })

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnTxt:string ='Add a post';
  postTxt:string ='Eternal wait as a way of life';
  posts = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.post.subscribe(res => this.posts = res);
    this.itemCount = this.posts.length;
    this._data.changePost(this.posts);
  }

  addItem(){
    this.posts.push(this.postTxt);
    this.postTxt = '';
    this.itemCount = this.posts.length;
    this._data.changePost(this.posts);
  }

  removeItem(i){
    this.posts.splice(i, 1);
    this._data.changePost(this.posts);
  }
}
