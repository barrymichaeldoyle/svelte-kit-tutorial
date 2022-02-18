<script context="module">
  export async function load({ error, status }) {
    return { props: { error, status }}
  }
</script>

<script>
  export let error;
  export let status;
</script>

{#if status === 404}
<h1>Page Not Found</h1>
{:else}
<h1>Horrible Error Happened!</h1>
<h3>{status}</h3>
<h3>{error.message}</h3>
{/if}