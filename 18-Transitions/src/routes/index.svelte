<script>
  import Posts from '$lib/posts.svelte'
</script>

<h1>Welcome to SurfSpots</h1>

<h3><a href="/about" sveltekit:prefetch>Read all about us here!</a></h3>

<h3>Check Out Epic Surf Spots</h3>

<Posts count={3} />
