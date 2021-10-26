import React, {useState} from "react";
import Layout, {Link, Paragraph, Checkbox, Grid, LinkButton, spacing} from "../components/layout";
import {v1 as convert} from "../convert";
import {fractals, dailiesToday, fields, random, Field} from "../data";

const sorted = fractals.all.slice(1).sort((a, b) => a.name.localeCompare(b.name));


interface Box {
    name: string;
    checked: boolean;
}

const toFields = (boxes: Box[]): Field[] => {
    const hasDailies = boxes.findIndex(({name, checked}) => checked && !name.endsWith("CM")) !== -1;
    const hasNightmareCM = boxes.find(({name}) => name === "Nightmare CM").checked;
    const hasShatteredCM = boxes.find(({name}) => name === "Shattered Observatory CM").checked;
    const hasSunquaCM = boxes.find(({name}) => name === "Sunqua Peak CM").checked;
    const hasOldCM = hasNightmareCM || hasShatteredCM;
    const hasCM = hasOldCM || hasSunquaCM;

    return fields.all.filter(({fractal}) => {
        switch (fractal) {
            case "All":
                return true;
            case "Dailies":
                return hasDailies;
            case "98-100CM":
                return hasCM;
            case "98-99CM":
                return hasOldCM;
            case "98CM":
                return hasNightmareCM;
            case "99CM":
                return hasShatteredCM;
            case "100CM":
                return hasSunquaCM;
            default:
                return boxes.find(({name}) => name === fractal)?.checked;
        }
    });
};

const App = (): JSX.Element => {
    const [boxes, setBoxes] = useState(() => [
        ...sorted.map((fractal) => ({
            name: fractal.name,
            checked: dailiesToday().includes(fractal)
        })),
        {name: "Nightmare CM", checked: true},
        {name: "Shattered Observatory CM", checked: true},
        {name: "Sunqua Peak CM", checked: true}
    ]);

    const genRand = () => convert.encode(random(toFields(boxes)));
    const [rand, setRand] = useState(genRand);

    return (
        <Layout isHome={true}>
            <Paragraph align="center"><i>Such fun! It&apos;s fantastic, isn&apos;t it?</i> ~Viirastra</Paragraph>
            <LinkButton
                to={`/v1/card?${rand}`}
                className={spacing.bottom20}
                onMouseDown={() => setRand(genRand)}
            >
                Generate Bingo
            </LinkButton>
            <Grid className={spacing.bottom20}>
                {boxes.map(({name, checked}, i) => (
                    <Checkbox
                        key={i}
                        checked={checked}
                        onChange={(checked) => {
                            boxes[i].checked = checked;
                            setBoxes([...boxes]);
                            setRand(genRand);
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
