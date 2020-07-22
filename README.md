# browser consistent "was a key pressed" checker

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/keycodes?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/keycodes)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/keycodes)](https://www.npmjs.com/package/@ivanhanak_com/keycodes)

A simple javascript library helping with dealing with browser inconsistencies of browser Event.code and Event.keyCode implementation for the most used keys. 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/keycodes
```

Using yarn:

```sh
yarn add @ivanhanak_com/keycodes
```

## Usage
```javascript
import {
    hasShiftKeyBeenPressed,
    cmdMacKeyHasBeenPressed,
    enterKeyHasBeenPressed,
    escKeyHasBeenPressed,
    spaceKeyHasBeenPressed,
    tabKeyHasBeenPressed,
    arrowRightKeyHasBeenPressed,
    arrowLeftKeyHasBeenPressed,
    arrowUpKeyHasBeenPressed,
    arrowDownKeyHasBeenPressed,
} from '@ivanhanak_com/keycodes';


document.addEventListener("keydown", e => {
    if(hasShiftKeyBeenPressed(e) && tabKeyHasBeenPressed(e)) {
        //...do something on ...tab+shift
    }
    
    if(arrowDownKeyHasBeenPressed(e)) {
        //...do something on ...arrow down
    }

});
```

## Browser support
IE, Chrome, Firefox, Safari