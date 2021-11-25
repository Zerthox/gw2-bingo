import React from "react";
import {Layout} from "../components/layout";
import {Paragraph, List} from "../components/elements";
import {useFields, toItem, Field} from "../hooks";

const cms = [
    "All CM",
    "Old CM",
    "Nightmare CM",
    "Shattered CM",
    "Sunqua CM"
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

const scale = (fractal: string) => {
    if (fractal === "All") {
        // all to front
        return -2;
    } else if (fractal === "Dailies") {
        // dailies after
        return -1;
    } else if (fractal.endsWith("CM")) {
        // cms at end
        return 2 + cms.indexOf(fractal);
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

    // sort by scale
    if (scaleA < scaleB) {
        return -1;
    } else if (scaleA > scaleB) {
        return 1;
    } else if (a.fractal.endsWith("CM")) {
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
    const fields = useFields();
    return (
        <Layout title="Bingo Fields">
            <Paragraph align="center">
                Total count: {fields.length} bingo fields
            </Paragraph>
            <List>
                {[...fields].sort(compare).map(toItem)}
            </List>
        </Layout>
    );
};

export default Fields;
