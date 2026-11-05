// Single on/off switch for the Lit Fest '27 (Kahani Chicago) page.
//
// false = the page /literature-festival/2027 returns "not found", the "Lit Fest '27"
//         button is hidden on /literature-festival, and the page is kept out of the sitemap.
// true  = the page and the button are live.
//
// Hidden on 2026-11-05 at the client's request until the content corrections arrive.
// To publish again: set this to true, and remove "/literature-festival/2027" from the
// `exclude` list in next-sitemap.config.js, then deploy.
export const LIT_FEST_2027_LIVE = false;
