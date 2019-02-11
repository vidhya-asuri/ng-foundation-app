import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService} from './message.service';
import {Httpclient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(public http:HttpClient,
  public messageService: MessageService) { }
  
  	getHeroes(): Observable<Hero[]> {
  		return this.http.get<Hero[]>(this.heroes.Url);
	}

  	/** Log a HeroService message with the MessageService */
	private log(message: string) {
  		this.messageService.add(`HeroService: ${message}`);
	}

	getHero(id: number): Observable<Hero>{
	    this.messageService.add(`HeroService: fetched Hero with id=${id}`);
	    return of(HEROES.find(hero=> hero.id === id));
	}
}
