import { GraphQLResolveInfo, print } from 'graphql'
import { GraphQLClient } from 'graphql-request'

import { GraphQLError } from 'graphql-request/dist/types'
import { Headers } from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
    { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type MenuItem = {
    __typename?: 'MenuItem'
    id: Scalars['ID']
    name: Scalars['String']
    category: Scalars['String']
    price: Scalars['Float']
    description: Scalars['String']
    hot?: Maybe<Scalars['Boolean']>
    special?: Maybe<Scalars['Boolean']>
}

export type Query = {
    __typename?: 'Query'
    menu: Array<Maybe<MenuItem>>
}

export type Mutation = {
    __typename?: 'Mutation'
    createItem?: Maybe<MenuItem>
    updateItem?: Maybe<MenuItem>
    deleteItem?: Maybe<MenuItem>
}

export type MutationCreateItemArgs = {
    name: Scalars['String']
    category: Scalars['String']
    price: Scalars['Float']
    description: Scalars['String']
    hot?: Maybe<Scalars['Boolean']>
    special?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateItemArgs = {
    id: Scalars['ID']
    name?: Maybe<Scalars['String']>
    category?: Maybe<Scalars['String']>
    price?: Maybe<Scalars['Float']>
    description?: Maybe<Scalars['String']>
    hot?: Maybe<Scalars['Boolean']>
    special?: Maybe<Scalars['Boolean']>
}

export type MutationDeleteItemArgs = {
    id: Scalars['ID']
}

export type CreateMenuItemMutationVariables = Exact<{
    name: Scalars['String']
    category: Scalars['String']
    description: Scalars['String']
    price: Scalars['Float']
    special?: Maybe<Scalars['Boolean']>
    hot?: Maybe<Scalars['Boolean']>
}>

export type CreateMenuItemMutation = { __typename?: 'Mutation' } & {
    createItem?: Maybe<
        { __typename?: 'MenuItem' } & Pick<
            MenuItem,
            'id' | 'name' | 'category' | 'price' | 'description' | 'hot' | 'special'
        >
    >
}

export type UpdateMenuItemMutationVariables = Exact<{
    id: Scalars['ID']
    name?: Maybe<Scalars['String']>
    category?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    price: Scalars['Float']
    special?: Maybe<Scalars['Boolean']>
    hot?: Maybe<Scalars['Boolean']>
}>

export type UpdateMenuItemMutation = { __typename?: 'Mutation' } & {
    updateItem?: Maybe<
        { __typename?: 'MenuItem' } & Pick<
            MenuItem,
            'id' | 'name' | 'category' | 'price' | 'description' | 'hot' | 'special'
        >
    >
}

export type DeleteMenuItemMutationVariables = Exact<{
    id: Scalars['ID']
}>

export type DeleteMenuItemMutation = { __typename?: 'Mutation' } & {
    deleteItem?: Maybe<
        { __typename?: 'MenuItem' } & Pick<
            MenuItem,
            'id' | 'name' | 'category' | 'price' | 'description' | 'hot' | 'special'
        >
    >
}

export type MenuQueryVariables = Exact<{ [key: string]: never }>

export type MenuQuery = { __typename?: 'Query' } & {
    menu: Array<
        Maybe<
            { __typename?: 'MenuItem' } & Pick<
                MenuItem,
                'id' | 'name' | 'category' | 'price' | 'description' | 'hot' | 'special'
            >
        >
    >
}

export const CreateMenuItemDocument = gql`
    mutation CreateMenuItem(
        $name: String!
        $category: String!
        $description: String!
        $price: Float!
        $special: Boolean
        $hot: Boolean
    ) {
        createItem(
            name: $name
            category: $category
            description: $description
            price: $price
            special: $special
            hot: $hot
        ) {
            id
            name
            category
            price
            description
            hot
            special
        }
    }
`
export const UpdateMenuItemDocument = gql`
    mutation UpdateMenuItem(
        $id: ID!
        $name: String
        $category: String
        $description: String
        $price: Float!
        $special: Boolean
        $hot: Boolean
    ) {
        updateItem(
            id: $id
            name: $name
            category: $category
            description: $description
            price: $price
            special: $special
            hot: $hot
        ) {
            id
            name
            category
            price
            description
            hot
            special
        }
    }
`
export const DeleteMenuItemDocument = gql`
    mutation DeleteMenuItem($id: ID!) {
        deleteItem(id: $id) {
            id
            name
            category
            price
            description
            hot
            special
        }
    }
`
export const MenuDocument = gql`
    query menu {
        menu {
            id
            name
            category
            price
            description
            hot
            special
        }
    }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction()
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        CreateMenuItem(
            variables: CreateMenuItemMutationVariables,
            requestHeaders?: Headers
        ): Promise<{
            data?: CreateMenuItemMutation | undefined
            extensions?: any
            headers: Headers
            status: number
            errors?: GraphQLError[] | undefined
        }> {
            return withWrapper(() =>
                client.rawRequest<CreateMenuItemMutation>(print(CreateMenuItemDocument), variables, requestHeaders)
            )
        },
        UpdateMenuItem(
            variables: UpdateMenuItemMutationVariables,
            requestHeaders?: Headers
        ): Promise<{
            data?: UpdateMenuItemMutation | undefined
            extensions?: any
            headers: Headers
            status: number
            errors?: GraphQLError[] | undefined
        }> {
            return withWrapper(() =>
                client.rawRequest<UpdateMenuItemMutation>(print(UpdateMenuItemDocument), variables, requestHeaders)
            )
        },
        DeleteMenuItem(
            variables: DeleteMenuItemMutationVariables,
            requestHeaders?: Headers
        ): Promise<{
            data?: DeleteMenuItemMutation | undefined
            extensions?: any
            headers: Headers
            status: number
            errors?: GraphQLError[] | undefined
        }> {
            return withWrapper(() =>
                client.rawRequest<DeleteMenuItemMutation>(print(DeleteMenuItemDocument), variables, requestHeaders)
            )
        },
        menu(
            variables?: MenuQueryVariables,
            requestHeaders?: Headers
        ): Promise<{
            data?: MenuQuery | undefined
            extensions?: any
            headers: Headers
            status: number
            errors?: GraphQLError[] | undefined
        }> {
            return withWrapper(() => client.rawRequest<MenuQuery>(print(MenuDocument), variables, requestHeaders))
        }
    }
}
export type Sdk = ReturnType<typeof getSdk>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
    | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
    | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    MenuItem: ResolverTypeWrapper<MenuItem>
    ID: ResolverTypeWrapper<Scalars['ID']>
    String: ResolverTypeWrapper<Scalars['String']>
    Float: ResolverTypeWrapper<Scalars['Float']>
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>
    Query: ResolverTypeWrapper<{}>
    Mutation: ResolverTypeWrapper<{}>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    MenuItem: MenuItem
    ID: Scalars['ID']
    String: Scalars['String']
    Float: Scalars['Float']
    Boolean: Scalars['Boolean']
    Query: {}
    Mutation: {}
}

export type MenuItemResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MenuItem'] = ResolversParentTypes['MenuItem']
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
    hot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
    special?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
    menu?: Resolver<Array<Maybe<ResolversTypes['MenuItem']>>, ParentType, ContextType>
}

export type MutationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
    createItem?: Resolver<
        Maybe<ResolversTypes['MenuItem']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateItemArgs, 'name' | 'category' | 'price' | 'description'>
    >
    updateItem?: Resolver<
        Maybe<ResolversTypes['MenuItem']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateItemArgs, 'id'>
    >
    deleteItem?: Resolver<
        Maybe<ResolversTypes['MenuItem']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteItemArgs, 'id'>
    >
}

export type Resolvers<ContextType = any> = {
    MenuItem?: MenuItemResolvers<ContextType>
    Query?: QueryResolvers<ContextType>
    Mutation?: MutationResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>

export const namedOperations = {
    Query: {
        menu: 'menu'
    },
    Mutation: {
        CreateMenuItem: 'CreateMenuItem',
        UpdateMenuItem: 'UpdateMenuItem',
        DeleteMenuItem: 'DeleteMenuItem'
    }
}
