import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit{

  constructor(){ }

  public video=[
    {vName:'Angular project from scratch', Photo:'assets/13.png', Like:0,Dislike:0},
    {vName:'Login System in Angular ', Photo:'assets/angular.png', Like:0,Dislike:0},
    {vName:'HTML crash course', Photo:'assets/html5.png', Like:0,Dislike:0},
    {vName:'ExpressJs Project from Scratch', Photo:'assets/expressjs2.jpg', Like:0,Dislike:0},

  ]

  ngOnInit(): void {
    
  }

  public LikeCounter(video:any){
    video.Like++
  }
  public DislikeCounter(video:any){
    video.Dislike++
  }
  

}
