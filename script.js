var twitchUsers = [
    Twit,
    FreeCodeCamp,
    DrunkDevs,
    Blasman13,
    NarcosVsZombies,
    HardlyDifficult,
]

function TwitchUser(userName) {
    var thisUser = this;
    this.userName = userName;
    this.channelURL;
    this.isCurrentlyStreaming;
    this.currentStreamInfo;

    createChannelURL(userName);

    function createChannelURL(userName) {
        thisUser.channelURL = "https://www.twitch.tv/" + userName;
    }

    this.getCurrentTwitchStreamInfo = function() {
        var twitchAPIUrl = "https://wind-bow.gomix.me/twitch-api/streams/";
        var apiCall = twitchAPIUrl + thisUser.userName;
        var promise = new Promise(function(resolve, reject) {
            $.getJSON(apiCall).then(function(json) {
                thisUser.currentStreamInfo = json;
                thisUser.isCurrentlyStreaming = setIsCurrentlyStreaming(json);
                resolve();
            });
        });
        return promise;

        function setIsCurrentlyStreaming(streamInfo) {
            if (streamInfo.stream) {
                return true;
            } else {
                return false;
            }
        }
    }

}