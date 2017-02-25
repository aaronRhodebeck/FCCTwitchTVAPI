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
    this.channelInfo;
    this.isCurrentlyStreaming;
    this.currentStreamInfo;

    createChannelURL(userName);

    function createChannelURL(userName) {
        thisUser.channelURL = "https://www.twitch.tv/" + userName;
    }

    this.getChannelInfo = function() {
        var twitchChannelApiUrl = "https://wind-bow.gomix.me/twitch-api/channels/";
        var apiCall = twitchChannelApiUrl + thisUser.userName;
        var promise = new Promise(function(resolve, reject) {
            $.getJSON(apiCall).then(function(json) {
                thisUser.channelInfo = json;
                resolve();
            });
        });
        return promise;
    }

    this.getCurrentTwitchStreamInfo = function() {
        var twitchStreamAPIUrl = "https://wind-bow.gomix.me/twitch-api/streams/";
        var apiCall = twitchStreamAPIUrl + thisUser.userName;
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