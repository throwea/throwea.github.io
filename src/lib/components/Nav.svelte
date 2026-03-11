<script lang="ts">
	import { personal, navItems } from '$lib/data/personal';
	import { onMount } from 'svelte';

	let activeSection = $state('home');
	let mobileOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;

			const sections = navItems.map((item) => item.href.replace('#', ''));
			for (let i = sections.length - 1; i >= 0; i--) {
				const el = document.getElementById(sections[i]);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 120) {
						activeSection = sections[i];
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleNavClick() {
		mobileOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)]'
		: 'bg-transparent'}"
>
	<div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
		<a href="#home" class="font-mono text-[var(--color-accent-blue)] text-sm font-semibold hover:text-[var(--color-accent-green)] transition-colors">
			{personal.name.toLowerCase().replace(' ', '_')}
		</a>

		<!-- Desktop nav -->
		<div class="hidden md:flex items-center gap-1">
			{#each navItems as item}
				<a
					href={item.href}
					onclick={handleNavClick}
					class="px-3 py-2 text-sm font-mono transition-colors rounded-md
						{activeSection === item.href.replace('#', '')
						? 'text-[var(--color-accent-blue)] bg-[var(--color-bg-elevated)]'
						: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<!-- Mobile hamburger -->
		<button
			class="md:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle navigation"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="md:hidden bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] px-6 py-4">
			{#each navItems as item}
				<a
					href={item.href}
					onclick={handleNavClick}
					class="block py-2 text-sm font-mono transition-colors
						{activeSection === item.href.replace('#', '')
						? 'text-[var(--color-accent-blue)]'
						: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}"
				>
					{item.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
