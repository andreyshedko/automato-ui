<script lang="ts">
	import CountryList from './CountryList.svelte';

	export let state: 'CREATE' | 'UPDATE' | 'DELETE';
	export let selectedCountry: string;
	export let setCountry: (event: CustomEvent<any>) => void;
</script>

{#if (state === 'UPDATE')}
	{#if selectedCountry}
		<h1>
			Do you really want to set {selectedCountry} as your country?
		</h1>
	{/if}
	<CountryList on:countrySelected={(event) => setCountry(event)} {selectedCountry} />
{:else if (state === 'DELETE')}
	<h1>
		Do you really want to delete {selectedCountry} as your country?
	</h1>
{:else}
	{#if selectedCountry}
		<h1>
			Save {selectedCountry} as your country?
		</h1>
	{/if}
	<CountryList on:countrySelected={(event) => setCountry(event)} {selectedCountry} />
{/if}
