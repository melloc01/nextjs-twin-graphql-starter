import { MongoClient, WithId } from 'mongodb'
import { MenuItem } from '../../lib/graphql-generated'

const DB = process.env.DB_NAME
const DB_PASS = process.env.DB_PASS
const CLUSTER_NAME = process.env.DB_CLUSTER_NAME

const uri = `mongodb+srv://${CLUSTER_NAME}:${DB_PASS}@${CLUSTER_NAME}.8qfwh.mongodb.net/${DB}?retryWrites=true&w=majority`
const COLLECTIONS = {
    menu: 'menu'
}

// exports
export const dbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
export const getDb = dbClient.connect().then(client => client.db(DB))

export type CollectionMenuItem = WithId<MenuItem>

export const getCollection = getDb.then(db => db.collection<CollectionMenuItem>(COLLECTIONS.menu))
