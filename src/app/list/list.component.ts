import { Component } from '@angular/core';
import { FilmsService } from '../films.service';
import { Filtred, ModelMovie } from '../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
constructor(public fs:FilmsService, private router:Router){}
Searched:ModelMovie[]=[]
inputValue:string=""
selectedFilm?:ModelMovie

submit() {
  this.fs.findFilms(this.inputValue).subscribe(
    (data) => {
      this.Searched = data;
      console.log(this.Searched)
    }
  );
}

goDetails(film:ModelMovie){
this.selectedFilm=film;
this.router.navigateByUrl("details/"+this.selectedFilm.show.id)
}

}
