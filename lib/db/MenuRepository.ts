import { ObjectId } from 'mongodb'
import { MenuItem, MutationCreateItemArgs, MutationDeleteItemArgs, MutationUpdateItemArgs } from '../../lib/graphql-generated'
import { getCollection } from './db'

const getMenu = async () => {
    const menu = await getCollection.then(c => c.find().toArray())

    return menu.map(menuItem => ({
        ...menuItem,
        id: menuItem._id + ''
    }))
}
const upsertMenuItem = async (args: MutationUpdateItemArgs | MutationCreateItemArgs): Promise<MenuItem> => {
    const menuItem = await dbUpsertMenuItem(args)

    if (!menuItem) throw new Error('Error updating item')

    return menuItem
}
const deleteMenuItem = async (args: MutationDeleteItemArgs): Promise<MenuItem> => {
    const id = new ObjectId(args.id)
    const collection = await getCollection

    const menu = await (await getCollection).findOne({ _id: id })
    const menuItem = {
        ...menu,
        id: menu._id + ''
    }

    const deleteOp = await collection.deleteOne({
        _id: id
    })

    if (!deleteOp.result.ok) throw new Error('Error updating item')

    return menuItem
}

async function dbUpsertMenuItem(args: MutationUpdateItemArgs | MutationCreateItemArgs): Promise<MenuItem | void> {
    const _id = 'id' in args ? new ObjectId(args.id) : new ObjectId()
    const collection = await getCollection

    const updateOne = await collection.updateOne(
        { _id: new ObjectId(_id) },
        {
            $set: args
        },
        {
            upsert: true
        }
    )

    const consolidatedId = _id ?? updateOne.upsertedId?._id

    if (consolidatedId) {
        const menuItem = await collection.findOne({ _id: consolidatedId })

        return { ...menuItem, id: consolidatedId + '' }
    }
}

export const MenuRepository = {
    getMenu,
    deleteMenuItem: deleteMenuItem,
    createMenuItem: upsertMenuItem,
    updateMenuItem: upsertMenuItem
}
