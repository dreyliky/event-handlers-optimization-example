import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeService } from 'ngx-os';
import { ThemeEnum } from '@core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
    constructor(
        private readonly themeService: ThemeService
    ) {}

    public ngOnInit(): void {
        this.themeService.apply(ThemeEnum.Win10);
    }
}
