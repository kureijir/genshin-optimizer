import { WeaponData } from '@genshin-optimizer/pipeline'
import { input } from '../../../../Formula'
import { constant, equal, infoMut, prod, subscript } from '../../../../Formula/utils'
import { WeaponKey } from '../../../../Types/consts'
import { customDmgNode } from '../../../Characters/dataUtil'
import { cond, stg, st } from '../../../SheetUtil'
import { dataObjForWeaponSheet } from '../../util'
import WeaponSheet, { headerTemplate, IWeaponSheet } from '../../WeaponSheet'
import iconAwaken from './AwakenIcon.png'
import data_gen_json from './data_gen.json'
import icon from './Icon.png'

const key: WeaponKey = "LuxuriousSeaLord"
const data_gen = data_gen_json as WeaponData

const burst_dmg_Src = [0.12, 0.15, 0.18, 0.21, 0.24]
const dmg_Src = [1, 1.25, 1.5, 1.75, 2]
const burst_dmg_ = subscript(input.weapon.refineIndex, burst_dmg_Src)
const [condPassivePath, condPassive] = cond(key, "OceanicVictory")
const dmg = equal(input.weapon.key, key, equal(condPassive, 'on',
  customDmgNode(prod(
    subscript(
      input.weapon.refineIndex, dmg_Src, { unit: "%" }),
      input.total.atk
    ),
    "elemental",
    { hit: { ele: constant("physical") }
})))

const data = dataObjForWeaponSheet(key, data_gen, {
  premod: {
    burst_dmg_
  },
}, {
  dmg
})
const sheet: IWeaponSheet = {
  icon,
  iconAwaken,
  document: [{
    header: headerTemplate(key, icon, iconAwaken, st("base")),
    fields: [{ node: burst_dmg_ }],
  }, {
    header: headerTemplate(key, icon, iconAwaken, st("conditional")),
    value: condPassive,
    path: condPassivePath,
    name: st('hitOp.burst'),
    states: {
      on: {
        fields: [{
          node: infoMut(dmg, { name: st("dmg") })
        }, {
          text: stg("cd"),
          value: 15,
          unit: "s"
        }]
      }
    }
  }],
}
export default new WeaponSheet(key, sheet, data_gen, data)
