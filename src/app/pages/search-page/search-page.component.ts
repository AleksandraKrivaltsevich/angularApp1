import { Component, inject } from '@angular/core';
import { ProfileService } from '../../date/services/profile.service';
import { Profile } from '../../date/interfaces/profile.interface';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  ProfileService: ProfileService = inject(ProfileService)
  profiles: Profile[] = []

  constructor() {
    this.ProfileService.getTestAccount()
    .subscribe(val => {
      this.profiles = val
    })
  }

}
