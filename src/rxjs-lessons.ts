import { EventDispatcher } from '@angular/core/primitives/event-dispatch';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// const search$ = new Observable<Event>((observer) => {
//   console.log('Start');
//   const search = document.getElementById('search');
//   if (!search) return;
//   search.addEventListener('input', (event) => {
//     observer.next(event);
//   });
// });
const search$ = fromEvent(
  document.getElementById('search') as HTMLInputElement,
  'input'
);
search$
  .pipe(
    map((event) => (event.target as HTMLInputElement).value),
    map((val: string) => (val.length > 3 ? val : '')),
    debounceTime(500),
    distinctUntilChanged()
  )
  .subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
    complete: () => console.log('end of the event'),
  });
