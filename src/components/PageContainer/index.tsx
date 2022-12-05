import { Container } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
    children: React.ReactElement;
}

const PageContainer = ({ children }: Props) => {
    return (
        <>
            <Header />
            {/* <Container maxWidth="xl" style={{ padding: '20px 0' }}>
                {children}
            </Container> */}
            <main >
                {children}
            </main>
            <Footer />
        </>
    )
}
export default PageContainer;