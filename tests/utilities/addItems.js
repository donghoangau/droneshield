async function addMultipleItems(page, numberOfItems) {
    const items_count = await page.$$('.inventory_item')

    if(numberOfItems>items_count) {
      throw new Error(`Requested ${numberOfItems}, but only ${items_count} `)
    }

    for (let i = 0; i < numberOfItems; i++) {
      await page.click(`.inventory_item:nth-of-type(${i + 1}) button`)
    }
  }

  module.exports = { addMultipleItems }
