# Deployment prompt: circularexpressbox.com

You are deploying the new Circular Express Box website to circularexpressbox.com. The site is ALREADY BUILT, designed, written, and tested. Your job is deployment and integration, not redesign. Do not rewrite copy, restyle sections, swap images, or "improve" anything: deploy it exactly as built.

## WHAT EXISTS
- Finished site (this repository): https://github.com/Jmgordon113/ceb-landing
  It is a fully static site: index.html + css/styles.css + js/main.js + assets/ (images). No frameworks, no build step, no database. It runs anywhere that can serve files.
- Live reference of exactly how it must look and behave: https://jmgordon113.github.io/ceb-landing/
  After deploying, circularexpressbox.com must match this reference pixel-for-pixel on desktop and mobile.
- Documentation in the repo: OVERVIEW.md (what every section does) and SPEC.md (the build spec).

## WHAT IS LIVE TODAY
circularexpressbox.com currently runs a WordPress/WooCommerce site. Its DESIGN is being replaced, but three functions on it are LIVE and REVENUE-CRITICAL and must keep working during and after this deployment:
1. Checkout: /product/single-box/ ($99), /product/three-boxes/ ($269), /product/ten-boxes/ ($749)
2. Customer login/accounts
3. Prepaid FedEx shipping label GENERATION and download for logged-in customers (this is the core thing existing customers do; breaking it means customers cannot ship their boxes)

## CRITICAL: PRESERVE THE SHIPPING LABEL SYSTEM
The single most important constraint of this deployment. The current platform GENERATES prepaid FedEx shipping labels and serves them to logged-in customers. That entire pipeline must work identically after the migration:
- BEFORE changing anything, identify exactly how labels are produced today: which plugin or integration generates them, whether an admin creates/uploads them, and where customers retrieve them. Document it.
- Whatever that mechanism is (plugins, FedEx integrations, API credentials, admin workflows, scheduled jobs), it must be preserved fully intact. If WordPress moves to a subdomain, the complete label system moves with it and keeps working, both the admin side that creates labels and the customer side that retrieves them.
- Do not deactivate, update, or replace any plugin involved in label generation as part of this deployment.
- After migration, test END TO END: generate a NEW label through the normal workflow and confirm a customer account can retrieve and print it. Viewing a previously existing label is not sufficient proof.

## THE JOB
Make circularexpressbox.com serve the new static site as its homepage, while checkout and customer accounts keep working. Choose the approach based on the hosting access available:

### OPTION A (preferred): static root + WordPress moved to a subdomain
- Serve the repo's files at the root of circularexpressbox.com.
- Move/keep WordPress reachable at a subdomain (e.g. shop.circularexpressbox.com or account.circularexpressbox.com), preserving the /product/ pages, login, and label downloads there.
- Then update these links in index.html to the new WordPress location (search for each URL):
  - Three pricing buttons: https://circularexpressbox.com/product/single-box/, .../three-boxes/, .../ten-boxes/
  - Log In (appears in the nav, the mobile menu, and the footer): currently https://circularexpressbox.com
- 301-redirect the old WordPress URLs if search engines have them indexed.

### OPTION B: WordPress stays at root, new site becomes the front page
- Serve index.html as a static front page (static-HTML page template, or a static-homepage plugin, or upload the files and set the server to serve index.html at /). Keep /product/*, login, and account pages exactly where they are, then the links in index.html need NO changes except Log In, which should point to the real account/login URL (discover the actual path, e.g. /my-account/ or /wp-login.php, and update the three Log In links).
- Ensure WordPress does not inject its own theme header/footer/CSS into the new page. It must render standalone.

## HARD RULES
- Do not alter copy, layout, colors, fonts, or images. The reference site is the acceptance test.
- Keep all asset paths working (they are relative: assets/..., css/..., js/...).
- Do not reintroduce anything from the old design (old hero image, "Techobix" footer credit, coupon-first layout).
- The only edits permitted to the repo files are the link retargets described above.
- Do NOT delete or disable the WordPress site until every check below passes; it is the rollback.

## VERIFY BEFORE CALLING IT DONE (all must pass)
1. circularexpressbox.com renders identical to https://jmgordon113.github.io/ceb-landing/ on desktop (1280px) and phone (375px), no horizontal scroll, no console errors.
2. All six menu links scroll to their sections; the dashboard window's two tabs switch when clicked; the FAQ accordion opens and closes.
3. Each of the three pricing buttons lands on the correct, working checkout page and a test add-to-cart works.
4. Log In reaches the real customer login, AND the label system works end to end post-migration: a NEW shipping label can be generated through the normal admin/customer workflow, and a customer account can retrieve and print it. Confirm the admin side of label creation works exactly as it did before.
5. The "Build your program" button opens an email draft to jeff@gearedforgreen.com.
6. https (SSL) works on every URL involved, including any new subdomain.
7. Old indexed URLs redirect sensibly (no 404s from Google results).

Report the result of each check explicitly when finished.
