# Baseball Digest Community — Discourse Theme

This is the Communiteq/Discourse implementation of the Baseball Digest forum design proof.
It is a complete Discourse theme, not a phpBB style and not a plugin.

## Install on Communiteq

1. Sign in to `https://forum.baseballdigest.com` as the Discourse administrator.
2. Open **Admin → Appearance → Themes & components → Themes**.
3. Select **Install → From your device**.
4. Upload `baseball-digest-discourse-theme.zip`.
5. Open the installed theme and use **Preview** first.
6. Test the forum index, categories, a topic, the composer, login, profile, search, and mobile view.
7. Make it the default theme only after the preview is satisfactory.
8. Keep the standard Discourse theme installed as a recovery option.

## Header links included

- Baseball Digest logo: `https://baseballdigest.com/`
- Subscribe: `https://join.baseballdigest.com/I3YANEWB`
- Home icon: `https://baseballdigest.com/digital/`
- Profile icon: `/my/activity` (Discourse redirects this to the current member's profile; unauthenticated visitors are asked to log in)
- Community title: `/` (forum home)

The links and displayed text are in `common/after_header.html` and can be edited in the Discourse theme editor after import.

## Design system

- Navy: `#0A2047`
- Deep navy: `#061226`
- Cream: `#F5E9CD`
- Gold: `#D4A83C`
- Dark gold: `#9B7628`
- Red: `#A91F2D`
- Maximum desktop content width: `1180px`

## Scope

Included:

- Baseball Digest logo/Subscribe/Home/Profile row
- Centered Baseball Digest Community title and tagline
- Homepage welcome panel
- Dark navy game-family background
- Cream/gold topic and category panels
- Navy list headers and red/gold action states
- Topic/post, composer, modal, search, profile, group, badge, sidebar, form and footer styling
- Desktop, medium and small-device behavior
- Theme screenshots shown in Discourse's theme manager

Not included:

- Category creation or permissions
- Keycloak/OpenID Connect configuration
- Darwin CX entitlement checks
- Any server-side plugin or database change

## Maintenance

The theme uses normal Discourse theme files and CSS selectors; it does not replace core Ember templates or authentication behavior. Discourse is updated frequently, so review the theme after major Discourse updates. The standard theme should remain available as a fallback.


## Version 1.0.1
- Removed the duplicate secondary logo row.
- Removed the subscribe button from the custom masthead.
- Added Baseball Digest home and profile shortcut icons into the top Discourse header row.
- Hid the duplicate native avatar icon to avoid two profile icons.
- Adjusted the header color to better match the navy site background.


## Version 1.0.2
- Moved the header shortcut JavaScript into the current Discourse API initializer path.
- Uses the supported `api.headerIcons` interface to place the Baseball Digest Home and Profile icons in the native header.
- Retains a harmless compatibility placeholder at the previous JavaScript path so browser-based repository replacement does not leave active legacy code.
