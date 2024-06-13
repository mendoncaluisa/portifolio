import { Component, inject, signal } from '@angular/core';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description: 
      '<p>EXplore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ]
    },
    
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}


