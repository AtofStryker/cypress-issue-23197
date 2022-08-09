describe('23197', () => {
  it('fails and calls fetch', () => {
    const alertFatalError = (error, runnable, promise) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
    
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: 'Cypress Fatal Error',
        redirect: 'follow'
      };
    
     fetch('http://127.0.0.1:3000', requestOptions)
        .then(response => { response.text(); })
        .then(result => { console.log(result); })
        .catch(fetchError => { console.log('error', fetchError);  })
    
        throw error;
    };
    
    Cypress.on('uncaught:exception', alertFatalError);

    cy.visit('cypress/fixtures/home.html')
    cy.get('.trigger-error').click()
  })
})