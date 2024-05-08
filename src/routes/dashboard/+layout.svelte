<script lang="ts">
	import './dashboard.scss';
	import { isAuthenticated } from '$lib/stores/user';
	import { t } from '$lib/stores/locales';

	let _isAuthenticated: boolean;
	isAuthenticated.subscribe((value) => (_isAuthenticated = value));

	let sideBar: HTMLDivElement;
	let arrowCollapse: HTMLDivElement;
	let icon: HTMLElement;

	const toggle = (): void => {
		sideBar.classList.toggle('collapse');
		arrowCollapse.classList.toggle('collapse');
		if (arrowCollapse.classList.contains('collapse')) {
			icon.classList.remove('gg-arrow-left-o');
			icon.classList.add('gg-arrow-right-o');
		} else {
			icon.classList.remove('gg-arrow-right-o');
			icon.classList.add('gg-arrow-left-o');
		}
	};
</script>

<div class="grid-container">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="side-bar has-background-info-light"
		bind:this={sideBar}
		on:click={toggle}
		on:keydown={toggle}
		aria-roledescription="sidebar"
	>
		<div
			class="is-flex is-flex-direction-row-reverse"
			bind:this={arrowCollapse}
			aria-roledescription="sidebar icon"
		>
			<i class="logo-name__icon gg-arrow-left-o mt-4" id="logo-name__icon" bind:this={icon}></i>
		</div>
		<ul class="category-list">
			<div class="category-header">{@html $t('dashboard')}</div>
			<li class="category-item">
				<a href="/dashboard/home" class="is-flex is-flex-direction-row is-align-items-center">
					<span>
						<i class="gg-home"></i>
					</span>
					<span class="category-item-text">
						{@html $t('activities')}
					</span>
					<span class="category-item-number">9</span>
					<span class="tooltip">{@html $t('activities')}</span>
				</a>
			</li>
			<li class="category-item">
				<a href="/dashboard/sites" class="is-flex is-flex-direction-row is-align-items-center">
					<span>
						<i class="gg-website"></i>
					</span>
					<span class="category-item-text">{@html $t('mySites')}</span>
					<span class="category-item-number">43</span>
					<span class="tooltip">{@html $t('mySites')}</span>
				</a>
			</li>
			<li class="category-item">
				<a href="/dashboard/settings" class="is-flex is-flex-direction-row is-align-items-center">
					<span>
						<i class="gg-options"></i>
					</span>
					<span class="category-item-text">{@html $t('settings')}</span><span
						class="category-item-number">78</span
					>
					<span class="tooltip">{@html $t('settings')}</span>
				</a>
			</li>
			<li class="category-item">
				<a href="/dashboard/account" class="is-flex is-flex-direction-row is-align-items-center">
					<span>
						<i class="gg-profile"></i>
					</span>
					<span class="category-item-text">{@html $t('account')}</span><span
						class="category-item-number">253</span
					>
					<span class="tooltip">{@html $t('account')}</span>
				</a>
			</li>
		</ul>
	</div>
	<div class="is-flex is-flex-direction-row vw100">
		<slot />
	</div>
</div>
