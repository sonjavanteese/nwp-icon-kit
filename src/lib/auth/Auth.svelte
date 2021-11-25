<script>
  import { nwp_user, nwp_auth } from "./auth";
  import { supabase } from "./supa";
  import SignIn from "./signin.svelte";

  nwp_user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    if (session !== null) {
      nwp_auth.set(session)
      console.log("$nwp_auth:", Object.keys(session))
    }
  })
  $: if ($nwp_user) {
    console.log("$nwp_user:", Object.keys($nwp_user));
  }
</script>

{#if $nwp_user}
  <slot />
{:else}
  <SignIn />
{/if}
