export interface ExperienceEntry {
	company: string;
	role: string;
	dates: string;
	bullets: string[];
	tags: string[];
	logo: string;
}

export const experience: ExperienceEntry[] = [
	{
		company: 'Walmart Global Tech',
		role: 'Software Engineer — Reliability Engineering',
		dates: 'Aug 2023 – Present',
		logo: '/logos/walmart.png',
		bullets: [
			'Saved $5M/yr by automating infrastructure scaling with Golang — 90%+ reduction in manual engineering hours',
			'Led development of OneClick, a platform for real-time production config, traffic control, and disaster recovery',
			'Built internal MCP server for AI-assisted playbook validation — reduced support tickets by 80%',
			'Authored deployment verification tooling that prevented 10+ production incidents'
		],
		tags: ['Golang', 'Kubernetes', 'Azure', 'Kafka', 'Grafana']
	},
	{
		company: 'AI Camp',
		role: 'Software Engineer',
		dates: 'Dec 2022 – Nov 2024',
		logo: '/logos/aicamp.png',
		bullets: [
			'Built and launched Novahub.ai — AI chatbot teaching CS/DS to 200+ students',
			'Full-stack development: FastAPI + OpenAI backend, Svelte + TypeScript frontend',
			'Owned CI/CD pipelines (GitHub Actions) and deployed production Discord bot on Fly.io'
		],
		tags: ['FastAPI', 'Svelte', 'TypeScript', 'OpenAI', 'Prisma']
	},
	{
		company: 'Booz Allen Hamilton',
		role: 'Software Engineer Intern',
		dates: 'Jun 2022 – Aug 2022',
		logo: '/logos/boozallen.png',
		bullets: [
			'Built autoencoder anomaly detection on system logs — 212% latency improvement in preprocessing',
			'Designed NVIDIA Morpheus inference pipeline with Kafka ingestion — shipped to production'
		],
		tags: ['Python', 'PyTorch', 'Kubernetes', 'Kafka', 'NVIDIA']
	},
	{
		company: 'D2K Rice — Medical Informatics Corp.',
		role: 'ML Engineer Intern',
		dates: 'Aug 2022 – Dec 2022',
		logo: '/logos/rice.png',
		bullets: [
			'Built ML models predicting pediatric cardiac output from waveform signals (XGBoost, Spline Regression)'
		],
		tags: ['Python', 'NumPy', 'XGBoost', 'ML']
	}
];
