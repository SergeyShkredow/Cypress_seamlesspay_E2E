export class LoginAdminPage {

    goToLogin(siteDomain) {
        switch (siteDomain) {
            case 'rc-':
                cy.visit(`rc-portal.seamlesspay.com/login`)
                break;
            case 'prod':
                cy.visit(`portal.seamlesspay.com/login`)
                break;
            case 'test':
                cy.visit(`test.seamlesspay.com/login`)
                break;
            default:
                alert('We hope that this page looks ok!');
        }
    };
}
