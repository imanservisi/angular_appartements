import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Residence } from '../../model/residence.model';
import { ResidenceService } from '../../service/residence.service';

@Component({
  selector: 'app-show-residence',
  imports: [CommonModule, RouterLink],
  templateUrl: './show-residence.component.html',
  styleUrl: './show-residence.component.css'
})
export class ShowResidenceComponent implements OnInit {
  residence= new Residence();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private residenceService: ResidenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
       this.residenceService.consulterResidence(this.activatedRoute.snapshot.params['id']).subscribe(
      (res) => {
        this.residence = res;
      }
    );
  }
}
