<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import InView from './InView.svelte';
</script>

<section id="recognition" class="py-24 px-6 dot-grid">
	<div class="max-w-4xl mx-auto">
		<InView>
			<SectionHeader title="Recognition" />
		</InView>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			<InView>
				<div class="bg-[var(--color-bg-elevated)] border border-[var(--color-accent-purple)]/30 rounded-lg p-6 relative overflow-hidden h-full">
					<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)]"></div>
					<div class="flex items-start gap-3">
						<div class="text-2xl shrink-0 mt-0.5">🏆</div>
						<div>
							<h3 class="text-base font-semibold text-[var(--color-text-primary)] mb-0.5">
								Tech Fwd Award · 2026
							</h3>
							<p class="text-xs font-mono text-[var(--color-accent-purple)] mb-2">
								Walmart Global Tech
							</p>
							<p class="text-sm text-[var(--color-text-secondary)] leading-snug">
								Engineering excellence for rearchitecting backend systems to fully automate regional-level failover for business-critical applications.
							</p>
						</div>
					</div>
				</div>
			</InView>

			<InView>
				<div class="bg-[var(--color-bg-elevated)] border border-[var(--color-accent-purple)]/30 rounded-lg p-6 relative overflow-hidden h-full">
					<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-blue)]"></div>
					<div class="flex items-start gap-3">
						<div class="text-2xl shrink-0 mt-0.5">🏆</div>
						<div>
							<h3 class="text-base font-semibold text-[var(--color-text-primary)] mb-0.5">
								Engineering Excellence Award · 2024
							</h3>
							<p class="text-xs font-mono text-[var(--color-accent-purple)] mb-2">
								Walmart Global Tech
							</p>
							<p class="text-sm text-[var(--color-text-secondary)] leading-snug">
								Automated infrastructure scaling with Golang — reduced manual engineering hours by 90%+ and saved $5M annually.
							</p>
						</div>
					</div>
				</div>
			</InView>
		</div>
	</div>
</section>
