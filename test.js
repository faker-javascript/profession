import test from 'ava';
import profession from './index.js';

test('profession return type to be string', t => {
    t.is(typeof profession(), 'string');
});

test('profession with rank return type to be string', t => {
    t.is(typeof profession({rank: true}), 'string');
});

test('profession with rank and locale en_US return type to be string', t => {
    t.is(typeof profession({rank: true, locale: 'en_US'}), 'string');
});
