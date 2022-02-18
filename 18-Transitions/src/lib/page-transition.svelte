<script>
  import { blur } from 'svelte/transition';
  export let refresh = '';
</script>

{#key refresh}
  <div
    in:blur={{ duration: 200, delay: 250 }}
    out:blur|local={{ duration: 200 }}
  >
    <slot />
  </div>
{/key}
