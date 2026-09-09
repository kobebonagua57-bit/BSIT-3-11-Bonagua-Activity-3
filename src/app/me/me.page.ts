import { Component, inject } from '@angular/core';
import { Me } from '../attributes/me';
import { MeService } from '../services/me.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
  standalone: false,
})
export class MePage {
  profile: Me;
  private meService = inject(MeService);

  constructor() {
    this.profile = this.meService.getMe();
  }

}
