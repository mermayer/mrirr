# Web installer payload

The approved Factory image in this directory is a technical payload for GitHub
Pages and the browser installer. It is not part of the public download
navigation and must not be linked as a standalone firmware file.

The installer reads `../release.json` and enables installation only when its
`available` field is true. Release staging sets that field only after the
Factory image, signature, checksums, privacy checks and recovery package have
passed the release audit.

Regular updates are delivered only through the online updater integrated into
MRIRR. The local file-upload routine remains available in the device for
controlled service cases, but public OTA downloads are not offered.

The PolyForm licence, MRIRR copyright notice and third-party notices are
available in [`../legal`](../legal/).
