import React from "react";
import Layout, {Paragraph, List} from "../components/layout";
import {fields, toItem, Field} from "../data";

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

const scale = (fractal: string) => {
    if (fractal === "All") {
        // all to front
        return -2;
    } else if (fractal === "Dailies") {
        // dailies after
        return -1;
    } else if (fractal.endsWith("CM")) {
        // parse scale for cm
        return parseInt(fractal);
    } else {
        // normal for regular
        return 0;
    }
};

const compare = (a: Field, b: Field) => {
    const scaleA = scale(a.fractal);
    const scaleB = scale(b.fractal);

    // order of encounters within the CM fractals
    const encounterA = a.encounter ? encounters.indexOf(a.encounter) : -2;
    const encounterB = b.encounter ? encounters.indexOf(b.encounter) : -2;

    // sort by scale, then encounter, then alphabetically
    if (scaleA < scaleB) {
        return -1;
    } else if (scaleA > scaleB) {
        return 1;
    } else if (encounterA < encounterB) {
        return -1;
    } else if (encounterA > encounterB) {
        return 1;
    } else {
        return a.fractal.localeCompare(b.fractal);
    }
};

const Fields = (): JSX.Element => (
    <Layout title="Bingo Fields">
        <Paragraph align="center">
            Total count: {fields.all.length} bingo fields
        </Paragraph>
        <List>
            {[...fields.all].sort(compare).map(toItem)}
        </List>
    </Layout>
);

export default Fields;
