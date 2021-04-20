import React, {useState} from "react";
import Layout, {Link, Paragraph} from "../components/layout";
import {LinkButton} from "../components/button";
import convert from "./v1/convert";
import data from "../data";

const genRand = () => convert.encode(data.random(data.cm.length));

const App = (): JSX.Element => {
    const [rand, setRand] = useState(genRand);
    return (
        <Layout isHome={true}>
            <Paragraph align="center"><i>Such fun! It&apos;s fantastic, isn&apos;t it?</i> ~Viirastra</Paragraph>
            <LinkButton
                to={`/v1/card?${rand}`}
                style={{marginBottom: 30}}
                onMouseDown={() => setRand(genRand)}
            >
                Generate Bingo
            </LinkButton>
            <Paragraph>This page allows you to generate a bingo card for your Fractal CM runs.</Paragraph>
            <Paragraph>
                Currently we feature a total of {data.all.length} different bingo fields!
                You can see all of them <Link to="/fields">here</Link>.
            </Paragraph>
            <Paragraph>First time here? See <Link to="/how-to">How to play</Link>.</Paragraph>
        </Layout>
    );
};

export default App;
