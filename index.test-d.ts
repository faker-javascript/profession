import {expectType} from 'tsd';
import profession from './index.js';

expectType<string>(profession());
expectType<string>(profession({rank: true}));
expectType<string>(profession({rank: true, locale: 'en_US'}));
