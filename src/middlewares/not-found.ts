import {type Request, type Response} from 'express'
function notFound(req: Request, res: Response) {
    return res.status(404).send('Route does not exist')
}

export default notFound