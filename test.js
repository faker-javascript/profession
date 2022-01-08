import fakeProfession from './index.js';
import test from 'ava';

test('fakeProfession return type to be string', t => {
	t.is(typeof fakeProfession(), 'string');
});

test('fakeProfession with rank return type to be string', t => {
	t.is(typeof fakeProfession({rank: true}), 'string');
});