# Baseball Digest Community — Discourse Theme

This repository contains the Communiteq/Discourse implementation of the Baseball Digest Community forum theme. It is a complete Discourse theme, not a phpBB style and not a server-side plugin.

## Install from Git on Communiteq

1. Sign in to `https://forum.baseballdigest.com` as a Discourse administrator.
2. Open **Admin → Appearance → Themes & components → Themes**.
3. Select **Install → From a Git repository**.
4. Enter `https://github.com/twofus/baseball-digest-discourse-theme.git`.
5. Use the `main` branch.
6. Preview the theme before enabling it by default.
7. Keep a standard Discourse theme installed as a recovery option.

## Update the installed theme

1. Commit and push theme changes to the GitHub repository.
2. Open **Admin → Appearance → Themes & components**.
3. Select **Baseball Digest Community**.
4. Click **Check for updates** and then **Update to latest**.
5. Hard-refresh the forum after the update if cached assets remain visible.

## Header links and controls

- Baseball Digest logo: controlled by the normal Discourse logo setting.
- Search icon: opens and closes the native Discourse search panel without leaving the current page.
- Home icon: `https://baseballdigest.com/digital/`.
- Profile icon: `/my/activity`.
- The large native Discourse welcome/search banner is suppressed by this theme.
- A compact personalized `Welcome back, {name}!` message is displayed in the native header row on screens wider than 600px.
- The native Chat icon and duplicate native profile avatar are hidden in the header.

## Design system

- Deep navy background: `#061226`
- Cream: `#F5E9CD`
- Gold: `#D4A83C`
- Dark gold: `#9B7628`
- Red: `#A91F2D`
- Maximum desktop content width: `1180px`

## Scope

Included:

- Baseball Digest game-family colors and backgrounds
- Personalized native header row
- Search, Digital home and profile controls
- Homepage welcome panel
- Cream/gold topic and category panels
- Red/gold action states
- Topic/post, composer, modal, search, profile, group, badge, sidebar, form and footer styling
- Desktop, medium and small-device behavior

Not included:

- Category creation or permissions
- Keycloak/OpenID Connect configuration
- Darwin CX entitlement checks
- Any server-side plugin or database change

## Maintenance

The theme uses normal Discourse theme files, supported theme API initializers and a supported plugin-outlet connector. Discourse is updated frequently, so review the theme after major Discourse updates. The standard theme should remain available as a fallback.

## Version history

### 1.0.5

- Restyled Search to use the same bordered icon button as Home and Profile.
- Search now opens the native Discourse search panel without navigating away from the current page.
- The Search button changes to a Close icon while the panel is open.
- Search can be closed with the same button, Escape, or by clicking outside the panel.

### 1.0.4

- Removed the incompatible `discourse/ui-kit/d-button` import.
- Replaced the search control with a plain theme link and a CSS-drawn search glyph.
- Removed the value-transformer dependency; CSS continues to suppress the large welcome/search banner.
- Added a defensive check to the personalized header connector.

### 1.0.3

- Removed the large Discourse welcome/search banner.
- Added a compact personalized welcome message to the native logo row.
- Added Search to the Baseball Digest header controls.
- Removed the native Chat icon.
- Removed the large Baseball Digest Community masthead title and description.
- Changed the header/sidebar navy treatment from `#0A2047` to `#061226`.
- Removed the line and shadow beneath the logo row.

### 1.0.2

- Moved the header shortcut JavaScript into the current Discourse API initializer path.
- Used the supported `api.headerIcons` interface for the Baseball Digest header controls.

### 1.0.1

- Removed the duplicate secondary logo row and Subscribe button.
- Added Baseball Digest Home and Profile shortcuts to the native header.
