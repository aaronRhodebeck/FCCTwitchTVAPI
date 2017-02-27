var twitchUsers = [
    "Twit",
    "FreeCodeCamp",
    "DrunkDevs",
    "Blasman13",
    "NarcosVsZombies",
    "HardlyDifficult",
]

function TwitchUser(userName) {
    var thisUser = this;
    this.userName = userName;
    this.channelURL;
    this.channelInfo;
    this.isCurrentlyStreaming;
    this.currentStreamInfo;
    this.channelHTMLTemplate;

    createChannelURL(userName);
    createChannelTemplate()

    function createChannelURL(userName) {
        thisUser.channelURL = "https://www.twitch.tv/" + userName;
    }

    function createChannelTemplate() {
        var $template = $("#channelTemplate").clone().removeAttr("id");
        $template.attr("id", thisUser.userName)
        thisUser.channelHTMLTemplate = $template;
        console.log($template.html());
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

    this.setHTMLFor = {
        basicInfo: function() {
            var $channelName = $template.find(".channel-name");
            var $logo = $template.find(".channel-logo");

            $channelName.html(thisUser.userName);
            $logo.attr("src", thisUser.channelInfo.logo);
        }

    }
}

$(document).ready(function() {
    var user = new TwitchUser("freeCodeCamp");
});