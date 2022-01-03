import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppRouteEnum } from '@core';

interface Page {
    name: string;
    path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    public pages: Page[] = [
        { name: 'Example 1', path: `${AppRouteEnum.ExampleOne}` },
        { name: 'Example 2', path: `${AppRouteEnum.ExampleTwo}` },
        { name: 'Example 3', path: `${AppRouteEnum.ExampleThree}` },
        { name: 'Example 4', path: `${AppRouteEnum.ExampleFour}` },
        { name: 'Example 5', path: `${AppRouteEnum.ExampleFive}` },
        { name: 'Example 6', path: `${AppRouteEnum.ExampleSix}` }
    ];
}
