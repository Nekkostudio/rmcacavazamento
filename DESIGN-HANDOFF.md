# 537fd2d4-9855-47a7-8008-7dfbc422dceb implementation handoff

This archive is the source of truth for turning the design into production code. Start from `index.html`, then preserve the visual system, responsive behavior, and interactions found in the exported files.

## Implementation target
- Build production UI from the exported design, not a loose reinterpretation.
- Preserve typography scale, spacing rhythm, color tokens, border radii, shadows, motion timing, and component states.
- Replace static placeholders only when the target app has real data or functional equivalents.
- Keep generated product UI free of Open Design chrome, preview labels, or design-process annotations.
- Treat this handoff as a visual contract: if implementation choices conflict, match the exported pixels and behavior first, then refactor internals.

## Source map
- Primary entry: `index.html`
- HTML screens detected: 1
- Stylesheets detected: 1
- Script/component files detected: 1
- Supporting assets detected: 96

## Responsive contract
Validate the implementation across this 2025–2026 viewport matrix:
- Mobile compact: 360×800
- Mobile standard: 390×844
- Mobile large: 430×932
- Foldable / small tablet: 600×960
- Tablet portrait: 820×1180
- Tablet landscape: 1024×768
- Laptop: 1366×768
- Desktop: 1440×900
- Wide desktop: 1920×1080

For responsive web exports, treat these as a modern breakpoint system for one adaptive web experience, not three fixed screenshots. Do not split responsive web into unrelated native app screens unless the project explicitly includes native targets. Use semantic layout thresholds, fluid `clamp()` type/spacing, and container queries where component width matters more than viewport width. Preserve any CSS media queries, container queries, fluid `clamp()` scales, and layout changes already present in the exported files.

## Design fidelity contract
- Extract reusable tokens before writing components: background, surface, foreground, muted text, border, accent, radius, shadow, spacing, type scale, and motion duration/easing.
- Map product screens, in-app modules/components, optional landing page, and optional OS widget surfaces before coding. Keep these surfaces separate in the target architecture.
- Match layout geometry: max-widths, gutters, grid columns, card proportions, sticky/fixed elements, and viewport-specific navigation.
- Preserve real copy, labels, and data shown in the export. Do not replace specific text with generic marketing filler.
- Preserve interactive affordances: hover, focus, pressed, disabled, loading, validation, copy/share, tab/accordion, modal/sheet, and keyboard states where present.
- Preserve accessibility semantics when converting: headings stay hierarchical, controls remain buttons/links/inputs, focus states stay visible.
- Do not keep prototype-only annotations, frame labels, or Open Design chrome in the production UI.

## CJX-ready UX contract
- Use `DESIGN-MANIFEST.json` as the machine-readable map for screens, app modules, OS widgets, landing pages, tokens, interactions, and viewport checks.
- Screen-file-first: when multiple user-facing surfaces exist, implement each HTML screen as its own route/file. Treat `index.html` as a launcher/overview when the manifest marks it that way, not as a combined final UI.
- If `landing.html`, app screens, platform screens, or OS widget files exist, preserve those boundaries in the target app instead of merging them into one page.
- A single self-contained `index.html` is acceptable only when the export truly contains one user-facing screen and its CSS/JS are structured enough to extract tokens, components, states, and behavior.
- If separate `css/` or `js/` files exist, treat them as source of truth for token/component/interactions before porting to React, Vue, SwiftUI, Compose, or another target stack.
- In-app modules/components are product UI blocks inside the app. OS widgets are home-screen/lock-screen/quick-access surfaces outside the app. Do not merge those concepts.

## Color and brand contract
- Use the exported design tokens and product/domain context as the color source of truth.
- Do not introduce warm beige / cream / peach / pink / orange-brown background washes unless they are already explicit brand/reference colors in the export.
- A stylesheet or design/token file was detected; inspect it for canonical color variables before choosing framework theme tokens.

## Implementation sequence for AI coding tools
1. Open `index.html` and `DESIGN-MANIFEST.json`; identify every screen file, launcher/overview file, app module, and interaction before coding.
2. If multiple HTML screens exist, map them to separate routes/surfaces first; do not merge `landing.html`, product app screens, platform screens, or OS widgets into one route.
3. Extract a token table from CSS/root styles and inline styles before building framework components.
4. Build product screens and domain-specific in-app modules from largest layout regions down to controls; avoid starting with isolated atoms that lose spatial intent.
5. Port responsive behavior across the modern viewport matrix and test each semantic breakpoint before cleanup.
6. Port interactions and states, then replace static placeholders only with real app data or functional equivalents.
7. Keep optional landing page and OS widget surfaces as separate surfaces if present.
8. Compare final screenshots against the export at 360×800, 390×844, 430×932, 820×1180, 1024×768, 1366×768, 1440×900, and 1920×1080 before declaring done.

## Entry points
- `index.html`

## Styles
- `css/styles.css`

## Scripts/components
- `js/main.js`

## Assets and supporting files
- `ms6wi2cf-logo-do-projeto.png`
- `ms6wi2d4-favicon.png`
- `ms6wjgd5-image.png`
- `ms6y7ok9-image.png`
- `ms6y9z4f-image.png`
- `ms6ydv43-image.png`
- `ms6ylogj-magnific_melhore-a-qualidade-da-im_ohoR6xr829.png`
- `ms6yxz96-image.png`
- `ms6z2hix-magnific_melhore-a-qualidade-da-im_cDc7SQz0eP.png`
- `ms6z4zyn-image.png`
- `ms6za1hu-image.png`
- `ms6zh6k9-logo-nav-bar.png`
- `ms706gyc-image.png`
- `ms7082fz-image.png`
- `ms70duv2-image.png`
- `ms70i4j0-image.png`
- `ms70k4gq-image.png`
- `ms70l3qb-image.png`
- `ms70m7nh-whatsapp.svg`
- `ms70npnb-image.png`
- `ms70psrs-image.png`
- `ms70vzs4-image.png`
- `ms70xeez-image.png`
- `ms70zo7o-image.png`
- `ms716wsu-image.png`
- `ms7180yj-image.png`
- `ms7ngabu-whats-app.svg`
- `ms7ngp21-image.png`
- `ms7nkog3-image.png`
- `ms7nm59i-image.png`
- `ms7nozwm-image.png`
- `ms7nsl1x-image.png`
- `ms7ntbde-image.png`
- `ms7qcbt1-magnific_melhore-a-qualidade-da-im_YVYGbk1WeC.png`
- `ms7qd20m-magnific_melhore-a-qualidade-da-im_swsxVDUl8e.png`
- `ms7qehkr-magnific_melhore-a-qualidade-da-im_iAi9ah63uK.png`
- `ms7qf60c-magnific_melhore-a-qualidade-da-im_ohodU7p829.png`
- `ms7qio81-magnific_melhore-a-qualidade-da-im_cDcnLbE0eP.png`
- `ms7ql4aa-image.png`
- `ms7qwhyh-image.png`
- `ms7r1sie-image.png`
- `ms7rcroh-image.png`
- `ms7rgmdk-image.png`
- `ms7rkwf6-magnific_melhore-a-qualidade-da-im_8v8Bf3yIrU.png`
- `ms7rnfcf-magnific_melhore-a-qualidade-da-im_swsxVDUl8e-_1_.png`
- `ms7rpnii-image.png`
- `ms7rr1bb-image.png`
- `ms7rw3wr-image.png`
- `ms7s1188-image.png`
- `ms7s1o2m-image.png`
- `ms7s3k1e-image.png`
- `ms7s4k9x-image.png`
- `ms7s5c6z-image.png`
- `ms7s6rcf-image.png`
- `ms7ssfgg-image.png`
- `ms7st7cx-image.png`
- `ms7sxsnz-image.png`
- `ms7szdwa-image.png`
- `ms7t1s1v-image.png`
- `ms7t2e2a-gps.svg`
- `ms7t2v0q-image.png`
- `ms7t40dd-image.png`
- `ms7tqwgo-image.png`
- `ms7ts3wg-magnific_melhore-a-qualidade-da-im_iAi9ah63uK-_1_.png`
- `ms7tshrr-image.png`
- `ms7tt3wb-magnific_melhore-a-qualidade-da-im_YVYGbk1WeC-_1_.png`
- `ms7tvafx-image.png`
- `ms7ty97g-image.png`
- `ms7ud7x9-image.png`
- `ms7ufhc4-vazamento.svg`
- `ms7uq3oq-image.png`
- `ms7urwsk-image.png`
- `ms95ncz0-image.png`
- `ms96bm0a-image.png`
- `msapgllr-image.png`
- `msaph9xy-image.png`
- `msapjlw2-image.png`
- `msapnjvt-image.png`
- `msapr3lm-image.png`
- `msapriv1-image.png`
- `msapwdf0-image.png`
- `msaq0bof-image.png`
- `msaq27ud-image.png`
- `msaq4upu-image.png`
- `msaqa4qq-image.png`
- `msaqdkyc-image.png`
- `msaqgt9m-image.png`
- `msaqjgii-image.png`
- `msaqm604-image.png`
- `msaqvkg4-image.png`
- `msaqxtjq-image.png`
- `msaqyq41-image.png`
- `msar82es-image.png`
- `msdhyfou-image.png`
- `msdi14c9-image.png`
- `msdi2j0d-image.png`

## Coding checklist for AI tools
1. Inspect `index.html` and `DESIGN-MANIFEST.json` first and identify reusable components before coding.
2. Implement each user-facing screen file as its own route/surface; keep launcher, landing, app, platform, and OS widget files separate.
3. Extract design tokens into the target stack: colors, type scale, spacing, radius, shadows, and motion.
4. Implement layout with real 2025–2026 responsive breakpoints, fluid type/spacing, and container-query-aware component behavior; test with no horizontal overflow.
5. Preserve interactive controls, hover/focus/pressed states, form behavior, validation, and copy actions where present.
6. Implement domain-specific in-app modules with real states; do not flatten them into generic cards.
7. Keep landing page, product screens, and OS widget/quick-access surfaces separate when present.
8. Confirm the production result visually matches the exported design before refactoring internals.
9. Reject implementation shortcuts that flatten the design into generic cards, generic gradients, placeholder stats, or framework-default typography.
10. If a detail is ambiguous, keep the exported HTML/CSS/JS behavior rather than inventing a new pattern.
