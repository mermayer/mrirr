# MRIRR Third-Party Notices

MRIRR 0.5.0 contains MRIRR-authored application code together with the
following third-party components. Those components retain their own licence
terms; the PolyForm Noncommercial License 1.0.0 does not replace them.

## Active firmware dependencies

### ESP-IDF 6.0.1 and Espressif managed components

Copyright Espressif Systems (Shanghai) CO LTD and contributors.

The firmware is built with ESP-IDF 6.0.1 and the managed components ESP-DSP
1.8.2, ESP JPEG 1.3.1, ESP LCD GC9A01 1.2.0, mDNS 1.11.1 and CMake Utilities
0.5.3. The project-level licence for these Espressif works is Apache License
2.0. Individual ESP-IDF subcomponents retain the notices and licence terms
provided by Espressif in the corresponding ESP-IDF distribution.

Full text: `LICENSES/Apache-2.0.txt`

Source and licence information:
https://github.com/espressif/esp-idf/tree/v6.0.1

### cJSON

Copyright (c) 2009-2017 Dave Gamble and cJSON contributors.

Licence: MIT

Full text: `LICENSES/MIT-cJSON.txt`

### libFLAC

Copyright (C) 2000-2009 Josh Coalson.
Copyright (C) 2011-2025 Xiph.Org Foundation.

Licence: BSD 3-Clause

Full text: `LICENSES/BSD-3-Clause-libFLAC.txt`

### libogg

Copyright (c) 2002 Xiph.org Foundation.

Licence: BSD 3-Clause

Full text: `LICENSES/BSD-3-Clause-libogg.txt`

## Compatibility names

Roon, Squeezebox, WLED, ESP32 and related names may be trademarks of their
respective owners. They are used only to describe interoperability. MRIRR is
not affiliated with or endorsed by those owners.

## Excluded legacy code

The MRIRR 0.5.0 firmware image does not contain the former Squeezelite runtime,
AirPlay/RAOP engine or WLED AudioReactive implementation. Historical reference
directories in the private development workspace are not compiled or
distributed with the firmware.
