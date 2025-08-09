import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Residence } from '../model/residence.model';
import { ResidenceService } from '../service/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  imports: [FormsModule],
  templateUrl: './add-residence.component.html',
  styleUrl: './add-residence.component.css'
})
export class AddResidenceComponent implements OnInit {

  newResidence = new Residence();

  constructor(private residenceService: ResidenceService, private router: Router) {}

  ngOnInit(): void {
    // vide pour le moment
  }

  addResidence()
  {
    this.residenceService.ajouterResidence(this.newResidence).subscribe(
      (res) => {
         const message = "Résidence " + this.newResidence.nomResidence + " ajoutée avec succès";
        this.router.navigate(['residences'], {state: { message }});
      }
    )
  }
}
