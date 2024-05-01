<script lang="ts">
    import { onMount } from 'svelte';
    import type { LayoutData } from "./$types";
	import { session } from '$lib/stores/session';
    export let data: LayoutData;

    let loading: boolean = true;
    let loggedIn: boolean = false;

    session.subscribe((cur: any) => {
        loading = cur?.loading;
        loggedIn = cur?.loggedIn;
    });

    onMount(async () => {
        const user: any = await data.getAuthUser();

        const loggedIn = !!user && user?.emailVerified;
        session.update((cur: any) => {
            loading = false;
            return {
                ...cur,
                user,
                loggedIn,
                loading: false,
            };
        });

        if (loggedIn) {
            goto("/");
        }
    });
</script>