// see https://phrase.com/blog/posts/how-to-localize-a-svelte-app-with-svelte-i18n/
// see https://lokalise.com/blog/svelte-i18n/

import { derived } from 'svelte/store';
import { dictionary, locale, _, date, time, number } from 'svelte-i18n';

const MESSAGE_FILE_URL_TEMPLATE = 'http://localhost:3000/lang/{locale}.json';
// const MESSAGE_FILE_URL_TEMPLATE = 'https://localhost:3030/lang/{locale}.json';

let cachedLocale;

async function setupI18n({ withLocale: _locale } = { withLocale: 'en-GB' }) {
  const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
    '{locale}',
    _locale
  );

  const res = await fetch(messsagesFileUrl);
  const messages = await res.json();
  dictionary.set({ [_locale]: messages });
  cachedLocale = _locale;
  locale.set(_locale);
}

// function formatDate(date, options) {
//   return new Intl.DateTimeFormat(cachedLocale, options).format(new Date(date));
// }

// Before any locale is set, svelte-i18n will give locale an object type.
// Once it is correctly set, the libray will set locale
// to the code of the active locale, e.g. "en", a string type.
// We check for this in our devired store, and make sure that isLocaleLoaded‘s value
// is true only after i18n initialization is successful.
const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');

// Handling Locale Direction: Right-to-Left VS Left-to-Right
// The dir store’s value is "rtl" if the active locale is Arabic, and "ltr" otherwise
// const dir = derived(locale, $locale => ($locale === 'ar' ? 'rtl' : 'ltr'));

export { _, locale, setupI18n, isLocaleLoaded, date, time, number };
