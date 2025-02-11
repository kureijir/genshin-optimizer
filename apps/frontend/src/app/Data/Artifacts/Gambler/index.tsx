import { input } from '../../../Formula'
import { Data } from '../../../Formula/type'
import { greaterEq, percent } from '../../../Formula/utils'
import { ArtifactSetKey } from '../../../Types/consts'
import { ArtifactSheet, IArtifactSheet, setHeaderTemplate } from '../ArtifactSheet'
import { dataObjForArtifactSheet } from '../dataUtil'
import icons from './icons'

const key: ArtifactSetKey = "Gambler"
const setHeader = setHeaderTemplate(key, icons)

const set2 = greaterEq(input.artSet.Gambler, 2, percent(0.2))

export const data: Data = dataObjForArtifactSheet(key, {
  premod: {
    skill_dmg_: set2
  }
})

const sheet: IArtifactSheet = {
  name: "Gambler", rarity: [3, 4],
  icons,
  setEffects: {
    2: { document: [{ header: setHeader(2), fields: [{ node: set2 }] }] },
    4: { document: [{ header: setHeader(4), fields: [] }]}
  }
}
export default new ArtifactSheet(key, sheet, data)
