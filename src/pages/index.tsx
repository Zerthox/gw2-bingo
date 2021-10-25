import React, {useState} from "react";
import Layout, {Link, Paragraph, Checkbox, Grid, LinkButton} from "../components/layout";
import {v1 as convert} from "../convert";
import {fractals, dailiesToday, fields, random} from "../data";

const genRand = () => convert.encode(random(fields.cm));

const App = (): JSX.Element => {
    const [boxes, setBoxes] = useState([
        ...fractals.all.slice(1).map((fractal) => ({
            name: fractal.name,
            checked: dailiesToday().includes(fractal)
        })),
        {name: "Nightmare CM", checked: true},
        {name: "Shattered Observatory CM", checked: true},
        {name: "Sunqua Peak CM", checked: true}
    ]);
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
            <Grid>
                {boxes.map(({name, checked}, i) => (
                    <Checkbox
                        key={i}
                        checked={checked}
                        disabled
                        onChange={(checked) => {
                            boxes[i].checked = checked;
                            setBoxes([...boxes]);
                        }}
                    >
                        {name}
                    </Checkbox>
                ))}
            </Grid>
            <Paragraph>This page allows you to generate a bingo card for your Fractal CM runs.</Paragraph>
            <Paragraph>First time here? See <Link to="/how-to">How to play</Link>.</Paragraph>
            <Paragraph>
                Currently we feature a total of {fields.all.length} different bingo fields!
                You can see all of them <Link to="/fields">here</Link>.
            </Paragraph>
            <Paragraph>
                Got good ideas?
                Check the <Link to="https://github.com/Zerthox/gw2-bingo">GitHub Repo</Link>.
            </Paragraph>
        </Layout>
    );
};

export default App;
