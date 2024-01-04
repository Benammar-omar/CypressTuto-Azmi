class Login {


    EmailField(email)
    {
    return cy.get('#user-name').type(email)
    }
    
    PasswordField(passowrd)
    
    {
    return cy.get('#password').last().type(passowrd)
    }
    
    
  LoginButton()
    
    {
      return cy.get('.btn_action').contains('LOGIN')
    }
ClickLogout()
{
    return cy.contains('Logout')

}

}

export default Login;






