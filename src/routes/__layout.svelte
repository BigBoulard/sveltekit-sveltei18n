<script>
  import { setupI18n, isLocaleLoaded } from '$lib/services/i18n.js';

  $: if (!$isLocaleLoaded) {
    setupI18n({ withLocale: 'fr-FR' });
  }
</script>

{#if !$isLocaleLoaded}
  Please wait...
{:else}
  <main>
    <slot />
  </main>
{/if}
