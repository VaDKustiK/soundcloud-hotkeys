# SoundCloud Hotkeys

A simple Chrome extension that lets you control SoundCloud web player with global hotkeys — while gaming, working, or browsing.

---

## Features

- Play / Pause the current track
- Next track
- Previous track
- Like / Unlike the currently playing track
- Works with SoundCloud web player
- Hotkeys can be customized at `chrome://extensions/shortcuts`

---

## Default Hotkeys

| Action         | Default Hotkey (Windows) |
|----------------|--------------------------|
| Play / Pause   | Alt + P                  |
| Next Track     | Alt + N                  |
| Previous Track | Alt + B                  |
| Like / Unlike  | Alt + L                  |

> **Note:** You must set hotkeys to **Global** at `chrome://extensions/shortcuts` for them to work when Chrome is not focused. You can also change the hotkeys to any other options at `chrome://extensions/shortcuts` **(works for Google Chrome)**.

---

## Installation

1. Clone or download this repository
2. Open Chrome → go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked** → select the folder of this extension
5. Go to `chrome://extensions/shortcuts` and set the hotkeys to **Global** (optional but recommended)

---

## Usage

1. Open [SoundCloud](https://soundcloud.com) in Chrome (or any other Chromium-based browsers)
2. Play a track
3. Use the hotkeys to control playback or like/unlike the track

---

## Compatibility

- Windows 10/11
- MacOS (hotkeys may use Command/Option instead of Ctrl/Alt)
- Chrome browser (or any other Chromium-based browsers)

---

## Tech notes

- The extension uses DOM-based buttons to control playback and likes.
- SoundCloud updates may occasionally break selectors; you can inspect the page and adjust `content.js` if needed.
- The extension doesn’t use SoundCloud API, so no login or token is required.

---

## License

MIT License