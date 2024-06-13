import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]> ([
    {
      summary: {
        strong: "Experiências Acadêmicas - Front-end",
        p: "",
      },
      text: "<p>Desde  início da faculadade me dedico a programação, com destaque em front-end</p>"
    },
    {
      summary: {
        strong: "Estagiária",
        p: "Pharlab | Out 2021 - Mar 2022",
      },
      text: "<p>Durante meu período na Pharlab tive contato com banco de dados e também suporte ao usuário ERP</p>"
    },
    {
      summary: {
        strong: "Desenvolvedor Front-end",
        p: "CHC Jr. | Jan 2020 - Dez 2021",
      },
      text: "<p>Minha experiência na Empresa Júnior além de me proporcionar experiência com liderança em projetos também, me proporcionou desenvolver projetos utilizando Flutter.<p>"
    },

  ])
}
