import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
import anything = jasmine.anything;

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  ,
  providers: [PostsService]
})
export class UserComponent {
  title = 'Tore Gard CV';
  email: string;
  hobbies: string[];
  address: IAddress;
  showHobbies: boolean;
  posts: Post[];


  constructor(private postsService : PostsService) {
    this.email = 'dragerot@gmail.com';
    ;
    console.log("constructor user 1");
    this.address = {
      street: 'Øvre Movei 23',
      city: 'Nesoddtangen',
      state: 'Nesoddtangen'
    }
    this.hobbies = ['music', 'Movies', 'Sports'];
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(
      posts => {
          this.posts=posts;
        console.log("******************************");
        console.log(posts);
      }
    );

  }

  toggleHobbies(){
    console.log("Show");
    this.showHobbies =this.showHobbies ? false : true;
    console.log(this.showHobbies);
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.push(hobby);
  }

  deleteHobby(index){
    this.hobbies.splice(index,1)
  }

}

interface IAddress {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body : string;
}
