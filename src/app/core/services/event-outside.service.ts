import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventOutside {
    public checkForElement(element: HTMLElement, event: Event): boolean {
        const bubbledElements = event.composedPath() as HTMLElement[];

        return bubbledElements
            .every((currElement) => (currElement !== element));
    }
}
