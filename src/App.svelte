<script>
  import Header from './components/Header.svelte';
  import Dashboard from './pages/Dashboard.svelte';
  import Explorer from './pages/Explorer.svelte';
  import About from './pages/About.svelte';

  let currentPage = 'dashboard';

  function navigateTo(page) {
    currentPage = page;
  }
</script>

<Header on:navigate={e => navigateTo(e.detail)} />

<main>
  {#if currentPage === 'dashboard'}
    <Dashboard />
  {:else if currentPage === 'explorer'}
    <Explorer />
  {:else if currentPage === 'about'}
    <About />
  {/if}
</main>

<style>
  main {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>