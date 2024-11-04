import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [],
  template: '<svg:use [attr.xlink:href]="href"></svg:use>',
  styles: ['']
})
export class SvgComponent {
  @Input() icon = ''

  get href() {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
