import { Component,  } from '@angular/core';  
import { Input, OnInit} from '@angular/core'; // Importante importar para Opcion 1 Input, OnInit sino no funciona
import { input, signal } from '@angular/core'; // Importar para opcion 2
import { INoticia } from '../../interfaces/inoticia';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {
  // Opcion 1 para importar Input
  //@Input() misNoticias: INoticia[] = []; 


  // Option 2: con signal
  misNoticias = input<INoticia[]>([]); 


  constructor(){
    console.log(this.misNoticias()); // me sigue un array vacio
  }

  ngOnInit(){
    console.log('ngOnInit', this.misNoticias()); 
  }

}
