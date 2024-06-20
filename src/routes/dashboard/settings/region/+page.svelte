<script lang="ts">
	import Select from '../../../../../../automato-components/dist/select/Select.svelte';
	import { t } from '$lib/stores/locales';

	import {
		languages,
		getLanguages,
		getLocales,
		getCurrencies,
		loadUserSettings,
		userRegionalSettings,

		getTimeZones,

		locales,

		currencies,

		timezones




	} from '$lib/stores/regional_settings';
	import { onMount } from 'svelte';
	import type { UserRegionalSettings } from '$lib/app';
	import Button from '../../../../../../automato-components/dist/button/Button.svelte';

	let _languages: string[] = [];
	let _locales: string[] = [];
	let _currencies: string[] = [];
	let _timezones: string[] = [];

	let settings: UserRegionalSettings;
	let saveText = `${$t('save')}`;

	languages.subscribe((value) => {
		_languages = value.map((v) => `${v.value} (${v.id})`);
	});

	locales.subscribe((value) => {
		_locales = value.map((v) => `${v.value} (${v.id})`);
	});

	currencies.subscribe((value) => {
		_currencies = value.map((v) => `${v.value} (${v.id})`);
	});

	timezones.subscribe((value) => {
		_timezones = value.map((v) => `${v.value} (${v.id})`);
	});

	userRegionalSettings.subscribe((v) => (settings = v as unknown as UserRegionalSettings));

	onMount(() => {
		getLanguages();
		getLocales();
		getCurrencies();
		getTimeZones();
		loadUserSettings();
	});

	const dispatchSiteLanguage = (language: CustomEvent): void => {
		settings = { ...settings, site_language: language.detail };
	};

	const dispatchAccountLanguage = (language: CustomEvent): void => {
		settings = { ...settings, account_language: language.detail };
	};

	const dispatchLocale = (locale: CustomEvent): void => {
		settings = { ...settings, account_language: locale.detail };
	};

	const dispatchCurrency = (currency: CustomEvent): void => {
		settings = { ...settings, currency: currency.detail };
	};

	const dispatchTimeZone = (timezone: CustomEvent): void => {
		settings = { ...settings, timezone: timezone.detail };
	};

	const save = (): void => {
		saveRegionalSettings(settings);
	}
</script>

<div class="dashboard-container">
	{@html $t('siteLanguage')}
	<Select
		id={'languages'}
		items={_languages}
		on:change={(value) => dispatchSiteLanguage(value)}
		selectedValue={settings?.site_language}
	/>
	{@html $t('accountLanguage')}
	<Select
		id={'languages'}
		items={_languages}
		on:change={(value) => dispatchAccountLanguage(value)}
		selectedValue={settings?.account_language}
	/>
	{@html $t('locale')}
	<Select
		id={'locales'}
		items={_locales}
		on:change={(value) => dispatchLocale(value)}
		selectedValue={settings?.locale}
	/>
	{@html $t('currency')}
	<Select
		id={'currencies'}
		items={_currencies}
		on:change={(value) => dispatchCurrency(value)}
		selectedValue={settings?.currency}
	/>
	{@html $t('timezone')}
	<Select
		id={'timezones'}
		items={_timezones}
		on:change={(value) => dispatchTimeZone(value)}
		selectedValue={settings?.timezone}
	/>

	<Button
		primary={true}
		size="medium"
		label={saveText}
		clickCallback={save}
		keydownCallback={save}
	/>
</div>
