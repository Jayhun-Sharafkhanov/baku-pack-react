import Footer from "../Footer";
import Header from "../Header";

interface Props {
    children: React.ReactElement;
}

const PageContainer = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default PageContainer;