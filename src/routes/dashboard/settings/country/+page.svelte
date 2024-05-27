<script lang="ts">
	import ConfirmCountrySelectionModal from '$lib/components/ConfirmCountrySelectionModal.svelte';
	import CountryList from '$lib/components/CountryList.svelte';
	import type { PageData } from './$types';
	import { t } from '$lib/stores/locales';
	import Button from '../../../../../../automato-components/dist/button/Button.svelte';

	let country: string;
	let countryText: string;
	let list: string;
	let showModal = false;

	const setCountry = (country: CustomEvent<any>) => {
		const { value } = country.detail;
		country = value;
	};

	const saveCountry = () => {
		
	};

	let saveText = $t('save');
	let cancelText = $t('cancel');

	export let data: PageData;
	if (data && data.items) {
		country = data?.items[0]?.regional_structure.find(
			(item: { type: string }) => item.type === 'regional.country'
		).name;
		countryText = `${$t('yourCountryIs')} ${country}`;
	} else {
		showModal = !showModal;
		countryText = $t('noCountry');
		list = $t('countriesList');
	}
</script>

<div class="dashboard-container">
	<ConfirmCountrySelectionModal {showModal}>
		<h1 slot="modalHeader">{countryText}</h1>
		<p slot="modalBody">
			{#if country}
				<h1>{country}</h1>
			{:else}
				<CountryList on:countrySelected={(event) => setCountry(event)} />
			{/if}
		</p>
		<span slot="modalFooter">
			<Button
				primary={true}
				size="medium"
				label={saveText}
				clickCallback={saveCountry}
				keydownCallback={saveCountry}
			/>
			<Button
				primary={false}
				size="medium"
				label={cancelText}
				clickCallback={() => (showModal = !showModal)}
				keydownCallback={() => (showModal = !showModal)}
			/>
		</span>
	</ConfirmCountrySelectionModal>
	{#if !country}
		<h1>{@html $t('noCountry')}</h1>
		{#if !showModal}
			<Button
				label={list}
				clickCallback={() => (showModal = !showModal)}
				keydownCallback={() => (showModal = !showModal)}
			/>
		{/if}
	{/if}
</div>
