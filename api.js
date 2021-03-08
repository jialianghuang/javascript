import {filmdata} from '../../film'
export default (req, res) => {
  const results = req.query.title?filmdata.filter(film => film.title.toLowerCase().includes(req.query.title)):[]
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
