import { client, db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Fazer exercícios', desiredWeeklyFrequency: 4 },
      { title: 'Estudar inglês', desiredWeeklyFrequency: 3 },
      { title: 'Ler livros', desiredWeeklyFrequency: 2 },
      { title: 'Escrever', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  await db.insert(goalCompletions).values([
    {
      goalId: result[0].id,
      completedAt: new Date('2021-01-01'),
      createdAt: new Date(),
    },
  ])
}

seed().finally(() => {
  client.end()
  console.log('Seed complete')
})
