import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from 'src/app/models/Comment';


@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.scss']
})
export class ShowCommentsComponent implements OnInit {
  @Input() comments: Comments; 
  

  paramId: number = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  
  }

}
