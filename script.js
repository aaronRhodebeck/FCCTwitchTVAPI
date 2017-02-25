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

    function createAPICallFor(channelOrStream, userName) {
        var twitchApiUrl = "https://wind-bow.gomix.me/twitch-api/";
        var apiCall = twitchApiUrl + channelOrStream + "/" + userName;
    }

    this.getChannelInfo = function() {
        var apiCall = createAPICallFor("channel", thisUser.userName);
        var promise = new Promise(function(resolve, reject) {
            $.getJSON(apiCall).then(function(json) {
                thisUser.channelInfo = json;
                resolve();
            });
        });
        return promise;
    }

    this.getCurrentTwitchStreamInfo = function() {
        var apiCall = createAPICallFor("stream", thisUser.userName);
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