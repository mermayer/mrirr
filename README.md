# MRIRR

### Minimal Roon IR Remote

**A tactile Roon controller, learned IR remote and Squeezebox audio endpoint in one compact ESP32-S3 device.**

[![Firmware](https://img.shields.io/github/v/release/mermayer/mrirr?label=firmware)](https://github.com/mermayer/mrirr/releases)
[![Web installer](https://img.shields.io/badge/web%20installer-open-15845d)](https://mermayer.github.io/mrirr/)
[![ESP-IDF](https://img.shields.io/badge/ESP--IDF-v6.0.1-cc3d3d)](https://github.com/espressif/esp-idf)

<p align="center">
  <img src="assets/product/mrirr-artwork.png" alt="MRIRR with album artwork on its round display" width="860">
</p>

MRIRR combines physical buttons, an infrared remote, local Roon control,
Squeezebox playback and two displays. It is designed for everyday listening,
with dedicated workflows for music, radio, playlists and long-form audiobooks.

The device communicates directly with services on the local network. Normal
operation does not require a cloud account, phone app or companion process.

> [!IMPORTANT]
> **Roon authorization is required after the first installation.** Open
> **Roon > Settings > Extensions**, find the extension with creator
> **Senior Coder** and name **Minimal Roon IR Remote**, then select
> **Enable**. MRIRR cannot load zones or control Roon until this extension has
> been authorized.

> This public repository is the official distribution and documentation area
> for MRIRR. It contains the browser installer, compiled firmware releases,
> checksums, hardware documentation and presentation images. Firmware source
> code and internal development material are intentionally not included.

## Start here

- [Install or recover MRIRR in the browser](https://mermayer.github.io/mrirr/)
- [USB and driver troubleshooting](https://mermayer.github.io/mrirr/#usb-help)
- [Download firmware and read release notes](https://github.com/mermayer/mrirr/releases)
- [Open the hardware and wiring reference](hardware/README.md)
- [Read about Factory and OTA images](firmware/README.md)

The current **stable release** is `0.4.1` for the documented ESP32-S3 N16R8
reference hardware. Existing MRIRR devices can install it through the signed
internet update or a local OTA upload without replacing their configuration.

## First-time setup

1. Open the [MRIRR web installer](https://mermayer.github.io/mrirr/) in a
   current desktop version of Chrome or Edge.
2. Connect the ESP32-S3 with a USB data cable and install the Factory image.
3. After restart, join `MRIRR-Setup-XXXXXX` with password `mrirr-setup`, then
   open `http://192.168.4.1/` and enter the local Wi-Fi credentials.
4. Open **Settings > Extensions** in Roon.
5. Locate **Minimal Roon IR Remote** by **Senior Coder** and select
   **Enable**.
6. Open the MRIRR web interface, enter the Roon Core address when required,
   and load the available zones.

The authorization is stored by Roon and normally only has to be granted once.
If MRIRR reports that Roon is waiting for approval, return to the Extensions
page and confirm that this entry is enabled:

| Roon extension field | Required value |
| --- | --- |
| Creator | `Senior Coder` |
| Name | `Minimal Roon IR Remote` |

## What MRIRR does

### Direct Roon control

MRIRR discovers and controls Roon zones over the local network. The web
interface shows live zone state, title and artist information and provides
transport tests. One detected zone can be selected as the source for the
device displays.

### Squeezebox audio endpoint

The ESP32-S3 also appears to Roon as a Squeezebox-compatible playback device.
Audio is sent over I2S to a PCM5102 DAC. The current configuration deliberately
uses a 44.1 kHz output target so Roon performs any required resampling before
the stream reaches the device.

### Ten programmable slots

Ten independent slots connect a physical or learned IR button with an action.
Available actions include:

- play, pause and play/pause toggle
- previous and next
- volume up and volume down with a configurable step size
- live radio and playlist playback
- optional shuffle for playlists
- audiobook transfer and audiobook/music queue swap

Each slot can target a specific Roon zone. Configured buttons can also be
tested directly from the browser.

### Buttons and learned IR commands

Up to six enclosure buttons are read through a PCF8574T I/O expander using its
interrupt line with guarded polling as a fallback. All ten slots can also
learn and recognise infrared commands, allowing an existing remote control to
operate MRIRR without changing its original layout.

### Audiobook handoff

MRIRR includes a queue workflow made for switching between loudspeaker and
headphone listening without losing the audiobook position:

| Zone | Purpose |
| --- | --- |
| `MRIRR` | Active playback zone |
| `AudiobooksKH` | Current audiobook queue and listening position |
| `ParkingQueue` | Temporarily parked music queue |

In book mode, pausing can update `AudiobooksKH` with the current queue and
position. A later play command restores that state before playback resumes.
The swap action parks music in `ParkingQueue`, moves the audiobook to `MRIRR`
and reverses that transfer when returning to music. The four-digit display
keeps the active `BUCH` or `MUSI` state visible.

### Artwork, clock and status displays

The round GC9A01 display shows artwork obtained from Roon while the selected
display zone is playing. When playback has been inactive for 30 seconds, it
returns to the station clock or switches off, depending on the saved setting.
It also provides boot and version feedback.

The TM1637 display gives persistent, glanceable status feedback such as the
book/music mode and Roon volume values. Day and night brightness can be
configured locally.

<table>
  <tr>
    <td width="50%"><img src="assets/product/mrirr-clock.png" alt="MRIRR showing its station clock"></td>
    <td width="50%"><img src="assets/product/mrirr-buttons.png" alt="MRIRR enclosure controls and status displays"></td>
  </tr>
  <tr>
    <td align="center"><strong>Station clock</strong></td>
    <td align="center"><strong>Tactile controls and persistent status</strong></td>
  </tr>
</table>

## Local web configuration

The responsive configuration interface is served by MRIRR itself. It supports
German and English, includes dark and light themes and does not depend on an
internet connection. Configuration can be exported as JSON and restored later;
after a restore, the interface clearly requests the required reboot instead of
restarting the device unexpectedly.

All screenshots below were rendered from the real MRIRR web interface with
fictional demonstration data. They contain no private network information or
Roon credentials.

### Roon and zones

Select the display zone, inspect live metadata and test zone transport
commands.

![Roon and zone configuration](assets/web-ui/01-roon-zones.png)

### Slots and infrared control

Configure the ten action slots, assign physical buttons, learn IR commands and
test each mapping from the browser.

![Slot and IR configuration](assets/web-ui/02-slots-ir.png)

### Displays

Configure the round artwork display, idle behaviour, station clock and
brightness levels.

![Display configuration](assets/web-ui/03-displays.png)

### System, diagnostics and backup

Inspect live firmware, uptime, memory, PSRAM, network and hardware-service
status. Download privacy-safe diagnostics, export or restore the configuration,
restart MRIRR and open the separate firmware-management page.

![MRIRR system information, diagnostics and backup](assets/web-ui/04-system-backup.png)

## Hardware

The reference assembly uses the following components:

| Component | Function |
| --- | --- |
| ESP32-S3 WROOM-1 N16R8 | Controller, Wi-Fi, 16 MB flash and 8 MB PSRAM |
| PCM5102 | Stereo I2S DAC |
| GC9A01, 240 x 240 | Round colour artwork and clock display |
| TM1637, four digit | Persistent status display |
| PCF8574T | Button input expansion |
| IR receiver | Learned remote-control input |
| Enclosure buttons | Up to six direct slot inputs; the pictured prototype uses four |

All connected modules in the reference build operate at 3.3 V. See
[hardware and wiring](hardware/README.md) for the complete pin assignment,
power notes and the English wiring diagram.

## System overview

```text
Roon Core
   |-- local Roon control and metadata --> MRIRR web UI, slots and displays
   |-- Squeezebox audio stream ----------> ESP32-S3 --> I2S --> PCM5102

Buttons --> PCF8574T --|
IR receiver -----------|--> slot actions --> selected Roon zone
```

## Installation and firmware

This public repository provides:

- browser-based first installation and USB recovery
- compiled Factory and OTA images through GitHub Releases
- checksums and bilingual release notes
- hardware documentation and wiring diagrams
- manually started, signed internet updates over HTTPS

The browser installer is intended for current desktop versions of Chrome and
Edge on Windows, macOS and Linux. The install button is enabled only when the
published Factory image and release metadata have passed the release audit.
See [firmware files and releases](firmware/README.md) for image selection,
verification and recovery notes.

The browser installer and public update manifests are published from the
`docs` directory through [GitHub Pages](https://mermayer.github.io/mrirr/).
Compiled firmware remains versioned as immutable GitHub Release assets.

MRIRR never installs an internet update automatically. The user starts the
check and installation from the device's firmware page. Before writing an OTA
image, MRIRR validates the release channel, board identity, expected size,
SHA-256 checksum and firmware signature.

## Privacy and security

Published files must never contain Wi-Fi credentials, Roon tokens, device
backups, private signing keys or other personal information. Release builds
exclude local development credentials, and the private firmware signing key is
never stored on GitHub.

## Project status

MRIRR `0.4.1` is the first stable release. Roon control, Squeezebox playback,
physical and IR inputs, queue workflows, displays, configuration backup,
browser installation and signed OTA updates have been exercised on the
reference device. The version badge at the top shows the current stable
release.

Functional or documentation problems can be reported through GitHub Issues.
Logs and screenshots must be checked for Wi-Fi credentials, IP addresses, Roon
data and other personal information before they are attached publicly.

MRIRR is an independent project and is not affiliated with or endorsed by
Roon Labs. Roon is a trademark of Roon Labs.
