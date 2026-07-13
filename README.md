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
- When a topic title docks in the header, a curved return arrow links back to the forum home so it is not confused with the Baseball Digest Digital home icon.

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

### 1.0.10

- Removed the large Baseball Digest front-page banner and its Start a Discussion/Browse Categories actions.
- Removed the pale/white sidebar footer fade that appeared as a ghost strip above the sidebar footer controls.

### 1.0.9

- Reissued the complete navigation/typography/footer update after only `about.json` reached GitHub in 1.0.8.
- Added topic and profile breadcrumbs beginning with Forum Front Page.
- Made unread topic titles black at 400 weight and Replies/Activity 500 weight.
- Removed Powered by Discourse and the surrounding gold separators.
- Added profile-page gutters and changed the welcome heading to Baseball Digest.

### 1.0.8

- Added clickable breadcrumbs above topic pages and member profiles, beginning with Forum Front Page.
- Added category and current-page context to topic breadcrumbs.
- Added a profile-page gutter so profile content no longer touches the content edge.
- Changed forum-index topic titles to dark text at font weight 400.
- Set Replies and Activity headings and values to font weight 500 without changing their colors.
- Removed the Powered by Discourse promotion and its final separator.
- Changed the homepage welcome heading to Baseball Digest.

### 1.0.7

- Increased contrast for administrator and community sidebar headings and links on the deep-navy background.
- Changed category/tag dropdown text and topic-list column headings from blue to cream/gold on dark surfaces.
- Changed the topic notification explanation below posts from blue to cream, with gold links.
- Replaced the native docked-topic house icon with a curved left return arrow that leads to the forum home.

### 1.0.6

- Changed administrator labels and prompts from pale cream to dark navy on the cream admin background.
- Restored comfortable left and right padding inside the administrator content panel.
- Added a smaller responsive admin padding value for narrow devices.

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
