import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const players = await db
        .collection("nfl_skill_stats")
        .find({})
        //.limit(20)
        .toArray();

    res.json(players);
};