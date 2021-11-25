import React, {useState} from "react";
import {Layout, Grid, spacing} from "../components/layout";
import {Link, Paragraph, Checkbox, LinkButton} from "../components/elements";
import {encode} from "../convert/v1";
import {useFractals, useTodaysDailies, useFields, randomFields, Field} from "../hooks";

interface Box {
    name: string;
    checked: boolean;
}

const isChecked = (boxes: Box[], fractal: string) => boxes.find(({name}) => name === fractal)?.checked;

const toFields = (fields: Field[], boxes: Box[]): Field[] => {
    const hasDailies = boxes.some(({name, checked}) => checked && !name.endsWith("CM"));

    const hasNightmareCM = isChecked(boxes, "Nightmare CM");
    const hasShatteredCM = isChecked(boxes, "Shattered CM");
    const hasSunquaCM = isChecked(boxes, "Sunqua CM");

    // include normal mode fields for nightmare & shattered cm
    const hasNightmare = hasNightmareCM || isChecked(boxes, "Nightmare");
    const hasShattered = hasShatteredCM || isChecked(boxes, "Shattered Observatory");

    return fields.filter(({fractal}) => {
        switch (fractal) {
            case "All":
                return true;
            case "Dailies":
                return hasDailies;
            case "All CM":
                return hasNightmareCM || hasShatteredCM || hasSunquaCM;
            case "Old CM":
                return hasNightmareCM || hasShatteredCM;
            case "Nightmare":
                return hasNightmare;
            case "Shattered Observatory":
                return hasShattered;
            default:
                return isChecked(boxes, fractal);
        }
    });
};

const App = (): JSX.Element => {
    const fractals = useFractals().slice(1).sort((a, b) => a.name.localeCompare(b.name));
    const dailies = useTodaysDailies();
    const fields = useFields();

    const [boxes, setBoxes] = useState(() => [
        ...fractals.map((fractal) => ({
            name: fractal.name,
            checked: dailies.includes(fractal)
        })),
        {name: "Nightmare CM", checked: true},
        {name: "Shattered CM", checked: true},
        {name: "Sunqua CM", checked: true}
    ]);

    const genRand = () => encode(randomFields(fields, toFields(fields, boxes)));
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
            <Paragraph>This page allows you to generate a bingo card for your Fractal runs.</Paragraph>
            <Paragraph>First time here? See <Link to="/how-to">How to play</Link>.</Paragraph>
            <Paragraph>
                Currently we feature a total of {fields.length} different bingo fields!
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
