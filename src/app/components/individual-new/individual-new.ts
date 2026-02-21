import { Component, OnInit } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia';
import { input } from '@angular/core';


@Component({
  selector: 'app-individual-new',
  imports: [],
  templateUrl: './individual-new.html',
  styleUrl: './individual-new.css',
})


export class IndividualNew {
  miNoticiaIndividual = input<INoticia>()


  ngOnInit(){
    // Para leer un Signal, siempre con paréntesis ()
    console.log('Dato recibido:', this.miNoticiaIndividual()); 
  }
}
