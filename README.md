# Contest Tools

Scripts and styles for contests hosted by AMP Contesting and embedded within AMP CMS

## AMP Contesting Page

Resources should be included in the AMP Contesting item's Header Code within Expert Options.

### dist/contest/base.css

Base style overrides for AMP Contests.  Removes annoying extras and sets some common, sane properties.  Includes cm-container layout classes.

### dist/contest/base.js

Includes iframe-resizer content area script, Twitter widget initialization, bandsintown.com initialization (if widget exists on the page).


## AMP CMS Page

Resources should be included on the AMP CMS page which embeds the contest.

### dist/cms/base.css

Cleans up the page, removing title, meta data, thumbnails, etc.

### dist/cms/fullwidth.css

Includes all cms/base.css changes, removes right-hand column if it exists, allows post content to expand to the full browser window width.

### dist/cms/base.js

Statically includes modified iframe-resizer page script (limitation imposed by Triton player), initializes iframe-resizer.