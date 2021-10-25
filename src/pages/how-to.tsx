import React from "react";
import Layout, {Link, Paragraph} from "../components/layout";
import Bingo from "../components/bingo";

const HowTo = (): JSX.Element => (
    <Layout title="How to play">
        <Paragraph>
            A bingo card has 9 fields ordered in 3 rows and 3 columns.
            Each fields describes an event which may or may not happen during a Fractal CM run.
        </Paragraph>
        <Paragraph>
            After you have finished the run, mark the fields that apply.
            You win by getting 3 fields in a row or a column or diagonal.
        </Paragraph>
        <Paragraph>
            We usually generate our bingo cards after the run and put 10 <Link to="https://wiki.guildwars2.com/wiki/Fractal_Encryption">Fractal Encryptions</Link> from each player in the pot.
            Then check who has bingo and split the pot between the winners.
            If there are no winners, everyone gets their boxes back.
        </Paragraph>
        <Paragraph>
            But of course you can make up your own rules!
            If you are up for mayhem, you can even generate the cards before the run.
        </Paragraph>
        <Paragraph>A bingo card looks like this:</Paragraph>
        <Bingo ids={[46, 72, 24, 10, 51, 0, 62, 36, 40]}/>
    </Layout>
);

export default HowTo;
