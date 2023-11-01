import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navLinksData } from 'src/app/shared/data/nav-links.data';
import { RouterModule } from '@angular/router';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navLinks = navLinksData;
  sideNavOpen = false;

  constructor(
    private navigationService: NavigationService,
  ) {
    this.getSidenavStatus();
  }

  getSidenavStatus() {
    this.navigationService.sidenavOpen.pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        // console.log(data);
        this.sideNavOpen = data;
      },
      error: (err) => {
      },
    });
  }

  toggleSidenav() {

    const value = !this.sideNavOpen;
    this.navigationService.closeOrOpenSidenav(value);
  }

  // on destroy
  destroy$ = new Subject();
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
