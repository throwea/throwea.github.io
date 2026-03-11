<script lang="ts">
	import { experience } from '$lib/data/experience';
	import SectionHeader from './SectionHeader.svelte';
	import InView from './InView.svelte';
</script>

<section id="experience" class="py-24 px-6">
	<div class="max-w-3xl mx-auto">
		<InView>
			<SectionHeader title="Experience" />
		</InView>

		<!-- Compact single-column timeline -->
		<div class="relative pl-6">
			<!-- Vertical line -->
			<div class="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]"></div>

			{#each experience as entry, i}
				<InView>
					<div class="relative mb-8 last:mb-0">
						<!-- Timeline dot -->
						<div class="absolute -left-6 w-[15px] h-[15px] rounded-full bg-[var(--color-accent-blue)] shadow-[0_0_8px_var(--color-accent-blue)] z-10 mt-1"></div>

						<!-- Header row with logo -->
						<div class="flex items-start gap-3 mb-1">
							<img
								src={entry.logo}
								alt="{entry.company} logo"
								class="w-10 h-10 rounded-md object-contain bg-[var(--color-bg-card)] border border-[var(--color-border)] p-1 shrink-0"
							/>
							<div class="flex-1 min-w-0">
								<div class="flex items-baseline justify-between gap-4">
									<h3 class="text-base font-semibold text-[var(--color-text-primary)]">
										{entry.company}
									</h3>
									<span class="text-xs font-mono text-[var(--color-text-secondary)] whitespace-nowrap">
										{entry.dates}
									</span>
								</div>
								<p class="text-sm text-[var(--color-accent-blue)] font-mono">{entry.role}</p>
							</div>
						</div>

						<!-- Bullets -->
						<ul class="space-y-1 mb-3">
							{#each entry.bullets as bullet}
								<li class="text-sm text-[var(--color-text-secondary)] leading-snug flex gap-2">
									<span class="text-[var(--color-accent-green)] shrink-0">▸</span>
									<span>{bullet}</span>
								</li>
							{/each}
						</ul>

						<!-- Tags -->
						<div class="flex flex-wrap gap-1.5">
							{#each entry.tags as tag}
								<span class="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</InView>
			{/each}
		</div>
	</div>
</section>
