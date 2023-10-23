import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navLinksData } from 'src/app/shared/data/nav-links.data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navLinks = navLinksData;
}
