document.querySelector('#share').addEventListener('click', async () => {
  const text = "Checksum Lab \u2014 Learn how a simple checksum detects some damaged data and why it cannot prove authenticity. Try this free interactive RFC 2 lab: https://sreenivas-sadhu-prabhakara.github.io/rfc-0002-checksum-lab/";
  try { await navigator.clipboard.writeText(text); document.querySelector('#share-status').textContent='Copied. Ready to share wherever you choose.'; }
  catch { document.querySelector('#share-status').textContent=text; }
});
