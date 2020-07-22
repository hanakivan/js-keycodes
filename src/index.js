const KEY_CODE_UP = 38;
const KEY_CODE_DOWN = 40;
const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_TAB = 9;
const KEY_CODE_ENTER = 13;
const KEY_CODE_ESC = 27;
const KEY_CODE_SPACE = 32;

const checkEvent = (event: Event, code: string, keyCode: number): boolean => {
    if(typeof event.code !== "undefined") {
        return event.code === code;
    }

    return event.keyCode === keyCode;
};

const hasShiftKeyBeenPressed = (event: Event) => (
    event && event.shiftKey
);

const cmdMacKeyHasBeenPressed = (event: Event) => (
    event && event.metaKey
);

const enterKeyHasBeenPressed = (event: Event) => (
    checkEvent(event, "Enter", KEY_CODE_ENTER)
);

const escKeyHasBeenPressed = (event: Event) => (
    checkEvent(event, "Escape", KEY_CODE_ESC)
);

const spaceKeyHasBeenPressed = (event: Event) => (
    checkEvent(event, "Space", KEY_CODE_SPACE)
);

const tabKeyHasBeenPressed = (event: Event) => (
    checkEvent(event, "Tab", KEY_CODE_TAB)
);

const arrowRightKeyHasBeenPressed = (event: Event) => (
    checkEvent(event, "ArrowRight", KEY_CODE_RIGHT)
);

const arrowLeftKeyHasBeenPressed = (event: Event) => (
    checkEvent(event, "ArrowLeft", KEY_CODE_LEFT)
);

const arrowUpKeyHasBeenPressed = (event: Event) => (
    checkEvent(event, "ArrowUp", KEY_CODE_UP)
);

const arrowDownKeyHasBeenPressed = (event: Event) => (
    checkEvent(event, "ArrowDown", KEY_CODE_DOWN)
);

export {KEY_CODE_DOWN};
export {KEY_CODE_UP};
export {KEY_CODE_LEFT};
export {KEY_CODE_RIGHT};
export {KEY_CODE_TAB};
export {KEY_CODE_ENTER};
export {KEY_CODE_ESC};
export {KEY_CODE_SPACE};
export {hasShiftKeyBeenPressed};
export {cmdMacKeyHasBeenPressed};
export {enterKeyHasBeenPressed};
export {escKeyHasBeenPressed};
export {spaceKeyHasBeenPressed};
export {tabKeyHasBeenPressed};
export {arrowRightKeyHasBeenPressed};
export {arrowLeftKeyHasBeenPressed};
export {arrowUpKeyHasBeenPressed};
export {arrowDownKeyHasBeenPressed};