<script context="module">
  // export const prerender = false;
  export const ssr = false;
</script>

<script>
  let countrySelected = {
    code: 'BE',
    name: 'Belgium',
  };

  const countries = [
    {
      code: 'FR',
      name: 'France',
    },
    {
      code: 'BE',
      name: 'Belgium',
    },
    {
      code: 'GA',
      name: 'Gabon',
    },
  ];
</script>

<select bind:value={countrySelected}>
  {#each countries as country}
    <option value={country} selected={country.code === countrySelected.code}>
      {country.name}
    </option>
  {/each}
</select>
