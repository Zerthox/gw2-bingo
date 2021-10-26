import React from "react";
import {PageProps} from "gatsby";
import Layout, {Paragraph} from "../../components/layout";
import Bingo from "../../components/bingo";
import convert from "../../convert/v1";
import {fields} from "../../data";

const App = ({location}: PageProps): JSX.Element => {
    const ids = convert.decode(location.search.slice(1));
    return (
        <Layout title="Bingo Card">
            {
                ids.length > 0 && ids.every((id) => id < fields.all.length) ? (
                    <Bingo ids={ids}/>
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
