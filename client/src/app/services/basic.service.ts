import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {delay, filter, map, switchMap} from 'rxjs/operators';
import {RxjsOperator} from '../shared/interfaces/operator';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  private title = 'Rxjs Operators Basics';
  private description: string[] = [
    'Operators rxjs used to work with value from observables source.',
    'Good example of such streams are angular http response and ngrx (redux) adaptation for angular',
    'The most useful operators to manipulate data from source are filter() and map()'
  ];
  private operators: RxjsOperator[] = [
    {
      name: 'filter()',
      description: 'callback function exists to filter stream value by condition',
      enabled: false,
      snippet:
        [
          'observable().pipe(filter(data => !data)), will return data not equal null or undefined',
          'observable().pipe(filter(data => data.some(item => item.name === Kaveri))), will return only objects where name Kaveri'
        ]
    },
    {
      name: 'map()',
      description: 'callback function exists to update/modify stream value or return different one',
      enabled: false,
      snippet: [
        'observable().pipe(map((response: any) => do anything with data to return desire value))',
        'observable().pipe(map(object: amy{} => { object.name = Anton; return object)), will update property name inside of object to Anton'
      ]
    },
  ];
  /* =========== */
  private notes: string[] = [
    '- Task Card: filter mock response and return key strings filter(), map() ' +
    'then modify string from source to object (key, value) and this object where key is name of operator filtered before' +
    'and value some random description form you :)',
    '- Creative Card: just play around with response and be creative :)'
  ];
  private data: { key: string, value: string }[] = [
    {
      key: 'filter()',
      value: 'enabled filter option returns this array',
    },
    {
      key: 'loop()',
      value: 'non filtered data returns only mess',
    },
    {
      key: 'map()',
      value: 'disabled filter option returns that array',
    },
    {
      key: 'heck()',
      value: 'ui is fun they told me',
    },
  ];

  private subjectData$: Subject<{ isFiltered: boolean, isMapped: boolean }> =
    new ReplaySubject<{ isFiltered: boolean, isMapped: boolean }>();

  playgroundData$: Observable<string> = this.subjectData$
    .asObservable()
    .pipe(
      switchMap((event) => {
        return this.mockPlayground(event.isFiltered, event.isMapped);
      })
    )
  ;

  constructor() {
  }

  getMock(): Observable<any> {
    return of(this.data).pipe(
      delay(100));
  }

  mockPlayground(isFiltered: boolean, isMapped: boolean): Observable<any> {
    return of(this.data).pipe(
      map(response => {
        switch (true) {
          case isFiltered && isMapped:
            return [
              {
                name: 'filter()',
                desc: 'filter works based on condition'
              },
              {
                name: 'map()',
                desc: 'pay attention how object properties has been mapped'
              }
            ];
          case !isFiltered && isMapped:
            return 'ooops seems you did not enable filter()';
          case isFiltered && !isMapped:
            return response;
          default:
            return 'non filtered data returns only mes';
        }
      }),
      filter((response) => {
        return isFiltered ? response instanceof Array : typeof response === 'string';
      }),
      delay(1000));
  }

  getPlayground(event: { isFiltered: boolean, isMapped: boolean }): void {
    this.subjectData$.next(event);
  }

  updatePlayground(event: { isFiltered: boolean, isMapped: boolean }): void {
    this.subjectData$.next(event);
  }

  getTitle(): Observable<string> {
    return of(this.title).pipe(
      delay(500)
    );
  }

  getDescription(): Observable<string[]> {
    return of(this.description).pipe(
      delay(500)
    );
  }

  getOperators(): Observable<RxjsOperator[]> {
    return of(this.operators).pipe(
      delay(500)
    );
  }

  getNotes(): Observable<string[]> {
    return of(this.notes).pipe(
      delay(750)
    );
  }

}
