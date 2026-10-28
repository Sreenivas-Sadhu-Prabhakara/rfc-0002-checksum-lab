# Checksum Lab

Compare folded 8-bit checksums after editing, flipping a bit or swapping bytes.

**[Open the interactive utility](https://sreenivas-sadhu-prabhakara.github.io/rfc-0002-checksum-lab/)** · [RFC 2](https://www.rfc-editor.org/rfc/rfc2.txt) · [Official status and errata](https://www.rfc-editor.org/info/rfc2)

## Community benefit

Learn how a simple checksum detects some damaged data and why it cannot prove authenticity. Intended audience: Students and community digital-literacy workshops.

## Run locally

Serve this folder with `python3 -m http.server 8000`, then open http://localhost:8000.
The site has no build step or runtime dependencies. Inputs remain in the browser.
Run meaningful behavioral tests with `node --test` (Node 22 or later).

## Evidence and limitations

Basis: RFC 2, 3b1a: end-around carry folding; 3b1b: order-dependence discussion.

Implements the basic folding sum only; not the underspecified grouped, shifted extension. It intentionally exposes undetected swaps. UTF-8 text is a modern input convention.

Legacy proposal, not a current Internet standard. The archived document reports its first page missing. This independent educational project is not affiliated with the IETF or RFC Editor.

## Publish

GitHub Pages serves `main` at `/`; assets use relative URLs. `.nojekyll` disables Jekyll processing.
See [PROMOTION.md](PROMOTION.md) for a classroom activity and sharing copy.
Original project code is MIT licensed; referenced RFCs retain their respective notices.

## Optional cloud CI

Tests run locally before publication. `ci/test.yml` is an inactive Actions template; activating it under `.github/workflows/` requires a GitHub credential with workflow permission.
