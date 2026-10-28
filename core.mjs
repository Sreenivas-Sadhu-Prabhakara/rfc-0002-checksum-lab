export function parseHex(text) {
  const clean=text.trim();
  if (!clean) return [];
  const parts=clean.split(/\s+/);
  if (parts.length>4096) throw new RangeError('Use at most 4096 bytes.');
  if (!parts.every(p=>/^[0-9a-fA-F]{2}$/.test(p))) throw new TypeError('Use two hex digits per byte, separated by spaces (for example 48 69).');
  return parts.map(p=>parseInt(p,16));
}
export function foldedSum(bytes) {
  if (!Array.from(bytes).every(n=>Number.isInteger(n)&&n>=0&&n<=255)) throw new RangeError('Each byte must be 0–255.');
  let sum=0;
  const steps=[];
  for (const byte of bytes) {
    const raw=sum+byte;
    sum=(raw&255)+(raw>>>8);
    steps.push({byte,raw,carry:raw>>>8,sum});
  }
  return {sum,steps};
}
export function hex(bytes) { return Array.from(bytes,n=>n.toString(16).padStart(2,'0').toUpperCase()).join(' '); }
export function compare(a,b) {
  const original=foldedSum(a), changed=foldedSum(b);
  const sameBytes=a.length===b.length && Array.from(a).every((x,i)=>x===b[i]);
  return {original,changed,sameBytes,sameSum:original.sum===changed.sum};
}
