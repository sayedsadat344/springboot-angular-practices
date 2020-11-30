import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input()
  icon: IconDefinition | string;

  @Input()
  size: string;

  get useFontAwesome(): boolean {
    return this.isFontAwesome(this.icon);
  }

  constructor() {}

  ngOnInit() {}

  isFontAwesome(icon: IconDefinition | string): icon is IconDefinition {
    return !!(icon as IconDefinition).prefix;
  }

}
