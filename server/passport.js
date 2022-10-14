const passport = require("passport");
const SteamStrategy = require("passport-steam").Strategy;

passport.use(new SteamStrategy(
    {
        realm: 'https://repclone.herokuapp.com',
        returnURL: "https://repclone.herokuapp.com/api/auth/steam/return",
        apiKey: processe.env.STEAM_API
    },
    function (identifier, profile, done) {
        process.nextTick(function () {
            profile.identifier = identifier;
            done(null, profile);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});
