import { Injectable } from '@angular/core';
import { Experience, Skill, TimelineItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor() { }

  getExperiences(): Experience[] {
    return [
      {
        company: 'Odebrecht Engenharia & Construção',
        role: 'Supervisor de Solda',
        project: '(TOBD) - Terminal Oceânico da Bahia do Dande e Refinaria de Cabinda',
        period: '2021 - 2025',
        location: 'Barra do Dande, Cabinda, Angola - Africa',
        description: 'Em uma experiência internacional desafiadora em Angola, fui além da supervisão técnica, abraçando o papel de líder e formador de talentos. Gerenciei as operações de soldagem nos projetos do Terminal Oceânico da Barra do Dande e da Refinaria de Cabinda, onde um dos meus maiores legados foi a contribuição direta para a formação e qualificação de mais de 200 soldadores locais, criando uma força de trabalho qualificada e autônoma. Meu foco em capacitação, planejamento e qualidade foi essencial para o avanço de uma das obras mais importantes do continente africano, superando desafios e construindo não apenas infraestrutura, mas também capital humano.',
        imageUrl: 'oec-logo.jpg'
      },
      {
        company: 'Enesa Engenharia LTDA',
        role: 'Inspetor de Solda N1',
        period: '2020 - 2021',
        location: 'Ipatinga, MG - Brasil',
        description: 'Alocado em projetos de manutenção e montagem industrial na principal planta siderúrgica da região (Usiminas), fui responsável pela inspeção e controle de qualidade dos serviços de soldagem. Garanti a integridade de equipamentos e estruturas metálicas para o processo produtivo, assegurando a conformidade com as normas técnicas e os padrões de segurança da indústria de base.',
        imageUrl: 'enesa-logo.png'
      },
      {
        company: 'Techint Engenharia & Construção',
        role: 'Inspetor de Solda N1',
        project: 'FPSO P-76',
        period: '2015 - 2019',
        location: 'Pontal do Paraná, PR - Brasil',
        description: 'Como Inspetor de Solda N1 na Techint, tive a oportunidade de participar ativamente da construção da FPSO P-76, uma unidade estratégica para a produção no pré-sal. Garantindo através de inspeções meticulosas, a integridade estrutural e a perfeição das soldas nos módulos de processo da plataforma. Ao assegurar que cada junta soldada estivesse em conformidade com as mais rigorosas normas internacionais e especificações do cliente, contribuí para a segurança, a qualidade e a confiabilidade de um projeto de classe mundial, que hoje opera em águas profundas na Bacia de Santos.',
        imageUrl: 'ttp76-logo.jpg' 
      },
      {
        company: 'Consórcio Ipojuca Interligações',
        role: 'Inspetor de Solda N1',
        project: '(RNEST) - Refinaria Abreu e Lima ',
        period: '2012 - 2015',
        location: 'Jaboatão dos Guararapes, PE - Brasil',
        description: 'Atuação em uma das obras de infraestrutura mais complexas e importantes do Brasil, a construção da Refinaria Abreu e Lima (RNEST). Como parte do consórcio responsável pelas interligações da refinaria, realizei a inspeção e o controle de qualidade dos processos de soldagem em tubulações de grande porte e sistemas de alta pressão, garantindo a conformidade com as exigentes normas técnicas e os padrões de segurança da indústria petroquímica.',
        imageUrl: 'cii-logo.png'
      },
      {
        company: 'Mendes Junior Trading & Engenharia S/A',
        role: 'Inspetor de Solda LP/PM/EV',
        project: '(TABR) - Terminal Aquaviário de Barra do Riacho',
        period: '2009 - 2012',
        location: 'Aracruz, ES - Brasil',
        description: 'Como Inspetor de Solda na Mendes Junior, tive um papel crucial na construção do Terminal Aquaviário de Barra do Riacho (TABR). Através de uma rigorosa fiscalização em campo, assegurei a qualidade e a integridade de centenas de junções soldadas em estruturas e tubulações do projeto.',
        imageUrl: 'mj-logo.png'
      },
      {
        company: 'União Engenharia',
        role: 'Inspetor de Solda LP/PM/EV',
        project: 'Pólo Cacimbas',
        period: '2008 - 2009',
        location: 'Linhares, ES - Brasil',
        description: 'Contribuí ativamente no projeto de ampliação da Unidade de Tratamento de Gás de Cacimbas (UTGC), da Petrobras, durante um período de grande investimento e expansão (Fases II e III). Minha principal responsabilidade era garantir a integridade e a qualidade das junções soldadas em um ambiente industrial crítico e de alta complexidade.',
        imageUrl: 'uniaoeng-logo.png'
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Inspetor de Soldagem – FBTS', type: 'certification' },
      { name: 'Líquido Penetrante (LP-N2-G)', type: 'certification' },
      { name: 'Ensaios Visuais (EV-N2-S)', type: 'certification' },
      { name: 'Partículas Magnéticas (PM-N2-S-Y)', type: 'certification' },
      { name: 'IRATA N1 Internacional', type: 'certification' },
      { name: 'CBSP', type: 'certification' },
      { name: 'T-HUET', type: 'certification' },
      { name: 'Segurança e Acesso em Plataformas', type: 'technical' },
      { name: 'Inspeção e Integridade Estrutural', type: 'technical' },
      { name: 'Supervisão e Liderança', type: 'technical' },
      { name: 'Informática', type: 'technical' },
      { name: 'Inglês Intermediário', type: 'technical' },
      { name: 'Gestão de Projetos', type: 'technical' },
      { name: 'Gestão de Pessoas', type: 'technical' },
      { name: 'Normas e Procedimentos', type: 'technical' }
    ];
  }

  getPersonalInfo() {
    return {
      name: 'Wildiner Lucio dos Santos',
      title: 'SUPERVISOR DE SOLDA | Especialista em Projetos Onshore & Offshore',
      email: 'wildiner25@yahoo.com.br',
      phone: '+55 (31) 97341-1640',
      location: 'Santana do Paraíso, MG - Brasil',
      summary: 'Profissional com mais de 18 anos de experiência consolidada em controle de qualidade e supervisão de soldagem, com uma carreira construída nos maiores projetos de Óleo e Gás, Naval e Siderurgia. Minha trajetória inclui sólida vivência em ambiente offshore, com embarques nas plataformas de Anchova, P-17 e Pampo (Ativo Sul), além da atuação em obras de alta complexidade como a FPSO P-76, a Refinaria Abreu e Lima (RNEST) e, mais recentemente, o Terminal Oceânico e a Refinaria de Cabinda, em Angola. Sou especialista em garantir a conformidade com normas internacionais, otimizar processos para máxima produtividade e tenho um histórico comprovado na formação de equipes, incluindo a capacitação de mais de 200 soldadores locais.',
      profileImage: 'profile-photo.jpg' 
    };
  }

  getEducation() {
    return [
      {
        institution: 'Bacharelado em Engenharia Civil', 
        course: 'UNINTER',
        period: '2021 - 2026',
        description: 'Cursando'
      },
      {
        institution: 'Técnico em Mecânica',
        course: 'CEDTEC',
        period: '2010',
        description: ''
      },
      {
        institution: 'Ensino Médio Completo',
        course: 'Colégio Futura',
        period: '2012',
        description: ''
      }
    ];
  }
}
