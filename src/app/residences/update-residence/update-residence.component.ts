import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Residence } from '../../model/residence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../../service/residence.service';

@Component({
  selector: 'app-update-residence',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-residence.component.html',
  styleUrl: './update-residence.component.css'
})
export class UpdateResidenceComponent implements OnInit {
  currentResidence = new Residence();

  constructor(
    private activatedRoute: ActivatedRoute,
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.residenceService.consulterResidence(this.activatedRoute.snapshot.params['id']).subscribe(
      (res) => {
        this.currentResidence = res;
      }
    );
  }

  updateResidence()
  {
    console.log('test');
    this.residenceService.modifierResidence(this.currentResidence).subscribe(
      (res) => {
        // const message = "Résidence " + this.currentResidence.nomResidence + " modifiée avec succès";
        this.router.navigate(['residences']);
      }
    );
  }
}
