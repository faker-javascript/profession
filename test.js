import profession from './index.js';
import test from 'ava';

test('profession return type to be string', t => {
	t.is(typeof profession(), 'string');
});

test('profession with rank return type to be string', t => {
	t.is(typeof profession({rank: true}), 'string');
});