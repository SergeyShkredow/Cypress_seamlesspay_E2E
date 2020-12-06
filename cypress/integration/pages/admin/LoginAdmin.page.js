import {urlAdmin} from '../../../support/constants'

export class LoginAdminPage {

    goToLogin(siteDomain) {
        switch (siteDomain) {
            case 'rc-':
                cy.visit(`rc-${urlAdmin}`)
                break;
            case 'prod':
                cy.visit(`${urlAdmin}`)
                break;
            case 'test':
                cy.visit(`test-${urlAdmin}`)
                break;
            default:
                alert('We hope that this page looks ok!');
        }
    };

    signIn() {
        cy.get('[type="email"]').type('seamlesspaytest3@gmail.com')
        cy.get('[type="password"]').type('123123!')
        cy.get('[type="button"]').click()
    }
}
