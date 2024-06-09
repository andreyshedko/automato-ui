<script lang="ts">
	import ConfirmCountrySelectionModal from '$lib/components/ConfirmCountrySelectionModal.svelte';
	import CountryList from '$lib/components/CountryList.svelte';
	import { deleteCountry, saveCountry, updateCountry } from '$lib/stores/countries';
	import { getCountryByUserId } from '$lib/stores/user';
	import type { PageData } from './$types';
	import { t } from '$lib/stores/locales';
	import Button from '../../../../../../automato-components/dist/button/Button.svelte';
	import { onDestroy, onMount } from 'svelte';
	import type { Unsubscriber } from 'svelte/store';
	import { storable } from '$lib/stores/storable';
	import ModalBodyFactory from '$lib/components/ModalBodyFactory.svelte';
	import ModalButtonsFactory from '$lib/components/ModalButtonsFactory.svelte';

	let country: string;
	let countryText: string;
	let selectedCountry: string;
	let list: string;
	let showModal = false;
	let _userId: number;
	let lsUnsub: Unsubscriber;
	let state: 'CREATE' | 'UPDATE' | 'DELETE';

	let editText = $t('edit');
	let deleteText = $t('delete');

	onMount(async () => {
		showModal = false;
		lsUnsub = storable().subscribe((id) => (_userId = +id));
		const { country_name } = await getCountryByUserId(_userId);
		country = country_name as string;
	});

	onDestroy(() => {
		lsUnsub();
	});

	const setState = (_state: 'CREATE' | 'UPDATE' | 'DELETE'): void => {
		state = _state;
		_showModal();
	};

	const _showModal = () => {
		showModal = !showModal;
	};

	const setCountry = (event: CustomEvent<any>) => {
		selectedCountry = event.detail;
	};

	const saveUserCountry = (): void => {
		saveCountry(country, _userId);
	};

	const updateUserCountry = (): void => {
		updateCountry(country, _userId);
	};

	const deleteUserCountry = (): void => {
		deleteCountry(country, _userId);
	};

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
			<ModalBodyFactory selectedCountry={selectedCountry ?? country} bind:state={state} {setCountry} />
		</p>
		<span slot="modalFooter">
			<ModalButtonsFactory
				{state}
				showModal={_showModal}
				create={saveUserCountry}
				edit={updateUserCountry}
				deleteAction={deleteUserCountry}
				disabled={!country}
			/>
		</span>
	</ConfirmCountrySelectionModal>
	<div class="fixed-grid has-auto-count">
		<div class="grid">
			<div class="cell">
				<h1>
					{#if !country}
						{@html $t('noCountry')}
					{:else}
						{country}
					{/if}
				</h1>
			</div>
			<div class="cell">
				{#if !showModal && !country}
					<Button label={list} clickCallback={_showModal} keydownCallback={_showModal} />
				{/if}

				<Button
					label={editText}
					clickCallback={() => setState('UPDATE')}
					keydownCallback={() => setState('UPDATE')}
				/>
				<Button
					label={deleteText}
					clickCallback={() => setState('DELETE')}
					keydownCallback={() => setState('DELETE')}
				/>
			</div>
		</div>
	</div>
</div>
