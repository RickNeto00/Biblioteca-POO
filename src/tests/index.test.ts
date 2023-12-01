import PubCompanyController from '../Controller/PubCompanyController';
import createPubCompanyView from '../View/pubCompany/create';

describe('testing create publisher company', () => {
  test('createPubCompany function', async () => {
    expect(await new PubCompanyController().createPubCompany("teste2", 2000)).toBe(createPubCompanyView())
  })
})