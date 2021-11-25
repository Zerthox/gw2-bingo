import React, {useState} from "react";
import {Layout, Grid, spacing} from "../components/layout";
import {Link, Paragraph, Checkbox, LinkButton} from "../components/elements";
import {encode} from "../convert/v1";
import {useFractals, useTodaysDailies, useFields, randomFields, Field, Mode} from "../hooks";

interface Box {
    display: string;
    fractal: string;
    cm: boolean;
    checked: boolean;
}

const toFields = (fields: Field[], boxes: Box[]): Field[] => {
    const hasDailies = boxes.some(({cm, checked}) => checked && !cm);
    const hasCMs = boxes.some(({cm, checked}) => checked && cm);

    return fields.filter(({fractal, mode}) => {
        switch (fractal) {
            case "All":
                return mode === Mode.CM ? hasCMs : true;
            case "Dailies":
                return hasDailies;
            default:
                return boxes.some((box) => (
                    box.checked
                    && box.fractal === fractal
                    && (
                        mode === Mode.Both
                        || mode === Mode.CM && box.cm
                        || (!mode || mode === Mode.Normal) && !box.cm
                    )
                ));
        }
    });
};

const App = (): JSX.Element => {
    const fractals = useFractals();
    const dailies = useTodaysDailies();
    const fields = useFields();

    const [boxes, setBoxes] = useState(() => [
        ...fractals.map(({id, name, display}) => ({
            fractal: name,
            display: display ?? name,
            cm: false,
            checked: dailies.includes(id)
        })).sort((a, b) => a.display.localeCompare(b.display)),
        ...fractals.filter(({hasCM}) => hasCM).map(({name, displayCM}) => ({
            fractal: name,
            display: `${displayCM ?? name} CM`,
            cm: true,
            checked: true
        }))
    ]);

    const genRand = () => {
        // console.log(toFields(fields, boxes));
        return encode(randomFields(fields, toFields(fields, boxes)));
    };
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
                {boxes.map(({display, checked}, i) => (
                    <Checkbox
                        key={i}
                        checked={checked}
                        onChange={(checked) => {
                            boxes[i].checked = checked;
                            setBoxes([...boxes]);
                            setRand(genRand);
                        }}
                    >
                        {display}
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
