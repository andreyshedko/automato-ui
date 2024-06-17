<script lang="ts">

	import { userLocale } from '$lib/stores/user';
	import { countryList } from '$lib/stores/countries';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { fetchCountries } from '$lib/stores/countries';
	import Select from '../../../../automato-components/dist/select/Select.svelte';

	export let selectedCountry: string;

	let countries: string[] = [];
	let locale: string;

	const dispatch = createEventDispatcher();
	
	let userlocaleUnsub = userLocale.subscribe((_locale) => locale = _locale);
	let countryListUnsub = countryList.subscribe(list => countries = list);

	onMount(async () => {
		await fetchCountries(locale ?? 'en');
	})

	onDestroy(() => {
		countryListUnsub();
		userlocaleUnsub();
	});

	const dispatchCountry = (value: CustomEvent<any>): void => {
		dispatch('countrySelected', value.detail);
	};
</script>

<Select
	id={'countries'}
	items={countries}
	on:change={(value) => dispatchCountry(value)}
	selectedValue={selectedCountry}
/>
