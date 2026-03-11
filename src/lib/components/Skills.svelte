<script lang="ts">
	import { skills } from '$lib/data/skills';
	import SectionHeader from './SectionHeader.svelte';
	import InView from './InView.svelte';
</script>

<section id="skills" class="py-24 px-6">
	<div class="max-w-5xl mx-auto">
		<InView>
			<SectionHeader title="Skills" />
		</InView>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each skills as category}
				<InView>
					<div class="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg p-6">
						<!-- Category header styled like a terminal prompt -->
						<div class="flex items-center gap-2 mb-4">
							<span class="text-lg">{category.icon}</span>
							<h3 class="font-mono text-[var(--color-accent-blue)] text-sm font-semibold">
								{category.category}
							</h3>
							<div class="flex-1 h-px bg-[var(--color-border)]"></div>
						</div>

						<div class="flex flex-wrap gap-2">
							{#each category.items as skill}
								<span class="text-sm font-mono px-3 py-1.5 rounded-md bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-blue)]/40 hover:text-[var(--color-text-primary)] hover:-translate-y-0.5 transition-all duration-200 cursor-default">
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</InView>
			{/each}
		</div>
	</div>
</section>
