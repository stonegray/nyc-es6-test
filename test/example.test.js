/* eslint-disable no-undef */
import assert from 'assert';
import testFunction from '../src/index.js';

describe('Test', async ()=>{
	it('works', async ()=>{
		const test = await testFunction();
		assert.strictEqual(test, 2048, "Number is invalid!");
	});
});