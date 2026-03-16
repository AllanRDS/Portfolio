import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'ar-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu();
  }

  certifications = [
    { title: 'AZ-900', name: 'Microsoft Azure Fundamentals', icon: 'award' },
    { title: 'DP-900', name: 'Microsoft Azure Data Fundamentals', icon: 'database' },
    { title: 'AI-900', name: 'Microsoft Azure AI Fundamentals', icon: 'cpu' },
    { title: 'Inglês B2.2', name: 'goFluent', icon: 'award' }
  ];

  education = [
    { degree: 'Ciência da Computação', institution: 'Uninassau', status: 'Graduação em andamento' },
    { degree: 'Análise e Desenvolvimento de Sistemas', institution: 'Unicesumar EAD', status: 'Concluido' }
  ];

  skills = [
    { name: 'Power BI', category: 'Data Visualization', icon: 'chart-bar' },
    { name: 'Databricks', category: 'Data Engineering', icon: 'database' },
    { name: 'Azure Data Factory', category: 'Data Pipeline', icon: 'code' },
    { name: 'Power Automate', category: 'Automation', icon: 'cpu' },
    { name: 'Excel', category: 'Data Analysis', icon: 'chart-bar' },
    { name: 'SQL', category: 'Query & Database', icon: 'database' },
    { name: 'Python', category: 'Programming', icon: 'code' },
    { name: 'Apache Spark', category: 'Big Data', icon: 'cpu' },
    { name: 'Java', category: 'Programming', icon: 'code' },
    { name: 'Angular', category: 'Frontend', icon: 'layout-dashboard' }
  ];

  experiences = [
    {
      company: 'Avanade',
      role: 'Estagiário Data Analyst & Data Engineer',
      period: 'Atualmente',
      description: 'Atuação em modelo híbrido como Data Analyst e Data Engineer, focando em criar visualizações de dados impactantes com Power BI e tratar, processar e transformar dados utilizando Databricks, SQL, Python e Apache Spark.',
      type: 'Experience'
    },
    {
      company: 'Impacta Tecnologia',
      role: 'Programa Decola Tech 6',
      period: '2025',
      description: 'Treinamento intensivo cobrindo Java, Spring Boot, Angular e Kafka para integração ao time de desenvolvimento/dados.',
      type: 'Training'
    }
  ];
}
