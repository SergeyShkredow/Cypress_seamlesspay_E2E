import {urlPortal} from '../../../support/constants'

export class LoginPortalPage {

    goToLogin(siteDomain) {
        switch (siteDomain) {
            case 'rc-':
                cy.visit(`rc-${urlPortal}`)
                break;
            case 'prod':
                cy.visit(`${urlPortal}`)
                break;
            case 'test-':
                cy.visit(`test-${urlPortal}`)
                break;
            default:
                alert('We hope that this page looks ok!');
        }
    };

    signIn() {
        cy.get('[type="email"]').type('seamlesspaytest@gmail.com')
        cy.get('[type="password"]').type('123123@')
        cy.get('[type="button"]').click()
    }
}
