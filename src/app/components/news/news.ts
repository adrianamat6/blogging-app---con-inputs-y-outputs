import { Component } from '@angular/core';
import { NOTICIAS } from '../../db/noticias.db';
import { INoticia } from '../../interfaces/inoticia';
@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {

  arrayNoticia:INoticia[] = NOTICIAS; 

}
