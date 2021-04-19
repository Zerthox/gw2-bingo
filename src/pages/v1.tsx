import React from "react";
import {PageProps} from "gatsby";
import Layout, {Paragraph} from "../components/layout";
import {LinkButton} from "../components/button";
import Bingo from "../components/bingo";
import convert from "../convert";

const App = ({location}: PageProps): JSX.Element => {
    const ids = convert.decode(location.search.slice(1));
    return (
        <Layout title="Bingo Card">
            {
                ids.length > 0 ? (
                    <Bingo fields={ids}/>
                ) : (
                    <>
                        <Paragraph>Seems like you have gotten a malformed bingo link.</Paragraph>
                        <Paragraph>Maybe generate a new one on the home page instead?</Paragraph>
                        <LinkButton to="/">Back to home</LinkButton>
                    </>
                )
            }
        </Layout>
    );
};

export default App;
