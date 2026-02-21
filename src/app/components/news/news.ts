import { Component, Input, OnInit } from '@angular/core';  // Importante importar Input, OnInit sino no funciona
import { INoticia } from '../../interfaces/inoticia';
@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {
  // Opcion 1 para importar Input
  @Input() misNoticias: INoticia[] = []; 

  constructor(){
    console.log(this.misNoticias); // me sigue un array vacio
  }

  ngOnInit(){
    console.log('ngOnInit', this.misNoticias); 
  }

}
