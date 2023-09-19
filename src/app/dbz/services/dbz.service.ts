import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class DbzService {
    constructor() { }
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Goku',
            power: 10000
        },
        {
            id: uuid(),
            name: 'Vegetta',
            power: 10500
        },
        {
            id: uuid(),
            name: 'Piccoro',
            power: 7000
        }
    ];

    addCharacter(character: Character): void {
        const newCharacter: Character = {
            id: uuid(),
            name: character.name,
            power: character.power
        }
        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(id: string): void {
    //     console.log(id);
    //     //this.characters.splice(index,1);
    // }

    deleteCharacterById(id: string): void {
        this.characters = this.characters.filter( character => character.id !== id);
    }
    
}