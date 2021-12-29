<script context="module">
  export async function load({ page }) {
    return {
      props: { slug: page.params.slug }
    }
  }
</script>

<script>
  export let slug;
</script>

<h1>Slug Page: {slug}</h1>