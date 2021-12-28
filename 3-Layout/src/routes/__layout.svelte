<script>
  const date = new Date().getFullYear();
</script>

<header>
  <h1>SurfSpots</h1>
</header>

<main>
  <slot />
</main>

<footer>I like Feet - copyright {date}</footer>

<style>
  :global(html) {
    font-family: Arial, Helvetica, sans-serif;
  }

  header {
    background-color: aquamarine;
    padding: 15px;
  }

  header > h1 {
    margin: 0;
  }

  main {
    background-color: blanchedalmond;
    padding: 15px;
  }

  footer {
    background-color: aquamarine;
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 15px;
  }
</style>
