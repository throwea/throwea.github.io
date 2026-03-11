<script lang="ts">
	import { onMount } from 'svelte';

	let {
		threshold = 0.15,
		rootMargin = '0px',
		once = true,
		children
	}: {
		threshold?: number;
		rootMargin?: string;
		once?: boolean;
		children: any;
	} = $props();

	let element: HTMLDivElement;
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						if (once) observer.unobserve(entry.target);
					} else if (!once) {
						isVisible = false;
					}
				});
			},
			{ threshold, rootMargin }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="transition-all duration-700 ease-out {isVisible
		? 'opacity-100 translate-y-0'
		: 'opacity-0 translate-y-6'}"
>
	{@render children()}
</div>
