const buildIndexFromArray = require('../indexer')

module.exports = (data) => {
  return {
    loadItemStates (itemStates) {
      const items = []
      for (const item of itemStates) {
        const name = item.name.replace('minecraft:', '')
        items.push({ ...data.itemsByName[name], name, id: item.runtime_id })
      }
      data.itemsArray = items
      data.items = buildIndexFromArray(data.itemsArray, 'id')
      data.itemsByName = buildIndexFromArray(data.itemsArray, 'name')
    },

    writeItemStates () {
      const itemstates = []
      for (const item of data.itemsArray) {
        // Custom items with different namespaces can also be in the palette
        let [ns, name] = item.name.split(':')
        if (!name) {
          name = ns
          ns = 'minecraft'
        }

        itemstates.push({ name: `${ns}:${name}`, runtime_id: item.id, component_based: ns !== 'minecraft' })
      }

      return itemstates
    }
  }
}
