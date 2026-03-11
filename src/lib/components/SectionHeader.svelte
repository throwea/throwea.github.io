<script lang="ts">
	let { title }: { title: string } = $props();
</script>

<div class="mb-12">
	<h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] flex items-center gap-3">
		<span class="font-mono text-[var(--color-accent-green)] text-xl md:text-2xl">&gt;_</span>
		{title}
	</h2>
	<div class="mt-3 h-px bg-[var(--color-border)] w-full relative">
		<div class="absolute left-0 top-0 h-px w-24 bg-[var(--color-accent-blue)]"></div>
	</div>
</div>
