<script lang="ts">
	import ConfirmCountrySelectionModal from '$lib/components/ConfirmCountrySelectionModal.svelte';
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
	let state: 'CREATE' | 'UPDATE' | 'DELETE' = 'CREATE';

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
		isDisabled();
	};

	const saveUserCountry = async (): Promise<void> => {
		const response = await saveCountry(selectedCountry, _userId);
		if (response.status === 200) {
			country = (await response.json()).country_name;
		}
		_showModal();
	};

	const updateUserCountry = async (): Promise<void> => {
		const response = await updateCountry(selectedCountry, _userId);
		if (response.status === 200) {
			country = (await response.json()).country_name;
		}
		_showModal();
	};

	const deleteUserCountry = async (): Promise<void> => {
		const response = await deleteCountry(_userId);
		if (response.status === 200) {
			country = '';
		}
		_showModal();
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

	const isDisabled = (): boolean => {
		return state === 'CREATE' && !selectedCountry;
	};
</script>

<div class="dashboard-container">
	<ConfirmCountrySelectionModal {showModal}>
		<h1 slot="modalHeader">{countryText}</h1>
		<p slot="modalBody">
			<ModalBodyFactory selectedCountry={selectedCountry ?? country} {state} {setCountry} />
		</p>
		<span slot="modalFooter">
			<ModalButtonsFactory
				{state}
				showModal={_showModal}
				create={saveUserCountry}
				edit={updateUserCountry}
				deleteAction={deleteUserCountry}
				disabled={false}
			/>
		</span>
	</ConfirmCountrySelectionModal>
	<h6 class="title is-6 mx-2">{@html $t('country')}</h6>
	<div class="fixed-grid has-10-cols">
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
					<Button
						label={list}
						clickCallback={() => setState('CREATE')}
						keydownCallback={() => setState('CREATE')}
					/>
				{/if}
			</div>
			<div class="cell">
				<Button
					label={editText}
					clickCallback={() => setState('UPDATE')}
					keydownCallback={() => setState('UPDATE')}
					disabled={!country}
				/>
			</div>
			<div class="cell">
				<Button
					label={deleteText}
					clickCallback={() => setState('DELETE')}
					keydownCallback={() => setState('DELETE')}
					disabled={!country}
				/>
			</div>
		</div>
	</div>
</div>
