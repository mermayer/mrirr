# Web installer firmware

The approved, versioned `mrirr-factory-v*.bin` file in this directory is
published only for GitHub Pages and the browser installer. OTA images remain
immutable GitHub Release assets.

The installer reads `../release.json` and enables installation only when its
`available` field is true. Release staging sets that field only after the
Factory image, signature, checksums, privacy checks and recovery package have
passed the release audit.

The PolyForm licence, MRIRR copyright notice and third-party notices are
available in [`../legal`](../legal/).
