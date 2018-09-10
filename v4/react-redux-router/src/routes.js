import Absence from 'pages/absence'
import Home from 'home'
import TimeCreate from 'time-create'

const Routers = []
Routers.push({ path: '/', component: Home })
Routers.push({ path: '/absence', component: Absence })
Routers.push({ path: '/timecreate', component: TimeCreate })

export default Routers
