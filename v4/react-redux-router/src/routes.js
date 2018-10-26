import Absence from 'pages/absence'
import Home from 'home'
import TimeCreate from 'time-create'
import Upload from 'file-upload'
import Tree from 'file-tree'
import Tree1 from 'tree-1'
import TreePage from 'pages/tree-page'
import appointment from 'pages/appointment'
import TablePage from 'pages/table'

const Routers = []
Routers.push({ path: '/', component: Home })
Routers.push({ path: '/absence', component: Absence })
Routers.push({ path: '/timecreate', component: TimeCreate })
Routers.push({ path: '/upload', component: Upload })
Routers.push({ path: '/tree', component: Tree })
Routers.push({ path: '/tree1', component: Tree1 })
Routers.push({ path: '/tree-page', component: TreePage })
Routers.push({ path: '/appointment', component: appointment })
Routers.push({ path: '/table', component: TablePage })
export default Routers
