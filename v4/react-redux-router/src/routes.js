import Absence from 'pages/absence'
import Home from 'home'
import TimeCreate from 'time-create'
import Upload from 'upload'
import Tree from 'tree'

const Routers = []
Routers.push({ path: '/', component: Home })
Routers.push({ path: '/absence', component: Absence })
Routers.push({ path: '/timecreate', component: TimeCreate })
Routers.push({ path: '/upload', component: Upload })
Routers.push({ path: '/tree', component: Tree })
export default Routers
