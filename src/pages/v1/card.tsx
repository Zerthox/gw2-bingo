import React from "react";
import {PageProps} from "gatsby";
import Layout, {Paragraph} from "../../components/layout";
import Bingo from "../../components/bingo";
import {v1 as convert} from "../../convert";
import data from "../../data";

const App = ({location}: PageProps): JSX.Element => {
    const ids = convert.decode(location.search.slice(1));
    return (
        <Layout title="Bingo Card">
            {
                ids.length > 0 && ids.every((id) => id < data.all.length) ? (
                    <Bingo fields={ids}/>
                ) : (
                    <>
                        <Paragraph>Seems like you have gotten a malformed bingo link.</Paragraph>
                        <Paragraph>Maybe generate a new one on the home page instead?</Paragraph>
                    </>
                )
            }
        </Layout>
    );
};

export default App;
