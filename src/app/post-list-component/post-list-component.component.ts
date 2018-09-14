import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})

export class PostListComponentComponent implements OnInit {
	//creationDate = new Date();
	@Input() postTitle: string;
	@Input() postCreationDate: Date;
	@Input() postContent: string;
  @Input() postloveIts: number; 

  	constructor() { }

  	ngOnInit() {
  	}

  IloveIt = 0;
  IDonotloveIt = 0;
  loveIts = 0;

  LikeIt() {
    this.IloveIt++;
    this.postloveIts = this.IloveIt - this.IDonotloveIt;
    console.log('I like it!'+this.postloveIts);
  }

  doNotLikeIt() {
    this.IDonotloveIt++;
    this.postloveIts = this.IloveIt - this.IDonotloveIt;
    console.log('I do not like it!'+this.postloveIts);
  }
}
