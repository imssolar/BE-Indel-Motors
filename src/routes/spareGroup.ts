import { Router } from 'express'
import { addSpareGroup, deleteSpareGroup, getSpareGroup, getSpareGroups, updateSpareGroup } from '../controllers/SpareGroup'







const routes = Router()

routes.get('/', getSpareGroups)
routes.get('/:name', getSpareGroup)
routes.post('/', addSpareGroup)
routes.delete('/', deleteSpareGroup)
routes.put('/:id', updateSpareGroup)



export default routes 