import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
	const existing = await prisma.environment.findFirst();

	if (!existing) {
		await prisma.environment.create({
			data: {
				language: 'en',
				name: 'EML',
				theme: 'default',
				pin: '000'
			}
		});
		console.log('✅ Created default Environment row (PIN: 000)');
	} else {
		console.log('ℹ️  Environment row already exists, skipping seed.');
	}
}

main()
	.catch((e) => {
		console.error('❌ Seed failed:', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
