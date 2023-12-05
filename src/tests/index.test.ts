import PubCompanyController from '../Controller/PubCompanyController';

describe('testing create publisher company', () => {
  test('createPubCompany function', async () => {
    expect(await new PubCompanyController().createPubCompany("teste1234", 2000)).toBe("Teste deu certo");
  })
})