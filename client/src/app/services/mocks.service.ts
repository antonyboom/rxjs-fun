import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

const data: string = '\n' +
  'Are own design entire former get should. Advantages boisterous day excellence boy filter(). Out between our two waiting wishing. Pursuit he he garrets greater towards amiable so placing. Nothing off how norland delight. Abode shy shade she hours forth its use. Up whole of fancy ye quiet do. Justice fortune no to is if winding morning forming.\n' +
  '\n' +
  'Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently map(). Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone style added abode ask. Nay projecting unpleasing boisterous eat discovered solicitude. Own six moments produce elderly pasture far arrival. Hold our year they ten upon. Gentleman contained so intention sweetness in on resolving.';

@Injectable({
  providedIn: 'root'
})

export class MocksService {

  constructor() {
  }

  mock(): Observable<string> {
    return of(data).pipe(
      delay(1500))
  }

}
