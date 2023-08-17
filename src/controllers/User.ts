import { Response, Request } from "express";
import { User } from "../models/User";




export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error: any) {
        res.status(500).json({ message: error.message })

    }
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const user = await User.findByPk(id)
        res.status(200).json(user)
    } catch (error: any) {
        res.status(500).json(error)
    }
}

export const addUser = async (req: Request, res: Response) => {
    const { name, last_name, password, email } = req.body
    try {
        const user = await User.create({ name, last_name, password, email })
        res.status(201).json(user)
    } catch (error: any) {
        res.status(500).json(error)
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const user = await User.findByPk(id)
        if (user) {
            user.update({ status: false })
        }
        res.status(200).json({ message: 'User deleted!' })

    } catch (error) {
        res.status(500).json({ message: 'error' })

    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, last_name, password, email } = req.body
    try {
        const user = await User.update({ name, last_name, password, email }, { where: { id } })
        res.status(200).json(user)
    } catch (error: any) {

    }
}