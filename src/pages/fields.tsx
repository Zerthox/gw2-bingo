import React from "react";
import Layout, {Paragraph} from "../components/layout";
import List from "../components/list";
import data, {Field} from "../data";

const compare = (fieldA: Field, fieldB: Field) => {
    // we parse the number at the start of the fractal string
    const a = parseInt(fieldA.title);
    const b = parseInt(fieldB.title);

    // compare them
    if (a < b) {
        return -1;
    } else if (a > b) {
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
            {data.all.map(data.toField).sort(compare)}
        </List>
    </Layout>
);

export default Fields;
