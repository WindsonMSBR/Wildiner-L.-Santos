import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  personalInfo: any;

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit() {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
  }
}
