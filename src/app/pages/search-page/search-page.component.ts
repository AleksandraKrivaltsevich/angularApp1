import { Component, inject } from '@angular/core';
import { ProfileService } from '../../date/services/profile.service';
import { Profile } from '../../date/interfaces/profile.interface';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";
import {ProfileFiltersComponent} from './profile-filters/profile-filters.component';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent, ProfileFiltersComponent, AsyncPipe],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  ProfileService: ProfileService = inject(ProfileService)
  profiles =     this.ProfileService.filteredProfiles

  constructor() {
  }
}
