<script context="module">
    import { dataMod, isMod } from '$lib/stores.js';
  import { supabase } from "$lib/supabase";
  export async function load({ page }) {
    let { data, error } = await supabase.from("utf8_icons").select("*");
    if (!error) {
      return {
        props: {
          daten: data,
        }
      }
    }
    return {
      status: error,
      error: new Error(`Could not load data`),
    }
  }
</script>

<script>
  export let daten;
  const showDet = (x) => {
    console.log("clickAction", x);
    dataMod.set(x)
    isMod.set(true)
  }
  $: console.log("load", daten);
</script>

<main>
  <section class="page-container">
    <nav class="flex items-center mb-4">
        <a href="/" class="text-xl text-blue-800">&#10094; back</a>
        <div class="flex-grow"></div>
        
        <a href="/icons" class="text-blue-800 text-lg font-medium">Icon Libary</a>
    </nav>
    <h1 class="py-4 text-center border-b mb-8">
        UTF-8 Icon Libary
      </h1>
      <div class="css-grid">
        {#each daten as d}
          <div on:click={() => showDet(d)} class="cursor-pointer">
            <div class="card">
              <div class="text-6xl p-2">{@html d.icon}</div>
              <div class="text-sm">{d.name.toUpperCase()}</div>
            </div>
          </div>
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