import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
const NotesRoute = express.Router()

const prisma = new PrismaClient()

NotesRoute.get('/', async (req, res) => {
  try {
    const allNotes = await prisma.notes.findMany()
    res.json(allNotes)
  } catch (error) {
    res.json({ error: error })
    throw error
  }
})

NotesRoute.post('/', async (req, res) => {
  try {
    const reqPayload: Prisma.NotesCreateInput = req.body
    const newNote = await prisma.notes.create({
      data: reqPayload
    })

    res.json({ result: newNote })
  } catch (error) {
    res.json({ error: error })
    throw error
  }
})


export default NotesRoute