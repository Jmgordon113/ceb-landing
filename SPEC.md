# CIRCULAR EXPRESS BOX — WEBSITE BUILD SPEC v1.0

You are building the Circular Express Box website: a single fast static page for Circular Express Box (CEB), a real recycling company owned by Geared for GREEN (G4G). This page replaces a bad WordPress homepage. It must look like a premium, trustworthy, real company. It will be reviewed pixel-by-pixel by the project manager against this spec.

## HARD RULES

1. Static site only: `index.html` + `css/styles.css` + `js/main.js` + existing `assets/` folder. NO frameworks, NO build step, NO npm. Vanilla HTML/CSS/JS.
2. Use ONLY the real assets in `assets/`. NEVER use AI-generated imagery, stock photos, or placeholder images. Where no photo exists, use typography, color, and CSS graphics instead.
3. Use the copy in this spec VERBATIM. Do not rewrite, "improve," or add copy. No em-dashes anywhere. No lorem ipsum.
4. Every link must point where this spec says. No dead `#` links except in-page anchors listed here.
5. Zero typos. Zero placeholder text. The footer must NOT contain any developer/agency name.
6. Responsive: flawless at 375px, 768px, 1280px, 1600px. No horizontal scroll at any width.
7. Accessible: semantic landmarks, alt text per spec, visible focus states, color contrast AA minimum for text.
8. Performance: no external JS libraries. Fonts from Google Fonts (2 families max, preconnect). Lazy-load below-fold images.

## DESIGN TOKENS (CSS custom properties on :root)

```
--green-950: #052616;   /* darkest, footer bg */
--green-900: #07361B;   /* dark band bg */
--green-700: #0A572A;   /* BRAND green, from logo. Primary buttons, headings accent */
--green-600: #0E6B35;   /* hover state */
--green-100: #DCEADF;   /* pale green tint for chips/badges */
--cream:     #FAF6EF;   /* main page background */
--kraft:     #E8DCC7;   /* cardboard tint, alt section bg */
--kraft-deep:#D9C4A3;   /* cardboard accent, borders */
--ink:       #142019;   /* body text */
--ink-soft:  #47554C;   /* secondary text */
--white:     #FFFFFF;
--radius-lg: 24px; --radius-md: 16px; --radius-sm: 10px;
--shadow-card: 0 8px 30px rgba(5, 38, 22, 0.08);
```

Fonts (Google Fonts): headings `"Bricolage Grotesque"` weights 500/600/700; body `"Inter"` weights 400/500/600. Headings letter-spacing -0.02em. Base body 16-18px, line-height 1.6.

Buttons: primary = green-700 bg, white text, radius-sm, padding 14px 28px, weight 600, hover green-600 + translateY(-1px) + shadow; secondary = transparent bg, 2px solid green-700, green-700 text, same hover lift. All buttons have transition 150ms ease.

Section rhythm: max-width 1160px content container, 96-120px vertical padding desktop, 56-64px mobile. Alternate backgrounds: cream → white → cream → kraft-tint etc. so sections read distinctly.

## ASSETS (already in ./assets/)

- `ceb-logo.png` — round green badge logo, transparent bg. Use in nav (height ~48px) and footer (~64px). Alt: "Circular Express Box logo".
- `photo-bottle-drop.png` — real studio photo, hand dropping plastic bottle into the CEB box. Crop the excess white margin with CSS (object-fit cover inside a rounded frame). Alt: "Dropping a plastic bottle into a Circular Express Box".
- `photo-vinyl-drop.png` — real studio photo, hand dropping a vinyl record into the CEB box. Same treatment. Alt: "Dropping a vinyl record into a Circular Express Box".

Both photos have a gray studio background and wood floor: present them inside rounded-corner cards (radius-lg, shadow-card), NEVER as full-bleed cutouts. They may be zoomed (object-fit: cover; object-position to keep hand + box logo visible).

## PAGE STRUCTURE (exact order)

### 1. Announcement bar
Full-width, green-900 bg, white text, 13-14px, centered, py 10px:
"Now accepting vinyl records • Nationwide shipping via FedEx"

### 2. Sticky nav
White bg (blurred/95% opacity on scroll), subtle bottom border. Left: `ceb-logo.png` + wordmark text "CIRCULAR EXPRESS BOX" in Bricolage 600, 15px, letter-spacing 0.06em, green-700 (two lines allowed on mobile: hide wordmark under 480px). Center/right links (in-page anchors): How It Works (#how-it-works), What Goes In (#materials), Rewards (#rewards), Pricing (#pricing), For Brands (#brands), FAQ (#faq). Then: "Log In" text link → https://circularexpressbox.com (opens same tab), and primary button "Get Your Box" → #pricing.
Mobile: hamburger opening a full-screen menu (plain JS, no library), same links, close on click.

### 3. HERO (cream bg)
Two-column desktop (55/45), stacked mobile (text first).
Left column:
- Eyebrow (green-700, 13px, uppercase, letterspaced, weight 600): "A GEARED FOR GREEN COMPANY"
- H1 (Bricolage 700, clamp 40px→64px, ink): "A recycling program in a box."
- Sub (18-20px, ink-soft, max 46ch): "Fill it with bottles, cans, paper, and more. Ship it free with FedEx. Track every pound and earn rewards for recycling right. Have a different material? We will build a stream for it."
- Buttons row: primary "Get Your Box — from $99" → #pricing; secondary "For Brands & Organizations" → #brands
- Trust chips row (3 chips, green-100 bg, green-900 text, radius-pill, 13px, icon dot before each): "Prepaid FedEx label included" / "Live impact dashboard" / "Points on every shipment"
Right column: `photo-bottle-drop.png` in rounded card. Behind it, a subtle oversized circle outline in kraft-deep (echo of the logo's circular arrow) as decoration. On the card, bottom-left overlay chip (white bg, small): "Real box. Real recycling."

### 4. Trusted-by strip (white bg, py 40px)
Small centered label (ink-soft, 13px, uppercase): "TRUSTED BY TEAMS AND COMMUNITIES"
Row of 5 text badges (Bricolage 600, 15-17px, ink-soft, wrap on mobile): "Miami Waterkeeper" · "Plastics Industry Association" · "Padel X Miami" · "The Content Gym" · "Coffee and Chill"
Below, one centered line (14px, ink-soft): "Backed by Geared for GREEN: 40+ years in circular economy, 1.7B+ lbs recycled."

### 5. HOW IT WORKS (cream bg) — id="how-it-works"
Section header centered: eyebrow "HOW IT WORKS"; H2 (Bricolage 700, 32→44px): "If you can ship a return, you can run a recycling program."
4 step cards in a row (grid 4 → 2×2 tablet → 1 col mobile). Each card: white bg, radius-lg, shadow-card, padding 28px; big step number (Bricolage 700, 40px, kraft-deep); H3 18px; body 15px ink-soft; small green badge chip at bottom.
1. "Get your box" / "Order online and your Circular Express Box arrives flat at your door, ready to set up in about a minute." / badge: "Ships to your door"
2. "Fill it up" / "Toss in accepted recyclables as you go. Material stickers keep streams clean, so there is no sorting stress." / badge: "No sorting stress"
3. "Ship it free" / "Log in, print your prepaid FedEx label, and drop the sealed box at any FedEx location, or hand it to your regular driver." / badge: "Prepaid FedEx label"
4. "Earn and track" / "Points land in your account and your dashboard shows the pounds you have diverted from landfill." / badge: "Rewards + live impact"

### 6. WHAT GOES IN (white bg) — id="materials"
Header: eyebrow "WHAT GOES IN"; H2: "Clear streams. Clean recycling."
Sub center (16px ink-soft): "Every box collects one clean material stream, marked with its own sticker. That keeps recycling honest and the material valuable."
Three columns (cards, kraft tint bg #F5EEDF, radius-lg):
- Card 1 H3 "Accepted today" + checklist (green check marks): Plastic bottles & containers / Aluminum cans / Paper & cardboard / Other recyclables? Just ask, we can take on more
- Card 2 H3 "Custom streams" + text: "Running a special program? We build boxes for dedicated streams:" + checklist: Vinyl records / Event & venue waste / Textiles & more by request. Small green chip: "New: vinyl records"
- Card 3 H3 "Keep it out" + x-marks list (ink-soft): Food waste & liquids / Glass / Batteries & electronics / Hazardous or medical waste
Footnote line under grid (13px, ink-soft, centered): "Not sure about an item? Check the FAQ or ask us before you ship."

### 7. WHERE IT GOES / CLOSED LOOP (green-900 bg, white text) — id="impact"
Header: eyebrow (green-100 color) "WHERE IT GOES"; H2 white: "Watch your recycling become the good stuff."
Journey row: 4 nodes with arrows (CSS only, no images): "Your box" → "Regional recycling hub" → "Sustainable raw material" → "New products"
Below, highlight card (white bg, ink text, radius-lg, max 720px centered): H3 "6 bottles = 1 hat." Body: "Materials from Circular Express Boxes are processed and remade into real products, like Champions for GREEN hats made from 6 recycled bottles each, with the count stamped on every piece. That is the loop, closed."
Under the card, stat row (3 stats, white text, Bricolage 700 numbers 36px): "1.7B+ lbs recycled by our family of companies" / "950M+ lbs reintegrated into new products" / "Since 1985"

### 8. REWARDS (cream bg) — id="rewards"
Two-column: left text, right a "rewards card" visual built in pure CSS.
Left: eyebrow "REWARDS"; H2: "Recycle to get the rewards."; body: "Every shipment earns points. Points unlock real discounts on sustainable gear made from the same kinds of materials you ship. No gimmicks, no expiring coupons maze, just recycling that pays you back."
Bullet list (green checks): "Points credited when your box is received" / "Redeem for eco apparel and gear discounts" / "Teams can pool rewards to reward staff, members, or volunteers"
Right visual: a stylized reward ticket stack (3 stacked cards, white bg, kraft border): each with points value and reward, text exactly:
- "400 pts — 20% off the 6-Bottle GREEN Hat"
- "350 pts — $10 off the Peaks Polo"
- "250 pts — 15% off the Performance Long Sleeve"

### 9. DASHBOARD / FOR ORGANIZATIONS PROOF (white bg)
Header: eyebrow "TRACK EVERYTHING"; H2: "Impact you can put in a report."
Sub: "Every box is tracked. Your dashboard turns shipments into the numbers your team, your members, and your ESG report actually need."

Tabbed browser-window frame (existing dash-window + dash-chrome stay EXACTLY as built: white window, radius-lg, shadow-card, 1px kraft-deep border, max-width 980px, chrome bar with traffic dots + URL pill "dashboard.circularexpressbox.com"). Two tabs (existing .dash-tabs/.dash-tab styles and the generic JS switcher in main.js stay):
- Tab 1 (default active): id dash-tab-cleanup, controls dash-pane-cleanup, label "Miami Waterkeeper · Beach Cleanups"
- Tab 2: id dash-tab-gym, controls dash-pane-gym, label "Gym & Studio Program"

HONESTY RULE: these are PERSONA dashboards with representative numbers (Jake-approved), using ONLY real CEB photos. Never label them as audited client reports. Do not reference Informa or Tortuga anywhere.

**PANE 1 — dash-pane-cleanup: now a real Canva-produced report image, assets/dashboard-cleanup.png (Canva design DAHSAgvpsuM: the team's report template duplicated in Canva, Tortuga/RTO branding stripped, refilled for CEB + Miami Waterkeeper with real cleanup photos and the 307-lb numbers). Rendered inside .dash-body-real within the window chrome. The HTML infographic spec below is RETIRED (superseded by the image; CSS classes may remain unused):**

**RETIRED SPEC — PANE 1 (Miami Waterkeeper persona), styled as a FULL REPORT INFOGRAPHIC modeled on our festival report template. Palette: navy #003155, royal #184188, gold #E6B737, light-blue pane bg #DDEBF7, white cards. Pane padding 20px. All type: headings Bricolage, labels Inter 600 uppercase 10-11px letterspaced.**
1. Header band (navy #003155, radius-md, padding 14px 18px, flex align-center gap 14px): assets/ceb-logo.png at 44px (alt "Circular Express Box logo"), then title (white, Bricolage 700, 18px, uppercase, line-height 1.2): "Full Season Recycling & Sustainability Report 2026"
2. Row A (grid: 42% info / 58% photos, gap 12px, margin-top 12px; stacks under 700px):
   - Left = 2x2 grid (gap 10px) of royal #184188 cards (radius-md, padding 12px 14px, white text; label 10px uppercase rgba(255,255,255,0.8); value line below):
     a. label "EVENT NAME:" + white oval chip (bg white, navy text, Bricolage 700, 13px, radius-pill, padding 6px 12px, centered): "Miami Waterkeeper Beach Cleanups"
     b. label "VOLUNTEERS:" + value (Bricolage 700, 22px, white): "480+"
     c. label "TOTAL WASTE DIVERTED FROM LANDFILL:" + light chip (bg #DDEBF7, navy text, Bricolage 700, 16px, radius-sm, padding 4px 10px): "307 lbs."
     d. label "CO2 EMISSIONS AVOIDED:" + light chip same style: "0.78 tons CO2e"
   - Right = photo collage card (royal border 3px, radius-md, overflow hidden): 3 photos in a row (grid 3, no gap, each aspect 4/5, object-fit cover, width/height 640x800, loading lazy) using assets/cleanup-can-drop.jpg, assets/cleanup-volunteer.jpg, assets/cleanup-group.jpg with the same alt texts as before.
3. Row B (grid: 40% stats / 60% products, gap 12px, margin-top 12px; stacks under 700px):
   - Left: heading (navy, Bricolage 700, 15px): "Stats from the 2026 Cleanup Season" then 3 stacked white cards (radius-md, padding 10px 14px, flex space-between align-center): material name (navy, 600, 14px) + count (Bricolage 700, 18px, royal) + lbs chip (bg #DDEBF7, navy, 12px, 600, radius-pill, padding 3px 10px):
     "Plastic Bottles" / "5,847" / "205 lbs."
     "Aluminum Cans" / "3,192" / "96 lbs."
     "Plastic Film & Caps" / "—" / "6 lbs."
   - Right: heading (navy, 600, 13px): "These recyclables will help make the following products:" then 3 columns (grid 3, gap 10px) of navy cards (radius-md, padding 14px, centered white text): product name (Bricolage 600, 14px), conversion line (11px, rgba(255,255,255,0.8)), gold number chip at bottom (bg #E6B737, navy text, Bricolage 700, 15px, radius-sm, padding 4px 10px):
     "Shirts" / "10 bottles make 1 shirt" / "584"
     "Hats" / "6 bottles make 1 hat" / "974"
     "Towels" / "2 bottles make 1 towel" / "2,923"
4. Footer row (flex space-between, margin-top 12px, wrap): left (12px, #47554C): "Every item ships back in a Circular Express Box with its prepaid FedEx label." right (12px, navy, 700): "powered by circularexpressbox.com"

**PANE 2 — dash-pane-gym (facility persona, hidden by default). CEB palette. Pane bg cream, padding 24px.**
1. Header row: H3 "Facility Recycling Program" (green-950) + "South Florida fitness studio · Jan to Jun 2026". Right pill (green-100 bg, green-900 text): "6 boxes shipped"
2. KPI row (4 tiles, bg green-700, white text, same tile style as pane 1):
   - "118 lbs" / "TOTAL DIVERTED FROM LANDFILL"
   - "2,418" / "PLASTIC BOTTLES"
   - "1,034" / "ALUMINUM CANS"
   - "0.3 tons" / "CO2e AVOIDED"
3. Two-column row (grid 2, gap 12px, margin-top 16px; stack under 640px): left = photo (assets/photo-bottle-drop.png, radius-md, aspect 4/5 object-fit cover, alt "Dropping a plastic bottle into a Circular Express Box", loading lazy). Right = rewards card (kraft-tint bg #F5EEDF, radius-md, padding 20px): small uppercase label (11px, green-700, 600, letterspaced) "REWARDS EARNED"; big line (Bricolage 700, 22px, ink) "1,180 points this period"; body (14px, ink-soft) "Redeemed by staff for team gear made from recycled bottles."
4. Bottom line (13px, ink-soft): "Members see the impact. Staff never leave the building. FedEx handles the rest."

Caption under the window (13px, ink-soft, centered): "Example program dashboards. Photos are from real Circular Express Box collections and cleanups."

### 10. PRICING (kraft tint bg #F5EEDF) — id="pricing"
Header: eyebrow "GET STARTED"; H2: "Pick your box. Everything is included."
Sub: "Every option includes the box, liners, a prepaid FedEx shipping label per box, dashboard access, and rewards."
3 pricing cards (grid 3 → 1 col mobile). Middle card highlighted (green-700 border 2px, "MOST POPULAR" chip top center, slightly scaled up on desktop):
- Card 1: H3 "Single Box", price "$99" (Bricolage 700 44px), line "Ideal for trial runs and small offices.", included list: "1 Circular Express Box" / "1 prepaid FedEx label" / "Dashboard + rewards access", button (secondary) "Get a Single Box" → https://circularexpressbox.com/product/single-box/
- Card 2 (highlight): H3 "3-Box Pack", price "$269", small strike-through context line "Save $28 vs single boxes", line "Great for gyms, studios, retail, and events.", list: "3 Circular Express Boxes" / "3 prepaid FedEx labels" / "Dashboard + rewards access", button (primary) "Get the 3-Pack" → https://circularexpressbox.com/product/three-boxes/
- Card 3: H3 "10-Box Pack", price "$749", context "Save $241 vs single boxes", line "Built for campuses, venues, and multi-room deployments.", list: "10 Circular Express Boxes" / "10 prepaid FedEx labels" / "Dashboard + rewards access", button (secondary) "Get the 10-Pack" → https://circularexpressbox.com/product/ten-boxes/
Footnote centered: "Need more than 10 boxes or a custom program? Talk to us about volume pricing."

### 11. FOR BRANDS & ORGANIZATIONS (green-900 bg) — id="brands"
Two-column: left = `photo-vinyl-drop.png` in rounded card (this photo is the star here); right text (white):
- Eyebrow (green-100): "FOR BRANDS & ORGANIZATIONS"
- H2 white: "Launch a branded take-back program."
- Body (white/85%): "Every Circular Express Box carries a sponsor panel and a dedicated material sticker. That means your brand can run a national take-back program without building any infrastructure: put co-branded boxes anywhere FedEx ships, and we handle collection, processing, and the impact report."
- Checklist (green-100 checks, white text): "Co-branded boxes with your logo on the sponsor panel" / "Custom material streams, from vinyl records to event waste" / "Custom-printed box sleeves that carry your full design in stores and at events" / "Nationwide collection through FedEx" / "Campaign-level impact reporting for ESG and PR"
- Quote-style line (italic, white/70%, 15px): "Currently piloting record take-back with the music industry."
- Button (white bg, green-900 text): "Build your program" → mailto:jeff@gearedforgreen.com?subject=Circular%20Express%20Box%20Brand%20Program
### 11b. BEACH CLEANUPS (white bg) — id="cleanups" (nav + mobile menu + footer link "Cleanups")
Two-column (55/45 desktop, stacked mobile): left = eyebrow "BEACH & COMMUNITY CLEANUPS"; H2 "Cleanups that count every can."; body about volunteers dropping collected recyclables into boxes on-site, prepaid FedEx return, dashboard totals; checklist (Boxes delivered before your event / Simple on-site collection for volunteers / Prepaid FedEx return when the cleanup ends / Impact totals to share with volunteers and sponsors); note naming Miami Waterkeeper + "Special programs are available for cleanup groups and nonprofits." (NO pricing shown); primary button "Request cleanup boxes" → mailto:jeff@gearedforgreen.com?subject=Cleanup%20Boxes%20Request. Right = kraft-tint "Cleanup day, simplified" card with 4 numbered steps (green circle numbers): Boxes arrive at your site / Volunteers fill as they go / Seal, label, hand to FedEx / Totals land on your dashboard.

### 12. TESTIMONIALS (cream bg)
Header: eyebrow "WHAT PEOPLE SAY"; H2: "Loved by the people doing the work."
3 cards (white, radius-lg, shadow-card): 5 filled green stars (CSS/SVG, not font icons), quote, then name (600) + org (ink-soft).
- "The Circular Express Box made our cleanups easier, more efficient, and far more impactful. Our volunteers loved the simplicity, and the tracking dashboard helped us clearly show how much waste we diverted." — Erin Cover, Miami Waterkeepers
- "Collecting the materials and shipping them to the recycling mill is extremely easy, and I can not wait to start offering my clients apparel made from recycled water bottles." — Owner, The Content Gym
- "The Circular Express Box takes away the complexity and confusion. Now I can easily recycle without the stress, and the rewards are a great incentive to keep going." — Lucy Nelles, Coffee and Chill

### 13. FAQ (white bg) — id="faq"
H2 centered: "Questions, answered."
Accordion (plain JS, one open at a time, chevron rotates, smooth height transition), 6 items:
1. "How does shipping work?" → "Every box comes with a prepaid FedEx shipping label. When your box is full, seal it, print your label from your account, and drop it at any FedEx location or hand it to your regular FedEx driver."
2. "What can I put in the box?" → "Standard boxes collect one clean stream: plastic bottles and containers, aluminum cans, or paper and cardboard. Custom streams like vinyl records are available for partner programs. No food waste, liquids, glass, batteries, or hazardous materials."
3. "Where does my recycling actually go?" → "Boxes ship to regional recycling hubs where materials are sorted and processed into sustainable raw materials, then remade into real products like recycled-fabric apparel. Your dashboard tracks every shipment."
4. "How do rewards work?" → "Each received shipment earns points in your account. Redeem points for discounts on sustainable products from our family of brands."
5. "Can my company or organization use this?" → "Yes. Gyms, offices, campuses, events, and community groups run Circular Express Box programs today. For co-branded boxes and custom material streams, see For Brands & Organizations above."
6. "How big is the box?" → "The standard Circular Express Box is a heavy-duty, tamper-friendly collection box sized for high-traffic spots like lobbies, gyms, and cafes, and it ships flat with liners included."

### 14. FINAL CTA (green-700 bg)
Centered, white: H2 (Bricolage 700, 36→48px): "Your recycling deserves a better ending."
Sub (white/85%): "Get a box, fill it up, and watch it come back as something new."
Buttons: primary inverted (white bg, green-700 text) "Get Your Box" → #pricing; ghost (white border, white text) "Talk to us" → mailto:jeff@gearedforgreen.com

### 15. FOOTER (green-950 bg, white/70% text, 14px)
3 columns desktop, stacked mobile:
- Col 1: logo (ceb-logo.png, 64px) + "Circular Express Box turns everyday recyclables into tracked, rewarded, closed-loop recycling. A Geared for GREEN company." + link "gearedforgreen.com" → https://www.gearedforgreen.com (new tab)
- Col 2 "Explore": How It Works, What Goes In, Rewards, Pricing, For Brands, FAQ (anchors)
- Col 3 "Contact": "Jeff Feldman, COO — jeff@gearedforgreen.com" (mailto) / "Jake Gordon, Client Services — jakeg@gearedforgreen.com" (mailto) / "Log in to your account" → https://circularexpressbox.com
Bottom bar, centered, white/50%: "© 2026 Circular Express Box. A Geared for GREEN company. All rights reserved."

## JS BEHAVIOR (js/main.js, vanilla)
1. Sticky nav: add shadow + solid bg after 10px scroll.
2. Mobile hamburger menu open/close.
3. FAQ accordion.
4. Smooth-scroll for in-page anchors (CSS scroll-behavior is fine; offset for sticky nav via scroll-margin-top on sections).
5. Subtle reveal-on-scroll for section headers and cards (IntersectionObserver, fade+8px rise, 400ms, once). Respect prefers-reduced-motion: disable animations.

## QUALITY BAR / DEFINITION OF DONE
- Matches this spec section-for-section, copy verbatim.
- Lighthouse-style sanity: single CSS file, no console errors, images have width/height or aspect-ratio to prevent layout shift.
- Looks premium at first glance: generous whitespace, consistent radii, one shadow style, no more than the specified colors.
- Validate: every href present and correct per spec; no "#" dead links besides listed anchors; no developer credits anywhere.
