import React from "react";
import Layout, {Paragraph} from "../components/layout";
import List from "../components/list";
import data, {Fractal} from "../data";

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

const compare = (a: Fractal, b: Fractal) => {
    // we parse the number at the start of the fractal string
    const fractalA = parseInt(a.fractal);
    const fractalB = parseInt(b.fractal);

    // order of encounters within the CM fractals
    const encounterA = a.encounter ? encounters.indexOf(a.encounter) : -2;
    const encounterB = b.encounter ? encounters.indexOf(b.encounter) : -2;

    // compare them
    if (fractalA < fractalB) {
        return -1;
    } else if (fractalA > fractalB) {
        return 1;
    } else if (encounterA < encounterB) {
        return -1;
    } else if (encounterA > encounterB) {
        return 1;
    } else {
        return 0;
    }
};

const Fields = (): JSX.Element => (
    <Layout title="Bingo Fields">
        <Paragraph align="center">
            Total count: {data.all.length} bingo fields
        </Paragraph>
        <List>
            {data.all.sort(compare).map(data.toField)}
        </List>
    </Layout>
);

export default Fields;
