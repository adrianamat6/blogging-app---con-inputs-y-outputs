import { Component,  } from '@angular/core';  
import { Input, OnInit} from '@angular/core'; // Importante importar para Opcion 1 Input, OnInit sino no funciona
import { input, signal } from '@angular/core'; // Importar para opcion 2
import { INoticia } from '../../interfaces/inoticia';
import { IndividualNew } from '../individual-new/individual-new';

@Component({
  selector: 'app-news',
  imports: [IndividualNew],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {
  // Opcion 1 para importar Input
  //@Input() misNoticias: INoticia[] = []; 


  // Option 2: con signal
  misNoticias = input<INoticia[]>([]); 




  // ngOnInit(){
  //   console.log('ngOnInit', this.misNoticias()); 
  // }

  // constructor(){
  //   console.log(this.misNoticias()); // me sigue un array vacio
  // }


}
