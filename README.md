# Seerah Timeline Website

This project is a static website timeline of key life events of Prophet Muhammad (SAWW), with:

- Infographic-style winding timeline
- Numbered clickable event points
- Popup dialog with full event details and sources
- Kid-friendly local SVG clipart for important places/events
- Hand-drawn style custom SVG map (no external map tiles)
- Vertical journey-style map aligned with timeline flow
- Clickable map points for each Seerah event
- Important locations in present-day Saudi Arabia
- Arabic-inspired geometric background and decorative strip
- Kid-friendly character cliparts (desert majlis and camel journey scenes)
- Child-friendly event summaries
- Source links for each timeline item

## Run

1. Open `index.html` directly in a browser.
2. For best image loading behavior, serve as a local site:
   - `npx serve D:\\Seerah`
   - or any local static file server you prefer

## Edit Timeline Data

All event data is in:

- `assets/js/events.js`
- Clipart mappings are in `assets/js/app.js` (`EVENT_CLIPARTS` and `PHASE_CLIPARTS`).

Each event includes:

- `yearDisplay`, `dateLabel`, `hijri`
- `location`, `lat`, `lng`
- `summary`
- `sources`

## Notes

- Some early historical dates are approximate and can differ by source.
- The site intentionally uses place/map visuals only.
- If you want Urdu text, add an Urdu copy field in `events.js` and render it in `app.js`.
