// Single on/off switch for the Lit Fest '27 (Chicago Indian Literature Festival 2027) page.
//
// false = the page /literature-festival/2027 returns "not found", the "Lit Fest '27"
//         button is hidden on /literature-festival, and the page is kept out of the sitemap.
// true  = the page and the button are live.
//
// Hidden on 2026-11-05 at the client's request; made live again on 2026-11-20 (April 17, 2027,
// new Literature Google Form). To hide it again: set this to false and add
// "/literature-festival/2027" back to the `exclude` list in next-sitemap.config.js.
export const LIT_FEST_2027_LIVE = true;

// Wildlife Photography & Visual Arts Festival 2027: the festival date is not decided yet,
// so the "Schedule of the Day" section on /photography-festival/2027 is hidden.
// Set to true (and update the times/date) once the client confirms the date.
export const WILDLIFE_2027_SCHEDULE_LIVE = false;
