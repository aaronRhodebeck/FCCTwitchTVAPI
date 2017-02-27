var twitchUsers = [
    "Twit",
    "FreeCodeCamp",
    "DrunkDevs",
    "Blasman13",
    "NarcosVsZombies",
    "HardlyDifficult",
    "Comster404",
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
    createChannelTemplate();

    function createChannelURL(userName) {
        thisUser.channelURL = "https://www.twitch.tv/" + userName;
    }

    function createChannelTemplate() {
        var $template = $("#channelTemplate").clone().removeAttr("id");
        $template.attr("id", thisUser.userName)
        thisUser.channelHTMLTemplate = $template;
    }

    function createAPICallFor(channelOrStream, userName) {
        var twitchApiUrl = "https://wind-bow.gomix.me/twitch-api/";
        return twitchApiUrl + channelOrStream + "/" + userName;
    }

    this.getChannelInfo = function() {
        var apiCall = createAPICallFor("channels", thisUser.userName);
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
        },
        streamInfo: function() {
            var currentStream = thisUser.currentStreamInfo.stream;
            var $moreInfoLink = $template.find(".more-info-link");
            var $game = $template.find(".game");
            var $viewers = $template.find(".viewers");
            var $isLive = $template.find(".live-or-replay");

            $game.html(currentStream.game);
            $viewers.html(currentStream.viewers);
            if (currentStream.is_playlist) {
                $isLive.html("Replay");
            } else {
                $isLive.html("Live!");
            }
        }
    }
}

function getAllUsers(desiredUsers) {
    var allUsers = [];
    for (var i = 0, len = desiredUsers.length; i < len; i++) {
        var user = new TwitchUser(desiredUsers[i]);
        allUsers.push(user);
    }
    return allUsers;
}

function getAndSetChannelInfoForAllUsers(userList) {
    for (var i = 0, len = userList.length; i < len; i++) {
        userList[i].getChannelInfo().then(function() {
            usersList[i].setHTMLFor.basicInfo();
        });
    }
}

function addUserTemplateToHTML($location, userList) {
    for (var i = 0, len = userList.length; i < len; i++) {
        $location.append(userList[i]);
    }

}

$(document).ready(function() {
    var currentTwitchUsers = getAllUsers(twitchUsers);
    getAndSetChannelInfoForAllUsers(currentTwitchUsers);
    addUserTemplateToHTML($("#channelsContainer"), currentTwitchUsers);
    console.log(currentTwitchUsers);
});