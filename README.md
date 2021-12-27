# bug description

The `<select>` element in the index.svelte file should should show "Belgium" because of the countrySelected value is `{ code: 'BE', name: 'Belgium', }`

The problem is that in_layout i18n makes a kind of refresh just after the item has been selected so it looks like the.
