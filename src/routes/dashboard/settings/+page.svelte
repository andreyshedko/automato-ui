<script lang="ts">
	import { t } from '$lib/stores/locales';
</script>

<div class="dashboard-container">
	<h1 class="title">{@html $t('settings')}</h1>
	<div class="fixed-grid has-3-cols">
		<div class="grid">
			<div class="cell">
				<div class="box">
					<a class="is-flex-direction-column" href="settings/country">
						<div class="is-flex is-flex-direction-row is-align-items-center">
							<i class="gg-flag"></i>
							<h6 class="title is-6 mx-2">{@html $t('country')}</h6>
						</div>
						<div class="media-content">
							<div class="content">
								<p class="is-size-7">
									{@html $t('countryText')}
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="cell">
				<div class="box">
					<article class="is-flex-direction-column">
						<div class="is-flex is-flex-direction-row is-align-items-center">
							<i class="gg-globe"></i>
							<h6 class="title is-6 mx-2">{@html $t('region')}</h6>
						</div>
						<div class="media-content">
							<div class="content">
								<p class="is-size-7">
									{@html $t('regionText')}
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="cell">
				<div class="box">
					<article class="is-flex-direction-column">
						<div class="is-flex is-flex-direction-row is-align-items-center">
							<i class="gg-organisation"></i>
							<h6 class="title is-6 mx-2">{@html $t('business')}</h6>
						</div>
						<div class="media-content">
							<div class="content">
								<p class="is-size-7">
									{@html $t('businessText')}
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="cell">
				<div class="box">
					<article class="is-flex-direction-column">
						<div class="is-flex is-flex-direction-row is-align-items-center">
							<i class="gg-credit-card"></i>
							<h6 class="title is-6 mx-2">{@html $t('payments')}</h6>
						</div>
						<div class="media-content">
							<div class="content">
								<p class="is-size-7">
									{@html $t('paymentsText')}
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="cell">
				<div class="box">
					<article class="is-flex-direction-column">
						<div class="is-flex is-flex-direction-row is-align-items-center">
							<i class="gg-info"></i>
							<h6 class="title is-6 mx-2">{@html $t('delivery')}</h6>
						</div>
						<div class="media-content">
							<div class="content">
								<p class="is-size-7">
									{@html $t('deliveryText')}
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="cell">
				<div class="box">
					<article class="is-flex-direction-column">
						<div class="is-flex is-flex-direction-row is-align-items-center">
							<i class="gg-bot"></i>
							<h6 class="title is-6 mx-2">{@html $t('automation')}</h6>
						</div>
						<div class="media-content">
							<div class="content">
								<p class="is-size-7">
									{@html $t('automationText')}
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="cell">
				<div class="box">
					<article class="is-flex-direction-column">
						<div class="is-flex is-flex-direction-row is-align-items-center">
							<i class="gg-file"></i>
							<h6 class="title is-6 mx-2">{@html $t('cookies')}</h6>
						</div>
						<div class="media-content">
							<div class="content">
								<p class="is-size-7">
									{@html $t('cookiesText')}
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div class="cell">
				<div class="box">
					<article class="is-flex-direction-column">
						<div class="is-flex is-flex-direction-row is-align-items-center">
							<i class="gg-comment"></i>
							<h6 class="title is-6 mx-2">{@html $t('comm')}</h6>
						</div>
						<div class="media-content">
							<div class="content">
								<p class="is-size-7">
									{@html $t('commText')}
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</div>
