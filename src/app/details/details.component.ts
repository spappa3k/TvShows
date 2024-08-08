import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelMovie } from '../models/models';
import { FilmsService } from '../films.service';
import {SingleModel} from '../models/modelsSingle';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  chosen?: SingleModel
  id?:number

  constructor(private router: Router, private ar:ActivatedRoute, public fs:FilmsService) {
  this.ar.params.subscribe(params => {
    this.id = parseInt(params['id']);
  })
  }
  ngOnInit(): void {
    console.log("id number"+this.id)
this.fs.singleCall(this.id!).subscribe(
  (data) => {
    this.chosen = data;
    console.log(this.chosen);
  }
);
}
}
