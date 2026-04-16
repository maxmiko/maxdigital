# SEO Audit: index.html

**Date:** 2026-04-14
**Score: 68/100** ⚠️

---

## Title Tag

- [ ] `[Fail]` Too long (~104 chars): `"MaxDigital — Digitālā mārketinga pakalpojumi Latvijā | Google, Meta, Facebook, Instagram, TikTok reklāma"`
- [ ] Target: 50–60 chars.

## Meta Description

- [ ] `[Fail]` Too long (~191 chars): `"MaxDigital — profesionāli digitālā mārketinga pakalpojumi Latvijā. Google Ads, Meta, Facebook, Instagram un TikTok reklāma. 13+ gadu pieredze, 150+ veiksmīgi projekti. Maksims Misiņko, Rīga."`
- [ ] Target: 150–160 chars.

## Headings

- [x] `[Pass]` H1 found: `"Efektīva digitālā reklāma jūsu biznesa izaugsmei Latvijā"` — contains keyword, unique
- [x] `[Pass]` H2s present with keywords (`"Digitālā mārketinga risinājumi jūsu biznesam"`, etc.)
- [x] `[Pass]` Logical hierarchy (H1 → H2 → H3 → H4)

## Images

- [x] `[Pass]` Hero image has descriptive alt text
- [x] `[Pass]` All 5 service card images have alt text
- [ ] `[Warn]` All images load from `images.unsplash.com` — external CDN, no control over availability or WebP optimization

## Structured Data

- [x] `[Pass]` `LocalBusiness` JSON-LD present with name, address, telephone, email, rating, founder
- [x] `[Pass]` `aggregateRating` included (rich snippet eligible)

## Links

- [x] `[Pass]` Internal links to all service pages, blog, about, contact
- [x] `[Pass]` Anchor text is descriptive (not "click here")

## Canonical & Open Graph

- [x] `[Pass]` Canonical URL set: `https://maxdigital.lv/`
- [x] `[Pass]` `og:title`, `og:description`, `og:url`, `og:type`, `og:locale` present
- [ ] `[Fail]` **`og:image` missing** — Facebook/LinkedIn shares will have no preview image
- [ ] `[Fail]` **`twitter:image` missing** — Twitter/X cards will be text-only
- [x] `[Pass]` `twitter:card` set to `summary_large_image`

---

## Fixes Needed (priority order)

1. [ ] **Add `og:image` and `twitter:image`** — critical for social sharing CTR. Add a 1200×630px image (your professional photo or branded card):

   ```html
   <meta property="og:image" content="https://maxdigital.lv/images/og-image.jpg">
   <meta name="twitter:image" content="https://maxdigital.lv/images/og-image.jpg">
   ```

2. [ ] **Shorten the title tag** to ~55 chars, e.g.:
   `"MaxDigital — Digitālā reklāma Latvijā | Google, Meta, TikTok"`

3. [ ] **Trim meta description** to ~155 chars — drop the name/city from the end (already in schema):
   `"Profesionāli digitālā mārketinga pakalpojumi Latvijā — Google Ads, Meta, Facebook, Instagram, TikTok reklāma. 13+ gadu pieredze, 150+ projekti."`

4. [ ] **Self-host critical images** — the hero and service card images from Unsplash can disappear or slow down. Store locally or in a CDN you control, and serve as WebP.

---

*Powered by SearchFit.ai — <https://searchfit.ai>*
