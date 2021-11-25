import React from "react";
import {Layout} from "../components/layout";
import {Paragraph, List} from "../components/elements";
import {useFields, toItem, Field, useFractals, Mode} from "../hooks";

const cms = [
    "All",
    "Old",
    "Nightmare",
    "Shattered Observatory",
    "Sunqua Peak"
];

const encounters = [
    "MAMA",
    "Bullet Hell",
    "Siax",
    "Ensolyss",
    "Skorvald",
    "Artsariiv",
    "Arkk",
    "Ai",
    "Elemental Ai",
    "Dark Ai"
];

const scale = ({fractal, mode}: Field) => {
    if (mode === Mode.CM) {
        // cms at end
        return 2 + cms.indexOf(fractal);
    } else if (fractal === "All") {
        // all to front
        return -2;
    } else if (fractal === "Dailies") {
        // dailies after
        return -1;
    } else {
        // normal for regular
        return 0;
    }
};

const compare = (a: Field, b: Field) => {
    const scaleA = scale(a);
    const scaleB = scale(b);

    // order of encounters within the CM fractals
    const encounterA = a.encounter ? encounters.indexOf(a.encounter) : -2;
    const encounterB = b.encounter ? encounters.indexOf(b.encounter) : -2;

    // sort by scale
    if (scaleA < scaleB) {
        return -1;
    } else if (scaleA > scaleB) {
        return 1;
    } else if (a.mode === Mode.CM) {
        // sort cms by encounter
        if (encounterA < encounterB) {
            return -1;
        } else if (encounterA > encounterB) {
            return 1;
        }
    }

    return a.fractal.localeCompare(b.fractal);
};

const Fields = (): JSX.Element => {
    const fractals = useFractals();
    const fields = useFields();
    return (
        <Layout title="Bingo Fields">
            <Paragraph align="center">
                Total count: {fields.length} bingo fields
            </Paragraph>
            <List>
                {[...fields].sort(compare).map((field) => toItem(fractals, field))}
            </List>
        </Layout>
    );
};

export default Fields;
