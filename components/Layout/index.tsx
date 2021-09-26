import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    Button,
    Container,
    Footer,
    Header,
    HeaderWrapper,
    HeadTitle,
    LinkButton,
    Main,
    MenuIcon,
} from "./styles";
import BackgroundEffect from "../BackgroundEffect";
import NavMenu from "../NavMenu";
import SocialButton from "../SocialButton";

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
            <BackgroundEffect isMenuOpen={menuOpen} />
            <NavMenu closeMenu={() => setMenuOpen(false)} isMenuOpen={menuOpen} />
            <Header show={headerShow}>
                <HeaderWrapper>
                    <Link href="/" passHref>
                        <HeadTitle>Siyahul Haq</HeadTitle>
                    </Link>
                    <div className="d-flex flex-align-center flex-justify-center">
                        <Link href="/contact" passHref>
                            <LinkButton isMenuOpen={menuOpen}>Contact</LinkButton>
                        </Link>
                        <Button onClick={() => setMenuOpen((prev) => !prev)}>
                            <MenuIcon menuOpen={menuOpen} />
                        </Button>
                    </div>
                </HeaderWrapper>
            </Header>
            <Main isMenuOpen={menuOpen}>{children}</Main>
            <Footer style={{display: menuOpen ? 'none': 'grid'}}>
                <div className="footer-social-container">
                    <SocialButton link="https://www.instagram.com/h__o__ll__y__roll__e_rz_h_a_q" type="instagram" />
                    <SocialButton link="https://github.com/siyahulhaq" type="github" />
                    <SocialButton link="https://www.facebook.com/SiYaHuL.HaQ4697" type="facebook" />
                    <SocialButton link="https://www.linkedin.com/in/siyahul-haq-775ba41b2/" type="linkedin" />
                    <SocialButton link="https://www.linkedin.com/in/siyahul-haq-775ba41b2/" type="twitter" />
                </div>
                <p className="footer-greetings">With Love from <span>Siyahul Haq</span></p>
            </Footer>
        </Container>
    );
};

export default Layout;
