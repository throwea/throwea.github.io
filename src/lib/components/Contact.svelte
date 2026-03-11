<script lang="ts">
	import { personal } from '$lib/data/personal';
	import SectionHeader from './SectionHeader.svelte';
	import InView from './InView.svelte';
</script>

<section id="contact" class="py-24 px-6 dot-grid">
	<div class="max-w-5xl mx-auto">
		<InView>
			<SectionHeader title="Contact" />
		</InView>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
			<!-- Consulting info -->
			<InView>
				<div class="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg p-8 h-full flex flex-col">
					<div class="flex items-center gap-3 mb-4">
						<span class="text-2xl">💼</span>
						<h3 class="text-xl font-semibold text-[var(--color-text-primary)]">
							{personal.consulting.company}
						</h3>
					</div>

					<p class="text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
						{personal.consulting.description}
					</p>

					<div class="border-t border-[var(--color-border)] pt-4">
						<p class="text-xs font-mono text-[var(--color-text-secondary)]">
							<span class="text-[var(--color-accent-green)]">▸</span> Backend Engineering
						</p>
						<p class="text-xs font-mono text-[var(--color-text-secondary)]">
							<span class="text-[var(--color-accent-green)]">▸</span> AI / Infrastructure Solutions
						</p>
						<p class="text-xs font-mono text-[var(--color-text-secondary)]">
							<span class="text-[var(--color-accent-green)]">▸</span> Performance Optimization
						</p>
						<p class="text-xs font-mono text-[var(--color-text-secondary)]">
							<span class="text-[var(--color-accent-green)]">▸</span> System Design & Architecture
						</p>
					</div>
				</div>
			</InView>

			<!-- Contact form -->
			<InView>
				<form
					action="https://formspree.io/f/your-form-id"
					method="POST"
					class="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg p-8 h-full flex flex-col"
				>
					<h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
						Get in touch
					</h3>

					<div class="space-y-4 flex-1">
						<div>
							<label for="name" class="block text-xs font-mono text-[var(--color-text-secondary)] mb-1.5 uppercase tracking-wider">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								class="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-md px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]/50 focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors font-mono"
								placeholder="your_name"
							/>
						</div>

						<div>
							<label for="email" class="block text-xs font-mono text-[var(--color-text-secondary)] mb-1.5 uppercase tracking-wider">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="_replyto"
								required
								class="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-md px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]/50 focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors font-mono"
								placeholder="you@example.com"
							/>
						</div>

						<div class="flex-1">
							<label for="message" class="block text-xs font-mono text-[var(--color-text-secondary)] mb-1.5 uppercase tracking-wider">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								required
								class="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-md px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]/50 focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none font-mono"
								placeholder="Tell me about your project..."
							></textarea>
						</div>
					</div>

					<button
						type="submit"
						class="mt-6 w-full bg-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/90 text-[var(--color-bg-primary)] font-mono font-semibold text-sm py-3 rounded-md transition-colors"
					>
						$ send_message
					</button>
				</form>
			</InView>
		</div>
	</div>
</section>
