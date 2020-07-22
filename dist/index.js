"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrowDownKeyHasBeenPressed = exports.arrowUpKeyHasBeenPressed = exports.arrowLeftKeyHasBeenPressed = exports.arrowRightKeyHasBeenPressed = exports.tabKeyHasBeenPressed = exports.spaceKeyHasBeenPressed = exports.escKeyHasBeenPressed = exports.enterKeyHasBeenPressed = exports.cmdMacKeyHasBeenPressed = exports.hasShiftKeyBeenPressed = exports.KEY_CODE_SPACE = exports.KEY_CODE_ESC = exports.KEY_CODE_ENTER = exports.KEY_CODE_TAB = exports.KEY_CODE_RIGHT = exports.KEY_CODE_LEFT = exports.KEY_CODE_UP = exports.KEY_CODE_DOWN = void 0;
var KEY_CODE_UP = 38;
exports.KEY_CODE_UP = KEY_CODE_UP;
var KEY_CODE_DOWN = 40;
exports.KEY_CODE_DOWN = KEY_CODE_DOWN;
var KEY_CODE_LEFT = 37;
exports.KEY_CODE_LEFT = KEY_CODE_LEFT;
var KEY_CODE_RIGHT = 39;
exports.KEY_CODE_RIGHT = KEY_CODE_RIGHT;
var KEY_CODE_TAB = 9;
exports.KEY_CODE_TAB = KEY_CODE_TAB;
var KEY_CODE_ENTER = 13;
exports.KEY_CODE_ENTER = KEY_CODE_ENTER;
var KEY_CODE_ESC = 27;
exports.KEY_CODE_ESC = KEY_CODE_ESC;
var KEY_CODE_SPACE = 32;
exports.KEY_CODE_SPACE = KEY_CODE_SPACE;

var checkEvent = function checkEvent(event, code, keyCode) {
  if (typeof event.code !== "undefined") {
    return event.code === code;
  }

  return event.keyCode === keyCode;
};

var hasShiftKeyBeenPressed = function hasShiftKeyBeenPressed(event) {
  return event && event.shiftKey;
};

exports.hasShiftKeyBeenPressed = hasShiftKeyBeenPressed;

var cmdMacKeyHasBeenPressed = function cmdMacKeyHasBeenPressed(event) {
  return event && event.metaKey;
};

exports.cmdMacKeyHasBeenPressed = cmdMacKeyHasBeenPressed;

var enterKeyHasBeenPressed = function enterKeyHasBeenPressed(event) {
  return checkEvent(event, "Enter", KEY_CODE_ENTER);
};

exports.enterKeyHasBeenPressed = enterKeyHasBeenPressed;

var escKeyHasBeenPressed = function escKeyHasBeenPressed(event) {
  return checkEvent(event, "Escape", KEY_CODE_ESC);
};

exports.escKeyHasBeenPressed = escKeyHasBeenPressed;

var spaceKeyHasBeenPressed = function spaceKeyHasBeenPressed(event) {
  return checkEvent(event, "Space", KEY_CODE_SPACE);
};

exports.spaceKeyHasBeenPressed = spaceKeyHasBeenPressed;

var tabKeyHasBeenPressed = function tabKeyHasBeenPressed(event) {
  return checkEvent(event, "Tab", KEY_CODE_TAB);
};

exports.tabKeyHasBeenPressed = tabKeyHasBeenPressed;

var arrowRightKeyHasBeenPressed = function arrowRightKeyHasBeenPressed(event) {
  return checkEvent(event, "ArrowRight", KEY_CODE_RIGHT);
};

exports.arrowRightKeyHasBeenPressed = arrowRightKeyHasBeenPressed;

var arrowLeftKeyHasBeenPressed = function arrowLeftKeyHasBeenPressed(event) {
  return checkEvent(event, "ArrowLeft", KEY_CODE_LEFT);
};

exports.arrowLeftKeyHasBeenPressed = arrowLeftKeyHasBeenPressed;

var arrowUpKeyHasBeenPressed = function arrowUpKeyHasBeenPressed(event) {
  return checkEvent(event, "ArrowUp", KEY_CODE_UP);
};

exports.arrowUpKeyHasBeenPressed = arrowUpKeyHasBeenPressed;

var arrowDownKeyHasBeenPressed = function arrowDownKeyHasBeenPressed(event) {
  return checkEvent(event, "ArrowDown", KEY_CODE_DOWN);
};

exports.arrowDownKeyHasBeenPressed = arrowDownKeyHasBeenPressed;