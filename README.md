# Github Profile Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Features:
1. Add GitHub profile card using the simple form.
2. Delete added cards.
3. Sort cards by name, location and followers.
4. Open profile page by clicking onto card.
5. Accessible using keyboard - can navigate between cards, open profile page and delete a card.

## How to run:

Install dependencies:
```
npm install
```

Launch app:
```
ng serve
```

Then navigate to `http://localhost:4200/`

## Issues:
1. The layout may break slightly (in Sorting menu) below 450px width.
2. If some card contains lot of information, the card may push other cards in the next row
 and will create some void.
 
## Possible improvements:
1. Fix all issues :)
2. Use intelligent layout system (such as Masonry grid) that organizes cards automatically based on current viewport
size and the card dimensions, similar to what Google Keep does.
3. On lower resolutions use better layout for the card.
4. HTML alert instead of JavaScript alert.
5. Improve code organization.
6. Add unit tests.
