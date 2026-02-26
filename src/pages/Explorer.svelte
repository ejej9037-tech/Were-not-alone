<script>
  let methods = [
    { name: 'Method A', description: 'Description of Method A' },
    { name: 'Method B', description: 'Description of Method B' },
    { name: 'Method C', description: 'Description of Method C' },
  ];
</script>

<main>
  <h1>Interactive Detection Methods Explorer</h1>
  <ul>
    {#each methods as method}
      <li>
        <h2>{method.name}</h2>
        <p>{method.description}</p>
      </li>
    {/each}
  </ul>
</main>
