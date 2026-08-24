# Firmware releases

Compiled firmware is distributed through
[GitHub Releases](https://github.com/mermayer/mrirr/releases). Every published
release contains:

```text
mrirr-factory-vX.Y.Z.bin
mrirr-ota-vX.Y.Z.bin
SHA256SUMS.txt
release-notes-de.md
release-notes-en.md
```

## Factory image

`mrirr-factory` is used by the web installer for a new device or USB recovery.
It contains the complete flashable image, including bootloader, partition table,
initial OTA data and the application.

A Factory installation can erase existing device settings. Export a
configuration backup first when the device is still reachable.

For a new device, use the
[browser installer](https://mermayer.github.io/mrirr/). It selects the approved
Factory image from the public release metadata and writes the complete flash
layout over USB.

## OTA image

`mrirr-ota` is used only for updating an already installed MRIRR device. It does
not replace the bootloader or partition table and retains the device settings.

Never upload a Factory image through the device's normal OTA page.

MRIRR supports two user-initiated update paths:

- upload the matching OTA file from the local firmware page
- check the signed public manifest over HTTPS and install the offered image

Internet updates are never installed automatically. During an online update,
MRIRR enters maintenance mode, stops normal services, displays `UPdt` / update
status and restarts after the image has been written.

## Verification

Compare the SHA-256 checksum before a manual installation. Release builds use
signed application images. The online updater additionally validates project,
board, release channel, version, image size and SHA-256 before installation.

The regular public manifest follows the **stable channel**. Devices running the
last public release candidate receive a one-time signed transition to `0.4.2`;
after restart they permanently follow the stable manifest.

Factory firmware starts a reduced Wi-Fi setup interface when no credentials
are stored. If saved credentials do not produce an IP address within 45
seconds, MRIRR automatically restores the setup access point so they can be
corrected without another USB installation.
