import Header from '../../components/Header'
import AppHead from '../../components/AppHead'
import MenuForm from '../../components/MenuForm'
import { withUserProps } from '../../lib/session'
import { AppWrappers } from '../../components/AppWrappers'
import 'antd/dist/antd.css'

export const getServerSideProps = withUserProps

export default function Admin() {
    return (
        <AppWrappers>
            <AppHead preventSeo />
            <Header isAdmin />
            <MenuForm />
        </AppWrappers>
    )
}
