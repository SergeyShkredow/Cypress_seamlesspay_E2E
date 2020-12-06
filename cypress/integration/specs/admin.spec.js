import { LoginAdminPage } from '../pages/admin/LoginAdmin.page';
import { siteDomain } from '../../support/constants';

describe('Admin', () => {
    const loginPage = new LoginAdminPage()
    // before(() => {
    //     browser.windowHandleSize({width: 1920, height: 1080})
    //     LoginAdminPage.login()
    //     DashboardPage.leftMenu.waitForText()
    //
    //     // Get access token
    //     const storage = browser.localStorage('GET', 'seamlesspayAdmin')
    //     accessToken = JSON.parse(storage.value).user.accessToken
    // })
    // afterEach(() => {
    //     DashboardPage.open()
    //     DashboardPage.breadcrumb.waitForEnabled()
    // })

    context('Menu:', () => {
        it('Dashboard page', () => {
            loginPage.goToLogin(siteDomain)
            // DashboardPage.table.waitForVisible()
            // expect(browser.isExisting(DashboardPage.table.selector)).to.equal(true)
        })
    })
})
