import Collapse from './collapse'
import CollapseItem from './collapse_item'

Collapse.install = vue => {
  vue.component(Collapse.name, Collapse)
  vue.component(CollapseItem.name, CollapseItem)
}

export default Collapse
