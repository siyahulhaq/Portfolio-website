import React, { useCallback, useState } from "react";
import Head from "next/head";
import {
    ContactPageContainer,
    ContactTitle,
    ContactTitleContainer,
    ContactTitleSection,
    CotactTitleDescription,
    CotactTitleEmail,
    ContactForm,
    FormTitle,
    FormInput,
    SubmitButton,
} from "./style";

const initialDetails = {
    fullName: '',
    company: '',
    email: '',
    message: '',
};

function Contact() {
    const [details, setDetails] = useState<typeof initialDetails>(initialDetails);

    const handleChange = useCallback((e: any) => {
        setDetails((prev: typeof initialDetails) => ({ ...prev, [e.target.name]: e.target.value }))
    }, []);

    const onSubmit = useCallback((e: any) => {
        e.preventDefault();
    }, []);

    return (
        <ContactPageContainer>
            <Head>
                <title>Contact</title>
            </Head>

            <ContactTitleContainer>
                <ContactTitleSection>
                    <ContactTitle
                        style={{
                            backgroundImage:
                                "linear-gradient(125.56deg, rgb(231, 162, 143) 3.52%, rgb(249, 214, 172) 41.89%, rgb(251, 254, 252) 96.77%)",
                        }}
                    >
                        Contacts
                    </ContactTitle>
                </ContactTitleSection>
                <CotactTitleEmail>
                    <span className="contact-email-title">Email us:</span>
                    <a href="mailto:siyahulhaq124@gmail.com">
                        <span
                            style={{
                                backgroundImage:
                                    "linear-gradient(130.51deg, rgb(231, 162, 143) 3.52%, rgb(249, 214, 172) 41.89%, rgb(251, 254, 252) 96.77%)",
                            }}
                            className="contact-email-detail"
                        >
                            siyahulhaq124@gmail.com
                            <div className="underline" />
                        </span>
                    </a>
                </CotactTitleEmail>
                <CotactTitleDescription>
                    I am open for your ideas, questions and needs. My clients get the
                    superior results when a short-term acquaintance turns into a long-term
                    collaboration.
                </CotactTitleDescription>
            </ContactTitleContainer>
            <ContactForm onSubmit={onSubmit}>
                <FormTitle>REQUEST A QUOTE</FormTitle>
                <FormInput position={0}>
                    <input name="fullName" placeholder=" " onChange={handleChange} value={details.fullName} />
                    <label htmlFor="fullName">Full Name</label>
                </FormInput>
                <FormInput position={1}>
                    <input name="company" placeholder=" " value={details.company} onChange={handleChange} />
                    <label htmlFor="company">Company</label>
                </FormInput>
                <FormInput >
                    <input type="email" placeholder=" " name="email" value={details.email} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                </FormInput>
                <FormTitle>Message</FormTitle>
                <FormInput >
                    <textarea placeholder=" " name="message" value={details.message} onChange={handleChange} />
                    <label htmlFor="message">What is your project about?</label>
                    <div className="fileinputwrapper" />
                    <div className="✋🏿🌵🌷🎁☝🏽⏫🎮 ">
                        <label className="🌕🎑⛷🏿🎮🏊🏿🏂🏻🎧" htmlFor="attachment-file" />
                        <input type="file" className="✨🍾⏰🍯🌻🏃🏾🆗" name="quote-file" id="attachment-file" accept=".png,.jpg,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                        <div className="🌗🍺🍑🌇🎾🎑🌸">
                            <button type="reset" className="🏸🌊🎇🎎🈵🍺🏤" />
                        </div>
                    </div>
                </FormInput>
                <SubmitButton>
                    <button>
                        Submit
                    </button>
                </SubmitButton>
            </ContactForm>
        </ContactPageContainer>
    );
}

export default Contact;
