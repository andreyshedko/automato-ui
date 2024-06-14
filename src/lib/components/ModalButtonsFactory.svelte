<script lang="ts">
	import Button from '../../../../automato-components/dist/button/Button.svelte';
    import { t } from '$lib/stores/locales';

	export let state: 'CREATE' | 'UPDATE' | 'DELETE';
	export let showModal: () => void;
    export let create: () => void;
    export let edit: () => void;
    export let deleteAction: () => void;
    export let disabled: boolean;

    let saveText = $t('save');
	let cancelText = $t('cancel');
	let editText = $t('edit');
	let deleteText = $t('delete');
</script>

{#if (state === 'CREATE')}
	<Button
		primary={true}
		size="medium"
		label={saveText}
		clickCallback={create}
		keydownCallback={create}
		disabled={disabled}
	/>
	<Button
		primary={false}
		size="medium"
		label={cancelText}
		clickCallback={showModal}
		keydownCallback={showModal}
	/>
{:else if (state === 'UPDATE')}
	<Button
		primary={true}
		size="medium"
		label={editText}
		clickCallback={edit}
		keydownCallback={edit}
		disabled={disabled}
	/>
	<Button
		primary={false}
		size="medium"
		label={cancelText}
		clickCallback={showModal}
		keydownCallback={showModal}
	/>
{:else if (state === 'DELETE')}
	<Button
		primary={true}
		size="medium"
		label={deleteText}
		clickCallback={deleteAction}
		keydownCallback={deleteAction}
		disabled={disabled}
	/>
	<Button
		primary={false}
		size="medium"
		label={cancelText}
		clickCallback={showModal}
		keydownCallback={showModal}
	/>
{/if}
