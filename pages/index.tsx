import type {NextPage} from 'next'
import Head from 'next/head'
import {FaqWithImage, FooterSimple, GridAsymmetrical, Header, Hero, CountryPicker} from "../components";
import {Container, Grid} from "@mantine/core";

const Home: NextPage = () => {
    const links = [
        {
            label: 'Home',
            link: '/'
        },
        {
            label: 'Github',
            link: 'https://github.com/peacecwz/mutty',
            target: true
        },
        {
            label: 'FAQ',
            link: '#faq'
        }
    ];

    return (
        <main>
            <Head>
                <title>Mutty</title>
                <meta name="description" content="Make better Twitter timeline with Mutty"/>
            </Head>

            <Header links={links}/>

            <Hero/>


            <GridAsymmetrical/>
            <FaqWithImage/>

            <FooterSimple links={[
                {
                    label: 'Home',
                    link: '/'
                },
                {
                    label: 'Github',
                    link: 'https://github.com/peacecwz/mutty',
                }
            ]}/>
        </main>
    )
}

export default Home