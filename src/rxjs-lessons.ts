import { subscribe } from 'diagnostics_channel';
import { Observable } from 'rxjs';

const search$ = new Observable<string>((observer) => {
  console.log('Start');
  const search = document.getElementById('search');
  search?.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement;
    observer.next(target.value);
  });
  console.log('End');
});
console.log('start sub');
search$.subscribe({
  next: (value) => console.log(value, 1),
});
search$.subscribe({
  next: (value) => console.log(value, 2),
});
console.log('end sub');
