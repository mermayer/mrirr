# Firmware releases

Compiled firmware is distributed through GitHub Releases. Every approved
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

## OTA image

`mrirr-ota` is used only for updating an already installed MRIRR device. It does
not replace the bootloader or partition table and retains the device settings.

Never upload a Factory image through the device's normal OTA page.

## Verification

Compare the SHA-256 checksum before a manual installation. Signed firmware will
become mandatory before internet updates are enabled.
