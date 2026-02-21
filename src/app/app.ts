import { Component, signal } from '@angular/core';
import { INoticia } from './interfaces/inoticia';
import { NOTICIAS } from './db/noticias.db';
import { Form } from './components/form/form';
import { News } from './components/news/news';
import { FormsModule } from '@angular/forms';

// Este es el padre. Tomará el control y será el unico que importe la base de datos y la guardará en un signal.
@Component({
  selector: 'app-root',
  imports: [ Form, News ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // 1. El almacén: Lo convertimos a Signal para que Angular detecte cambios
  arrayNews = signal<INoticia[]>(NOTICIAS); 
  
  // 2. La red que atrapa el dato:
  recibirNuevaNoticia(noticiaQueLlega: INoticia) {
    // Así se añade un elemento a un Signal array (hace la misma función que el push)
    this.arrayNews.update(lista => [...lista, noticiaQueLlega]);
  }

}
