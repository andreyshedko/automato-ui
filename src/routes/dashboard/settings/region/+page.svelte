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
		timezones,
		saveRegionalSettings
	} from '$lib/stores/regional_settings';
	import { onDestroy, onMount } from 'svelte';
	import type { UserRegionalSettings } from '$lib/app';
	import Button from '../../../../../../automato-components/dist/button/Button.svelte';
	import './region.scss';

	let _languages: string[] = [];
	let _locales: string[] = [];
	let _currencies: string[] = [];
	let _timezones: string[] = [];
	let _apply_to_all_sites = false;

	let settings: UserRegionalSettings;
	let saveText = `${$t('save')}`;

	const languageSub = languages.subscribe((value) => {
		_languages = value.map((v) => `${v.value} (${v.id})`);
	});

	const localesSub = locales.subscribe((value) => {
		_locales = value.map((v) => `${v.value} (${v.id})`);
	});

	const currenciesSub = currencies.subscribe((value) => {
		_currencies = value.map((v) => `${v.value} (${v.id})`);
	});

	const timezonesSub = timezones.subscribe((value) => {
		_timezones = value.map((v) => `${v.time_zone} - ${v.utc_offset} (${v.name})`);
	});

	const settingsSub = userRegionalSettings.subscribe((v) => {
		settings = v as unknown as UserRegionalSettings;
		_apply_to_all_sites = settings?.apply_to_all_sites;
	});

	onMount(() => {
		getLanguages();
		getLocales();
		getCurrencies();
		getTimeZones();
		loadUserSettings();
	});

	onDestroy(() => {
		languageSub();
		localesSub();
		currenciesSub();
		timezonesSub();
		settingsSub();
	});

	const dispatchSiteLanguage = (language: CustomEvent): void => {
		settings = { ...settings, site_language: language.detail };
	};

	const dispatchAccountLanguage = (language: CustomEvent): void => {
		settings = { ...settings, account_language: language.detail };
	};

	const dispatchLocale = (locale: CustomEvent): void => {
		settings = { ...settings, regional_settings: locale.detail };
	};

	const dispatchCurrency = (currency: CustomEvent): void => {
		settings = { ...settings, currency: currency.detail };
	};

	const dispatchTimeZone = (timezone: CustomEvent): void => {
		settings = { ...settings, time_zone: timezone.detail };
	};

	const dispatchApplyToAll = (): void => {
		settings = { ...settings, apply_to_all_sites: _apply_to_all_sites };
	};

	const save = (): void => {
		saveRegionalSettings(settings as unknown as Record<string, unknown>);
	};
</script>

<div class="dashboard-container is-flex is-flex-direction-column is-align-items-center p-2">
	<div class="panel w-50">
		<p class="panel-heading">{@html $t('region')}</p>
		<div class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
			<h4 class="is-size-4">{@html $t('siteLanguage')}</h4>
			<h6 class="is-size-6">{@html $t('siteLanguageLong')}</h6>
			<Select
				id={'languages'}
				items={_languages}
				on:change={(value) => dispatchSiteLanguage(value)}
				selectedValue={settings?.site_language}
			/>
		</div>
		<div class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
			<h4 class="is-size-4">{@html $t('accountLanguage')}</h4>
			<Select
				id={'languages'}
				items={_languages}
				on:change={(value) => dispatchAccountLanguage(value)}
				selectedValue={settings?.account_language}
			/>
		</div>
		<div class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
			<h4 class="is-size-4">{@html $t('locale')}</h4>
			<h6 class="is-size-6">{@html $t('localeLong')}</h6>
			<Select
				id={'locales'}
				items={_locales}
				on:change={(value) => dispatchLocale(value)}
				selectedValue={settings?.regional_settings}
			/>
		</div>
		<div class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
			<h4 class="is-size-4">{@html $t('currency')}</h4>
			<h6 class="is-size-6">{@html $t('localeLong')}</h6>
			<Select
				id={'currencies'}
				items={_currencies}
				on:change={(value) => dispatchCurrency(value)}
				selectedValue={settings?.currency}
			/>
		</div>
		<div class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
			<h4 class="is-size-4">{@html $t('timezone')}</h4>
			<h6 class="is-size-6">{@html $t('timezoneLong')}</h6>
			<Select
				id={'timezones'}
				items={_timezones}
				on:change={(value) => dispatchTimeZone(value)}
				selectedValue={settings?.timezone}
			/>
		</div>
		<div class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
			<label class="checkbox is-flex is-fkex-direction-row">
				<input
					type="checkbox"
					bind:checked={_apply_to_all_sites}
					on:change={(value) => dispatchApplyToAll(value)}
				/>
				<p class="is-size-6">{@html $t('applyToAll')}</p>
			</label>
		</div>
		<div class="panel-block is-flex is-flex-direction-row">
			<Button
				primary={true}
				size="large"
				label={saveText}
				clickCallback={save}
				keydownCallback={save}
			/>
		</div>
	</div>
</div>
