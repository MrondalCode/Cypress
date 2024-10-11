class ApiHelper {
    signup(user) {
      return cy.request('POST', 'https://api.demoblaze.com/signup', user);
    }
  
    login(user) {
      return cy.request('POST', 'https://api.demoblaze.com/login', user);
    }
  }
  
  export const apiHelper = new ApiHelper();
  