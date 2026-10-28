import {parseHex,compare,hex} from './core.mjs';
import './share.mjs';
const $=id=>document.getElementById(id);
function update(){
  try{
    const r=compare(parseHex($('original').value),parseHex($('changed').value));$('error').textContent='';
    $('original-sum').textContent=hex([r.original.sum]);$('changed-sum').textContent=hex([r.changed.sum]);
    $('status').textContent=r.sameBytes?'Identical bytes. The sums match.':r.sameSum?'Changed bytes, matching sums. This change is NOT detected by the basic folding checksum.':'Different sums. This change is detected.';
    $('steps').replaceChildren(...r.changed.steps.slice(0,32).map(s=>{const tr=document.createElement('tr');for(const val of [hex([s.byte]),s.raw,s.carry,hex([s.sum])]){const td=document.createElement('td');td.textContent=val;tr.append(td);}return tr;}));
  }catch(e){$('error').textContent=e.message;$('status').textContent='Correct the hex input to compare the messages.';$('original-sum').textContent='—';$('changed-sum').textContent='—';$('steps').replaceChildren();}
}
function fromText(){const bytes=new TextEncoder().encode($('text').value);$('original').value=hex(bytes);$('changed').value=hex(bytes);update();}
$('text').addEventListener('input',fromText);for(const id of ['original','changed'])$(id).addEventListener('input',update);
$('reset').addEventListener('click',()=>{$('changed').value=$('original').value;update();});
for(const mode of ['flip','swap'])$(mode).addEventListener('click',()=>{try{const bytes=parseHex($('changed').value);if(bytes.length<(mode==='flip'?1:2))throw new Error(`Enter at least ${mode==='flip'?'one byte':'two bytes'} first.`);if(mode==='flip')bytes[0]^=1;else [bytes[0],bytes[1]]=[bytes[1],bytes[0]];$('changed').value=hex(bytes);update();}catch(e){$('error').textContent=e.message;}});
update();
