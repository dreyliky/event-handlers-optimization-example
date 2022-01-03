import { Component } from '@angular/core';
import { NumberBoxChangeEvent } from 'ngx-os';

@Component({
    template: ''
})
export abstract class BaseExampleComponent {
    public get cdr(): string {
        console.log('change detection call');

        return '';
    }

    public gridItemsAmount = 10;
    public gridItems: string[] = this.generateGridItems(this.gridItemsAmount);

    public onAmountOfItemsChanged({ value }: NumberBoxChangeEvent): void {
        this.gridItems = this.generateGridItems(value);
    }

    private generateGridItems(amount: number): string[] {
        return new Array(amount)
            .fill('')
            .map((_, index) => `Item ${index + 1}`)
    }
}
