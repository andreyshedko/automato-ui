<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  {#if data.user}
  <ul>
    {#each Object.entries(data?.user) as [key, value]}
    <li>{key}: {value}</li>
    {/each}
  </ul>
  {/if}