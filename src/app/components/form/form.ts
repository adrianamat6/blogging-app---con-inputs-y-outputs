import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [ FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})

export class Form {
  // Variables para conectar con el formulario (ngModels)
  inputTitle: string = "";
  inputImage: string = "";
  inputTexto: string = "";
  inputDate: string = "";

  // Output  para subir el dato. 
  @Output() noticiaEmitida = new EventEmitter <INoticia>();  
  

  


  guardarNoticia(event: Event){

      // Comprobamos que los campos no vengan vacios
      if(this.inputTitle ===''|| this.inputImage === "" || this.inputTexto === "" || this.inputDate === ""){
        alert("Por favor, rellena todos los campos obligatorios.");
        return;
      }

      // Asignamos los valores de los inputs a la estructura de la interfaz INoticia
      const nueva = {
        "title": this.inputTitle, 
        "image": this.inputImage,
        "new": this.inputTexto,
        "date": this.inputDate
      }; 

      // Emitimos la tarea al Padre
      this.noticiaEmitida.emit(nueva); 

      
      // Reseteamos las variables para limpiar el formulario y dejarlo listo para la siguiente noticia
      this.inputTitle = "";
      this.inputImage = "";
      this.inputTexto = "";
      this.inputDate = "";

    }; 



}
