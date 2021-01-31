import 'twin.macro'
import { useDeleteMenuItem, useMenu, useUpdateMenuItem, useCreateMenuItem } from '../lib/hooks/data-hooks'

function MenuForm(): JSX.Element {
    const unsortedMenu = useMenu()
    const createMutation = useCreateMenuItem()
    const updateMutation = useUpdateMenuItem()
    const deleteMutation = useDeleteMenuItem()

    return <main tw="container mx-auto py-4">{`So many mutation options. let's do something!`}</main>
}

export default MenuForm
