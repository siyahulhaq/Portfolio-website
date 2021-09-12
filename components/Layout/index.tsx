import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    Button,
    Container,
    Header,
    HeaderWrapper,
    HeadTitle,
    LinkButton,
    Main,
    MenuIcon,
} from "./styles";
import BackgroundEffect from "../BackgroundEffect";

const Layout: React.FC = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset > 30) {
                setHeaderShow(false);
            } else if (window.pageYOffset < 10) {
                setHeaderShow(true);
            };
        }
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    return (
        <Container>
            <BackgroundEffect />
            <Header show={headerShow}>
                <HeaderWrapper>
                    <Link href="/" passHref>
                        <HeadTitle>Siyahul Haq</HeadTitle>
                    </Link>
                    <div className="d-flex flex-align-center flex-justify-center">
                        <Link href="/contact" passHref>
                            <LinkButton>Contact</LinkButton>
                        </Link>
                        <Button onClick={() => setMenuOpen((prev) => !prev)}>
                            <MenuIcon menuOpen={menuOpen} />
                        </Button>
                    </div>
                </HeaderWrapper>
            </Header>
            <Main>{children}</Main>
        </Container>
    );
};

export default Layout;
