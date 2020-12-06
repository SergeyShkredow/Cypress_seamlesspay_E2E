import {urlAdmin} from '../../../support/constants';

export class LoginAdminPage {

    goToLogin(siteDomain) {
        switch (siteDomain) {
            case 'rc-':
            case 'test-':
                cy.visit(`rc-${urlAdmin}`)
                break;
            case 'prod':
                cy.visit(`${urlAdmin}`)
                break
        }
    };

    signIn() {
        cy.get('[type="email"]').type('seamlesspaytest3@gmail.com');
        cy.get('[type="password"]').type('123123!');
        cy.get('[type="button"]').click();
    };
}
