module.exports = {
    env: {
        MYSQL_HOST: "127.0.0.1",
        MYSQL_PORT: "3306",
        MYSQL_DATABASE: "nfl_stats",
        MYSQL_USER: "root",
        MYSQL_PASSWORD: "Mridangam10",
    },
};

const withSass = require("@zeit/next-sass");
module.exports = withSass();
