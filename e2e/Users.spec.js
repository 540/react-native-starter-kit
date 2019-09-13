describe('Users', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have two items', async () => {
    await expect(element(by.text('Leanne Graham'))).toBeVisible()
    await expect(element(by.text('Ervin Howell'))).toBeVisible()
    await expect(element(by.text('Clementine Bauch'))).toBeVisible()
  })
})
