const {test, expect} = require('@playwright/test');

 test('To verify home, messages, help icons exit', async ({ page }) => {
  await page.goto('https://frontend.stage.bunch.capital/');
  await page.getByRole('button', { name: 'Open Intercom Messenger' }).click();
  await expect(page.frameLocator('iframe[name="intercom-messenger-frame"]').getByTestId('home')).toBeVisible();
  await expect(page.frameLocator('iframe[name="intercom-messenger-frame"]').getByTestId('messages')).toBeVisible();
  await expect(page.frameLocator('iframe[name="intercom-messenger-frame"]').getByTestId('help')).toBeVisible;
});

test('To verify intercome messager icon exit and clickable', async ({page})=>{
  await page.goto("https://frontend.stage.bunch.capital/");
  await page.getByRole('button', { name: 'Open Intercom Messenger' }).click();
  await expect(page.getByRole('button', { name: 'Open Intercom Messenger' })).toBeVisible();
});

test('To verify the search bar have the text Search for help', async ({ page }) => {
  await page.goto('https://frontend.stage.bunch.capital/');
  await page.getByRole('button', { name: 'Open Intercom Messenger' }).click();
  await expect (page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Search for help' })).toHaveText("Search for help");
}); 

test('To verify the search bar for help show result', async ({ page }) => {
  await page.goto('https://frontend.stage.bunch.capital/');
  await page.getByRole('button', { name: 'Open Intercom Messenger' }).click();
  await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByTestId('help').click();
  await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Search for help Search for help' }).click();
  await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('textbox', { name: 'Search for help' }).fill('Rollup');
  await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('textbox', { name: 'Search for help' }).press('Enter');
  await expect (page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'What does being “rolled up” mean?' })).toHaveText("What does being “rolled up” mean?");
});

test('To verify all 4 collection are shown in the help icon section', async ({ page }) => {
  await page.goto('https://frontend.stage.bunch.capital/');
  await page.getByRole('button', { name: 'Open Intercom Messenger' }).click();
  await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByTestId('help').click();
  await expect (page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'General General information about bunch and its product offering. 21 articles' })).toBeVisible();
  await expect (page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Angel Roll-Ups Everything you need to know about the Angel Roll-Up and its processes. 16 articles' })).toBeVisible();
  await expect (page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Syndicates (SPVs) Everything you need to know about our syndicates and its processes. 11 articles' })).toBeVisible();
  await expect (page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Funds Everything you need to know about setting up your fund on bunch. 3 articles' })).toBeVisible();
});
	
