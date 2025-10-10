import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  personalInfo: any;
  imageError = false;

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit() {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
    console.log('Personal Info:', this.personalInfo);
    console.log('Profile Image Path:', this.personalInfo?.profileImage);
  }

  onImageError(event: any) {
    console.error('Erro ao carregar imagem:', event);
    this.imageError = true;
  }

  onImageLoad(event: any) {
    console.log('Imagem carregada com sucesso:', event);
    this.imageError = false;
  }
}
