# MRIRR

**Minimal Roon IR Remote** is an ESP32-S3 based Roon controller and
Squeezebox-compatible audio player.

This private repository is the distribution area for:

- end-user installation and recovery instructions
- the browser-based firmware installer
- hardware information and wiring diagrams
- compiled Factory and OTA firmware in GitHub Releases
- checksums and release notes

Firmware source code is intentionally not part of this repository.

## Current status

The distribution structure is being prepared for testing. No public Factory
firmware has been approved yet. The web installer therefore remains locked
until an audited image without private Wi-Fi credentials is available.

## Web installer

The installer is prepared for this address:

```text
https://mermayer.github.io/mrirr/
```

GitHub Pages is not active yet because the current account plan does not
support Pages for a private repository. The repository remains private. The
site can be enabled from the `main` branch and `/docs` folder after a plan
upgrade, or after a separate public installer repository has been approved.

The installer is designed for current desktop versions of Chrome and Edge on
Windows, macOS and Linux.

## Documentation

- [Hardware and wiring](hardware/README.md)
- [Firmware files and releases](firmware/README.md)

## Privacy and security

Published files must never contain Wi-Fi credentials, Roon tokens, device
backups, private signing keys or other personal information. The private
firmware signing key is never stored on GitHub.
