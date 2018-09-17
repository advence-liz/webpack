import Absence from 'pages/absence'
import Home from 'home'
import TimeCreate from 'time-create'
import Upload from 'upload'
import Tree from 'tree'
import Tree1 from 'tree-1'

const Routers = []
Routers.push({ path: '/', component: Home })
Routers.push({ path: '/absence', component: Absence })
Routers.push({ path: '/timecreate', component: TimeCreate })
Routers.push({ path: '/upload', component: Upload })
Routers.push({ path: '/tree', component: Tree })
Routers.push({ path: '/tree1', component: Tree1 })

export default Routers
