import Layout from "../components/Layout";
import { connectToDatabase } from "../util/mongodb";

export default function Stats({ players }) {
    return (
        <div>
            <Layout>
                <ul>
                    <h1>First 20 Players</h1>
                    {players.map((player) => (
                        <li>
                            <h2>Name: {player.name}</h2>
                            <h3>Position: {player.position}</h3>
                            <p>Total Yards: {player.total_yards}</p>
                        </li>
                    ))}
                </ul>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    const players = await db
        .collection("nfl_skill_stats")
        .find({})
        //.sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    return {
        props: {
            players: JSON.parse(JSON.stringify(players)),
        },
    };
}
