import { useRouter } from 'next/router';

import PrimaryNavbar from '@/components/Navbar/Primary';
import SecondaryNavbar from '@/components/Navbar/Secondary';
import Footer from '@/components/Footer'

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
    const current = useRouter();

    return (
        <>
            <PrimaryNavbar />
            <main>
                { children }    
            </main>
            { current.route === '/' && <Footer /> }
        </>
    )
}

export default Layout;