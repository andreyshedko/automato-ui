<script lang="ts">
	import Select from '../../../node_modules/automato-components/dist/select/Select.svelte';

	import { userLocale } from '$lib/stores/user';
	import { onDestroy } from 'svelte';
	import type { KeyValue } from '../../app';

	let countries: KeyValue[] = [];
	type CountriesList = { id: string; alpha2: string; alpha3: string; name: string };

	const callCountriesList = (_locale: string) => {
		let locale = _locale ?? 'en';
		fetch(`${import.meta.env.VITE_API_PATH}/countries/${locale}`).then(async (response) => {
			if (response.ok) {
				let resp: CountriesList[] = await response.json();
				countries = resp.map((item) => {
					return { key: item.id, value: item.name };
				});
			}
		});
	};

	const destroy = userLocale.subscribe((_locale) => callCountriesList(_locale));

    const dispatchCountry = (value) => {
        console.log(value.detail)
    }

	onDestroy(() => destroy());
</script>

<Select id={'countries'} items={countries} on:change={(value) => dispatchCountry(value)} />
