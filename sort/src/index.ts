import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

const chars = new CharactersCollection('wejejJoiAAqai');
chars.sort();
console.log(chars.data);

const numbersCollection = new NumbersCollection([10, 2, 5, -8]);
