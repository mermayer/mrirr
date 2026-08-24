const translations = {
    de: {
        page_title: 'MRIRR Firmware Installer', brand_subtitle: 'Firmware & Wiederherstellung', preparing: 'Vorbereitung', ready: 'Bereit',
        title: 'Firmware installieren', intro: 'Verbinde MRIRR per USB mit diesem Computer. Die Installation erfolgt direkt im Browser.',
        release_label: 'Verfuegbare Version', release_notes: 'Versionshinweise', test_channel: 'Testkanal', test_channel_notice: 'Dies ist eine oeffentliche Testversion fuer die dokumentierte Referenzhardware, noch keine stabile Freigabe.', install_button: 'MRIRR installieren', unsupported: 'Dieser Browser unterstuetzt keine serielle Installation. Bitte Chrome oder Edge verwenden.',
        https_required: 'Der Installer muss ueber eine sichere HTTPS-Adresse geoeffnet werden.', not_released: 'Das Factory-Image ist noch nicht fuer Tests freigegeben.',
        install_ready: 'Das Factory-Image ist freigegeben. MRIRR kann installiert werden.', compatibility: 'Systempruefung', secure_connection: 'Sichere Verbindung',
        serial_access: 'Serieller Browserzugriff', firmware_release: 'Firmwarefreigabe', browser_note: 'Unterstuetzt werden aktuelle Desktop-Versionen von Chrome und Edge unter Windows, macOS und Linux.',
        check_ok: 'bereit', check_missing: 'nicht verfuegbar', check_waiting: 'ausstehend', theme_light: 'Helles Design aktivieren', theme_dark: 'Dunkles Design aktivieren',
        steps_title: 'Installation in fuenf Schritten', steps_intro: 'Ein USB-Datenkabel und ein kompatibler Browser genuegen.', step_1_title: 'USB verbinden',
        step_1_text: 'MRIRR direkt mit dem Computer verbinden.', step_2_title: 'Installer starten', step_2_text: 'Installieren waehlen und den seriellen Anschluss bestaetigen.',
        step_3_title: 'Firmware schreiben', step_3_text: 'Das USB-Kabel waehrend des Vorgangs nicht trennen.', step_4_title: 'WLAN einrichten',
        step_4_text: 'Nach dem Neustart den gefuehrten Netzwerkdialog abschliessen.', step_5_title: 'In Roon freigeben',
        step_5_text: 'Unter Einstellungen > Erweiterungen "Minimal Roon IR Remote" von "Senior Coder" aktivieren.',
        roon_activation_title: 'Roon-Aktivierung ist erforderlich', roon_activation_text: 'Ohne diese einmalige Freigabe kann MRIRR keine Zonen laden oder steuern.',
        roon_creator: 'Ersteller', roon_extension_name: 'Name', recovery_title: 'Recovery mit BOOT und RESET',
        recovery_intro: 'Nur erforderlich, wenn der ESP32-S3 nicht automatisch erkannt wird.', recovery_1: 'BOOT gedrueckt halten.', recovery_2: 'RESET kurz druecken und loslassen.',
        recovery_3: 'BOOT loslassen.', recovery_4: 'Den Installer erneut starten.', erase_warning: 'Vollstaendiges Loeschen entfernt WLAN-, Roon-, Slot- und IR-Einstellungen.',
        downloads_title: 'Firmwaredateien', downloads_intro: 'Factory fuer Erstinstallation und Recovery, OTA nur fuer bereits installierte Geraete.', file: 'Datei', purpose: 'Verwendung',
        checksum: 'SHA-256', factory_purpose: 'Erstinstallation / Recovery', ota_purpose: 'Lokales oder signiertes Internet-Update', download: 'Download',
        hardware_title: 'Hardware und Verdrahtung', hardware_intro: 'Referenzaufbau mit ESP32-S3, PCM5102, GC9A01, TM1637, PCF8574T und IR-Empfaenger.',
        wiring_alt: 'MRIRR Schaltbild', open_wiring: 'Schaltbild oeffnen', repository: 'GitHub-Repository', releases: 'Firmware-Releases', footer_note: 'Firmware-Verteilung und Wiederherstellung'
    },
    en: {
        page_title: 'MRIRR Firmware Installer', brand_subtitle: 'Firmware & recovery', preparing: 'Preparing', ready: 'Ready',
        title: 'Install firmware', intro: 'Connect MRIRR to this computer by USB. Installation runs directly in the browser.',
        release_label: 'Available version', release_notes: 'Release notes', test_channel: 'Test channel', test_channel_notice: 'This is a public test build for the documented reference hardware, not yet a stable release.', install_button: 'Install MRIRR', unsupported: 'This browser does not support serial installation. Please use Chrome or Edge.',
        https_required: 'The installer must be opened from a secure HTTPS address.', not_released: 'The Factory image has not been approved for testing yet.',
        install_ready: 'The Factory image is approved. MRIRR is ready to install.', compatibility: 'System check', secure_connection: 'Secure connection',
        serial_access: 'Browser serial access', firmware_release: 'Firmware approval', browser_note: 'Current desktop versions of Chrome and Edge on Windows, macOS and Linux are supported.',
        check_ok: 'ready', check_missing: 'unavailable', check_waiting: 'pending', theme_light: 'Enable light theme', theme_dark: 'Enable dark theme',
        steps_title: 'Installation in five steps', steps_intro: 'A USB data cable and a compatible browser are all you need.', step_1_title: 'Connect USB',
        step_1_text: 'Connect MRIRR directly to the computer.', step_2_title: 'Start installer', step_2_text: 'Choose Install and confirm the serial port.',
        step_3_title: 'Write firmware', step_3_text: 'Do not disconnect the USB cable during installation.', step_4_title: 'Configure Wi-Fi',
        step_4_text: 'Complete the guided network setup after restart.', step_5_title: 'Authorize in Roon',
        step_5_text: 'In Settings > Extensions, enable "Minimal Roon IR Remote" by "Senior Coder".',
        roon_activation_title: 'Roon authorization is required', roon_activation_text: 'MRIRR cannot load or control zones until this one-time authorization is granted.',
        roon_creator: 'Creator', roon_extension_name: 'Name', recovery_title: 'Recovery with BOOT and RESET',
        recovery_intro: 'Only required when the ESP32-S3 is not detected automatically.', recovery_1: 'Press and hold BOOT.', recovery_2: 'Press and release RESET.',
        recovery_3: 'Release BOOT.', recovery_4: 'Start the installer again.', erase_warning: 'A full erase removes Wi-Fi, Roon, slot and IR settings.',
        downloads_title: 'Firmware files', downloads_intro: 'Factory is for first installation and recovery. OTA is only for devices already running MRIRR.', file: 'File', purpose: 'Purpose',
        checksum: 'SHA-256', factory_purpose: 'First installation / recovery', ota_purpose: 'Local or signed internet update', download: 'Download',
        hardware_title: 'Hardware and wiring', hardware_intro: 'Reference build with ESP32-S3, PCM5102, GC9A01, TM1637, PCF8574T and IR receiver.',
        wiring_alt: 'MRIRR wiring diagram', open_wiring: 'Open wiring diagram', repository: 'GitHub repository', releases: 'Firmware releases', footer_note: 'Firmware distribution and recovery'
    }
};

let language = localStorage.getItem('mrirrInstallerLanguage') === 'en' ? 'en' : 'de';
let release = null;

function t(key) {
    return translations[language][key] || translations.de[key] || key;
}

function applyLanguage(nextLanguage, persist = true) {
    language = nextLanguage === 'en' ? 'en' : 'de';
    document.documentElement.lang = language;
    document.title = t('page_title');
    if (persist) localStorage.setItem('mrirrInstallerLanguage', language);
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        element.alt = t(element.dataset.i18nAlt);
    });
    document.querySelectorAll('[data-language]').forEach(button => {
        const active = button.dataset.language === language;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    updateThemeLabel();
    updateReleaseUi();
}

function currentTheme() {
    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function updateThemeLabel() {
    const button = document.getElementById('theme-toggle');
    const label = t(currentTheme() === 'dark' ? 'theme_light' : 'theme_dark');
    button.setAttribute('aria-label', label);
    button.title = label;
}

function toggleTheme() {
    const theme = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('mrirrInstallerTheme', theme);
    updateThemeLabel();
}

function setCheck(id, ok, pending = false) {
    const element = document.getElementById(id);
    element.className = `check ${pending ? 'waiting' : ok ? 'ok' : 'error'}`;
    element.textContent = t(pending ? 'check_waiting' : ok ? 'check_ok' : 'check_missing');
}

function formatSize(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return '';
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function configureDownload(id, url) {
    const link = document.getElementById(id);
    if (url) {
        link.href = url;
        link.classList.remove('disabled');
        link.removeAttribute('aria-disabled');
    } else {
        link.removeAttribute('href');
        link.classList.add('disabled');
        link.setAttribute('aria-disabled', 'true');
    }
}

function updateReleaseUi() {
    if (!release) return;
    const available = release.available === true;
    document.getElementById('release-version').textContent = available ? release.version : t('check_waiting');
    document.getElementById('release-date').textContent = release.published || '';
    document.getElementById('factory-name').textContent = release.factory?.filename || 'mrirr-factory-current.bin';
    document.getElementById('ota-name').textContent = release.ota?.filename || 'mrirr-ota-not-released.bin';
    document.getElementById('factory-sha').textContent = release.factory?.sha256 || '-';
    document.getElementById('ota-sha').textContent = release.ota?.sha256 || '-';

    const testChannel = release.channel === 'test';
    const channelBadge = document.getElementById('release-channel');
    channelBadge.hidden = !testChannel;
    channelBadge.textContent = testChannel ? t('test_channel') : '';
    document.getElementById('test-channel-note').hidden = !testChannel;

    const releaseNotes = document.getElementById('release-notes');
    if (release.release_notes) {
        releaseNotes.href = release.release_notes;
        releaseNotes.hidden = false;
    } else {
        releaseNotes.removeAttribute('href');
        releaseNotes.hidden = true;
    }

    const factoryUrl = available ? `firmware/${release.factory.filename}` : '';
    configureDownload('factory-download', factoryUrl);
    configureDownload('ota-download', available ? release.ota?.url : '');

    const installer = document.getElementById('web-installer');
    const installButton = document.getElementById('install-button');
    const badge = document.getElementById('release-badge');
    const status = document.getElementById('install-status');
    if (available) {
        installer.setAttribute('manifest', release.manifest || 'manifest.json');
        installButton.disabled = false;
        badge.classList.add('ready');
        badge.querySelector('[data-i18n]').dataset.i18n = 'ready';
        badge.querySelector('[data-i18n]').textContent = t('ready');
        status.dataset.i18n = 'install_ready';
        status.textContent = t('install_ready');
        status.classList.add('ready');
    } else {
        installer.removeAttribute('manifest');
        installButton.disabled = true;
        badge.classList.remove('ready');
        badge.querySelector('[data-i18n]').dataset.i18n = 'preparing';
        badge.querySelector('[data-i18n]').textContent = t('preparing');
        status.dataset.i18n = 'not_released';
        status.textContent = t('not_released');
        status.classList.remove('ready');
    }
    setCheck('firmware-status', available, !available);
}

async function loadRelease() {
    try {
        const response = await fetch('release.json', { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        release = await response.json();
    } catch (_) {
        release = { available: false, factory: {}, ota: {} };
    }
    updateReleaseUi();
}

document.querySelector('[data-action="theme"]').addEventListener('click', toggleTheme);
document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

setCheck('secure-status', window.isSecureContext);
setCheck('serial-status', 'serial' in navigator);
setCheck('firmware-status', false, true);
applyLanguage(language, false);
loadRelease();
