/* 단축키 만드는 Hook */

import { KeyboardEventHandler, useCallback, useEffect, useMemo } from "react";

type callbackNameType = "onKeyDown" | "onKeyUp";

interface hotKeyType {
  global?: boolean;
  combo: string;
  onKeyDown?: (e: KeyboardEventHandler) => void;
  onKeyUp?: (e: KeyboardEventHandler) => void;
}

interface comboReturnType {
  modifiers: number;
  key: string;
}

const ModifierBitMasks = {
  alt: 1,
  ctrl: 2,
  meta: 4,
  shift: 8,
};

const ShiftKeys = {
  "~": "`",
  "!": "1",
  "@": "2",
  "#": "3",
  $: "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  _: "-",
  "+": "=",
  "{": "[",
  "}": "]",
  "|": "\\",
  ":": ";",
  '"': "'",
  "<": ",",
  ">": ".",
  "?": "/",
};

const Aliases = {
  win: "meta",
  window: "meta",
  cmd: "meta",
  command: "meta",
  esc: "escape",
  opt: "alt",
  option: "alt",
};

const getKeyCombo = (e: KeyboardEvent) => {
  const key = e.key !== " " ? e.key.toLowerCase() : "space";

  let modifiers = 0;
  if (e.altKey) modifiers += ModifierBitMasks.alt;
  if (e.ctrlKey) modifiers += ModifierBitMasks.ctrl;
  if (e.metaKey) modifiers += ModifierBitMasks.meta;
  if (e.shiftKey) modifiers += ModifierBitMasks.shift;

  return { modifiers, key };
};

const parseKeyCombo = (combo: string) => {
  const pieces = combo.replace(/\s/g, "").toLowerCase().split("+");
  let modifiers = 0;
  let key;
  for (const piece of pieces) {
    if (ModifierBitMasks[piece]) {
      modifiers += ModifierBitMasks[piece];
    } else if (ShiftKeys[piece]) {
      modifiers += ModifierBitMasks.shift;
      key = ShiftKeys[piece];
    } else if (Aliases[piece]) {
      key = Aliases[piece];
    } else {
      key = piece;
    }
  }

  return { modifiers, key };
};

const comboMatches = (a: comboReturnType, b: comboReturnType) => {
  return a.modifiers === b.modifiers && a.key === b.key;
};

const useHotKey = (hotkeys: Array<hotKeyType>) => {
  const localKeys = useMemo(() => hotkeys.filter((k) => !k.global), [hotkeys]);
  const globalKeys = useMemo(() => hotkeys.filter((k) => k.global), [hotkeys]);

  const invokeCallback = useCallback(
    (
      global: boolean,
      combo: comboReturnType,
      callbackName: callbackNameType,
      e: KeyboardEvent
    ) => {
      for (const hotkey of global ? globalKeys : localKeys) {
        if (comboMatches(parseKeyCombo(hotkey.combo), combo)) {
          hotkey[callbackName] && hotkey[callbackName](e);
        }
      }
    },
    [localKeys, globalKeys]
  );

  const handleGlobalKeyDown = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(true, getKeyCombo(e), "onKeyDown", e);
    },
    [invokeCallback]
  );
  const handleGlobalKeyUp = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(true, getKeyCombo(e), "onKeyUp", e);
    },
    [invokeCallback]
  );
  const handleLocalKeyDown = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(
        false,
        getKeyCombo(e.nativeEvent),
        "onKeyDown",
        e.nativeEvent
      );
    },
    [invokeCallback]
  );
  const handleLocalKeyUp = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(
        false,
        getKeyCombo(e.nativeEvent),
        "onKeyUp",
        e.nativeEvent
      );
    },
    [invokeCallback]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleGlobalKeyDown);
    document.addEventListener("keyup", handleGlobalKeyUp);

    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
      document.removeEventListener("keyup", handleGlobalKeyUp);
    };
  }, [handleGlobalKeyDown, handleGlobalKeyUp]);

  return { handleKeyDown: handleLocalKeyDown, handleKeyUp: handleLocalKeyUp };
};

export default useHotKey;
