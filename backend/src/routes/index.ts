import express from 'express'
import NotesRoute from './notes'

const Router = express.Router()

Router.use('/notes', NotesRoute)

export default Router