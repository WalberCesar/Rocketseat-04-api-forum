import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionRepository } from '../../../../../tests/repositories/in-memory-questions-repository'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: CreateQuestionUseCase

describe('Create question use case', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository( )
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })

  test('create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta',
    })

    expect(question.id).toBeTruthy()
  })
})
