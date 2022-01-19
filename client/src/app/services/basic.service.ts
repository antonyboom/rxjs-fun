import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {RxjsOperator} from '../shared/interfaces/operator';

const data: string = '\n' +
  'Are own design entire former get should. Advantages boisterous day excellence boy filter(). Out between our two waiting wishing. Pursuit he he garrets greater towards amiable so placing. Nothing off how norland delight. Abode shy shade she hours forth its use. Up whole of fancy ye quiet do. Justice fortune no to is if winding morning forming.\n' +
  '\n' +
  'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently map(). Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask. Nay projecting unpleasing boisterous eat discovered solicitude. Own six moments produce elderly pasture far arrival. Hold our year they ten upon. Gentleman contained so intention sweetness in on resolving.';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  private title: string = 'Rxjs Operators Basics'
  private description: string[] = [
    'Operators rxjs used to work with value from observables source.',
    'Good example of such streams are angular http response and ngrx (redux) adaptation for angular',
    'The most useful operators to manipulate data from source are filter() and map()'
  ]
  private operators: RxjsOperator[] = [
    {
      name: 'filter()',
      description: 'callback function exists to filter stream value by condition',
      snippet:
        [
          'observable().pipe(filter(data => !data)), will return data not equal null or undefined',
          'observable().pipe(filter(data => data.some(item => item.name === Kaveri))), will return only objects where name Kaveri'
        ]
    },
    {
      name: 'map()',
      description: 'callback function exists to update/modify stream value or return different one',
      snippet: [
        'observable().pipe(map((response: any) => do anything with data to return desire value))',
        'observable().pipe(map(object: amy{} => { object.name = Anton; return object)), will update property name inside of object to Anton'
      ]
    },
  ]
  /* =========== */
  private notes: string[] = [
    '- Task Card: filter mock response and return key strings filter(), map() ' +
    'then modify string from source to object (key, value) and this object where key is name of operator filtered before' +
    'and value some random description form you :)',
    '- Creative Card: just play around with response and be creative :)'
  ]

  constructor() {
  }

  getMock(): Observable<string> {
    return of(data).pipe(
      delay(1500))
  }

  getTitle(): Observable<string> {
    return of(this.title).pipe(
      delay(500)
    )
  }

  getDescription(): Observable<string[]> {
    return of(this.description).pipe(
      delay(500)
    )
  }

  getOperators(): Observable<RxjsOperator[]> {
    return of(this.operators).pipe(
      delay(500)
    )
  }

  getNotes(): Observable<string[]> {
    return of(this.notes).pipe(
      delay(750)
    )
}

}
