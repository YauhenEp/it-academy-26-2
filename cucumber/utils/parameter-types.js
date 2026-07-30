import { defineParameterType } from '@wdio/cucumber-framework';
import Utils from "./utils";
import PageFactory from '../pageobjects/page-factory';

defineParameterType({
  regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
  name: 'locator',
  transformer: (string) => {
    if (string.indexOf(' > ') !== -1) {
        //Admin Page > Left Navigation > Search Field
      const array = string.split(' > ');
      // ["Admin Page", "Left Navigation", "Search Field"]

      return Utils.poParser(array, PageFactory);
    }

    return string;
  },
  useForSnippets: false,
});

defineParameterType({
  regexp: /[0-9]*-[th|st|nd|rd]* |[0-9]* |last |/,
  name: 'locator position',
  transformer: (position) => {
    if (position) {
      if (parseInt(position, 10)) {
        return { array: true, position: parseInt(position, 10) - 1 };
      }
      if (position === 'last ') {
        return { array: true, position: 'last' };
      }
    }

    return { array: false };
  },
  useForSnippets: false,
});

defineParameterType({
  regexp: /not contain|contain|be equal|not be equal|match|not match|be deeply equal|not be deeply equal|has length/,
  transformer(comparison) {
    const COMPARISONS = {
      contain: 'include',
      'not contain': 'notInclude',
      'be equal': 'equal',
      'not be equal': 'notEqual',
      'be deeply equal': 'deepEqual',
      'not be deeply equal': 'notDeepEqual',
      match: 'match',
      'not match': 'notMatch',
      'has length': 'lengthOf',
    };
    return COMPARISONS[comparison];
  },
  name: 'comparison',
  useForSnippets: false,
});

defineParameterType({
  regexp: /| \((.*)\)$/,
  async transformer(optionsString) {
    if (optionsString) {
      const optionsArray = optionsString.match(/((?:pixels|count): [0-9]*)/g);
      let optionsObject = {};
      optionsObject = optionsArray.reduce((optionsObj, currentOption) => {
        const val = currentOption.match(/(pixels|count): ([0-9]*)/);
        optionsObj[val[1]] = parseInt(val[2], 10);
        return optionsObj;
      }, {});
      return optionsObject;
    }
    return {};
  },
  name: 'scroll options',
  useForSnippets: false,
});

defineParameterType({
  regexp: /exist|be enabled|be displayed|be clickable|be focused|be displayed in viewport/,
  transformer(condition) {
    const CONDITIONS = {
      exist: 'waitForExist',
      'be enabled': 'waitForEnabled',
      'be displayed': 'waitForDisplayed',
      'be clickable': 'waitForClickable',
      'be focused': 'waitForElementFocused',
      'be displayed in viewport': 'waitForElementDisplayedInViewport',
    };
    return CONDITIONS[condition];
  },
  name: 'wait condition',
  useForSnippets: false,
});