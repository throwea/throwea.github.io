export interface SkillCategory {
	category: string;
	icon: string;
	items: string[];
}

export const skills: SkillCategory[] = [
	{
		category: 'Languages',
		icon: '{}',
		items: ['Golang', 'Python', 'TypeScript', 'Java', 'C', 'Lua', 'R']
	},
	{
		category: 'Infrastructure',
		icon: '☁',
		items: ['Kubernetes', 'Docker', 'AWS', 'Azure', 'GCP', 'Kafka', 'Fly.io']
	},
	{
		category: 'Frameworks',
		icon: '⚡',
		items: ['FastAPI', 'Svelte', 'React', 'Prisma', 'PyTorch', 'NumPy']
	},
	{
		category: 'Tools',
		icon: '⚙',
		items: ['Git', 'Neovim', 'VSCode', 'Grafana', 'GitHub Actions', 'Docker Compose']
	}
];
