import test from 'node:test';
import assert from 'node:assert/strict';
import {foldedSum,parseHex,compare,hex} from '../core.mjs';
test('end-around carry: FF + 01 = 01',()=>assert.equal(foldedSum([255,1]).sum,1));
test('repeated carries and empty sum',()=>{ assert.equal(foldedSum([255,255,255]).sum,255); assert.equal(foldedSum([]).sum,0); });
test('single bit difference detected in example',()=>assert.equal(compare([72,105],[73,105]).sameSum,false));
test('swapped unequal bytes are an explicit collision',()=>{ const r=compare([1,2],[2,1]); assert.equal(r.sameBytes,false); assert.equal(r.sameSum,true); });
test('strict parsing and formatting',()=>{ assert.deepEqual(parseHex('ff 01'),[255,1]); assert.equal(hex([0,255]),'00 FF'); for(const x of ['0','XYZ','0x12','123']) assert.throws(()=>parseHex(x)); });
test('invalid byte rejected',()=>assert.throws(()=>foldedSum([256])));
