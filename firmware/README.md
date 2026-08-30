# Firmware delivery

MRIRR firmware is delivered through two supported paths. Standalone firmware
BIN files are not offered for public download.

| Device state | Supported path |
| --- | --- |
| New device or USB recovery | [MRIRR web installer](https://mermayer.github.io/mrirr/) |
| Existing MRIRR | Integrated signed online updater under **System > Update firmware** |

## Factory image

`mrirr-factory` is used by the web installer for a new device or USB recovery.
It contains the complete flashable image, including bootloader, partition table,
initial OTA data and the application.

A Factory installation can erase existing device settings. Export a
configuration backup first when the device is still reachable.

For a new device or recovery, use the
[browser installer](https://mermayer.github.io/mrirr/). It selects the approved
Factory image and writes the complete flash layout over USB. The Factory image
is not supplied as a separate download.

## OTA image

The OTA image is used only by an already installed MRIRR. It does not replace
the bootloader or partition table and retains the device settings.

Never upload a Factory image through the device's normal OTA page.

For a regular update, open the local MRIRR web interface and select **System >
Update firmware > Check for updates**. MRIRR retrieves the signed public
manifest over HTTPS and installs the approved image only after validation.

Internet updates are never installed automatically. During an online update,
MRIRR enters maintenance mode, stops normal services, displays `UPdt` / update
status and restarts after the image has been written.

The local firmware-file upload routine remains in the device for controlled
service and development cases. It is not part of the public distribution path,
and this repository does not provide OTA BIN files for manual upload.

## Verification

Release builds use signed application images. The online updater validates the
project, board, release channel, version, image size, SHA-256 checksum and
firmware signature before installation.

The regular public manifest follows the **stable channel**. Devices running the
last public release candidate receive a one-time signed transition to `0.5.0`;
after restart they permanently follow the stable manifest.

Factory firmware starts a reduced Wi-Fi setup interface when no credentials
are stored. If saved credentials do not produce an IP address within 45
seconds, MRIRR automatically restores the setup access point so they can be
corrected without another USB installation.

## Technical note

The browser installer and online updater must retrieve their approved payloads
over HTTPS. Those technical endpoints are intentionally not linked as download
offers. Static GitHub hosting is delivery control, not copy protection: data
that a browser or device can retrieve cannot be made cryptographically
inaccessible to a determined observer without a separate authenticated
distribution service.

## Licence files

The repository includes the unmodified PolyForm Noncommercial License 1.0.0,
the MRIRR copyright notice, and the notices and full texts for third-party
components used by the compiled firmware. These files do not contain firmware
source code or private signing material.
