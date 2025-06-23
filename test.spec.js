// playwright-course-snippet.js

const { test, expect } = require('@playwright/test');

test('Playwright basic actions demo', async ({ page }) => {
  // ১. যেকোনো URL খুলে
  await page.goto('https://example.com');

  // ২. Click (যেকোনো বাটন/লিংকে ক্লিক করা)
  await page.click('a'); // Example site-এর লিংকে ক্লিক

  // ৩. Fill (ইনপুট বক্সে লেখা)
  await page.fill('#search', 'Playwright');

  // ৪. Expect (কিছু দেখা বা চেক করা)
  await expect(page.locator('h1')).toBeVisible();

  // ৫. Text Checking (কিছু লেখা আছে কিনা চেক করা)
  await expect(page.locator('h1')).toHaveText('Example Domain');

  // ৬. Count (কয়টা item আছে)
  const links = page.locator('a');
  await expect(links).toHaveCount(1);

  // ৭. Type (টাইপ করা - delay সহ)
  await page.type('#search', ' with delay', { delay: 100 }); // প্রতিটি অক্ষর 100ms delay

  // ৮. Wait (কিছু সময় অপেক্ষা করা)
  await page.waitForTimeout(2000); // ২ সেকেন্ড ওয়েট করা

  // ৯. Press (কীবোর্ড প্রেস)
  await page.press('#search', 'Enter');

  // ১০. Get Text (টেক্সট বের করা)
  const text = await page.locator('h1').textContent();
  console.log('Heading text:', text);
});
