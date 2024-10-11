// import { apiHelper } from '../support/apiHelper';
import { apiHelper } from '../../support/apiHelper';

describe('Pruebas API en Demoblaze', () => {
  const newUser = { username: 'userAlex123', password: 'S2F0dHkxMjM0' };
  //const UserCreate = { username: 'userAlex123', password: 'Alexander_1' };

  it('Debería registrar un nuevo usuario', () => {
    apiHelper.signup(newUser).then(response => {
      expect(response.status).to.eq(200);
      //expect(response.body).to.have.property('errorMessage', true);
    });
  });

  it('Debería fallar al registrar un usuario ya existente', () => {
    apiHelper.signup(newUser).then(response => {
      expect(response.body).to.have.property('errorMessage', 'This user already exist.');
    });
  });

  it('Debería hacer login con credenciales correctas', () => {
    apiHelper.login(newUser).then(response => {
      expect(response.status).to.eq(200);
    });
  });

  it('Debería fallar login con credenciales incorrectas', () => {
    const wrongUser = { username: 'fake_user', password: 'wrong_password' };
    apiHelper.login(wrongUser).then(response => {
      expect(response.body).to.have.property('errorMessage','Wrong password.');
    });
  });
});
