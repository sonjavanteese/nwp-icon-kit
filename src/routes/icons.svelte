<script>
  import { Icon, iconlist } from "$lib/nwp-icons/";
</script>

<main>
<section class="page-container">
   <nav class="flex items-center mb-4">
    <a href="/" class="text-xl text-blue-800">&#10094; back</a>
    <div class="flex-grow"></div>
    <a href="/list" class="text-blue-800 text-lg font-medium">Icon List</a></nav>
  
  <h1 class="py-4 text-center border-b mb-8">Nwp Icon Libary</h1>

  <div class="css-grid">
    {#each iconlist as icon}
      <a href="/details/{icon}" id="nwp-{icon}">
        <div class="card">
          <div class="text-6xl p-2"><Icon name={icon} /></div>
          <div class="text-sm">{icon.toUpperCase()}</div>
        </div>
      </a>
    {/each}
  </div> 
</section>
</main>

<style>
  .css-grid {
    --min: 8rem;
    --gap: 1rem;
    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
  }
  .card {
    @apply flex flex-col px-4 py-2 shadow-xl items-center text-gray-600 space-y-4 border rounded-xl;
  }

</style>
