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
        thisUser.channelHTMLTemplate = $($template).html();
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
                resolve(thisUser);
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
            var template = $(thisUser.channelHTMLTemplate);
            var $channelName = $(template).find(".channel-name");
            var $logo = $(template).find(".channel-logo");
            console.log($logo.attr("src"));

            $channelName.html(thisUser.userName);
            $logo.attr("src", thisUser.channelInfo.logo);
            thisUser.channelHTMLTemplate = template;
            console.log(thisUser.channelHTMLTemplate);
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

function getChannelInfoForAllUsers(userList) {
    return new Promise(function(resolve, reject) {
        for (var i = 0, len = userList.length; i < len; i++) {
            userList[i].getChannelInfo().then(function(thisUser) {
                if (thisUser === userList[userList.length - 1]) {
                    resolve(userList);
                }
            })
        }
    });
}

function setChannelInfoForAllUsers(userList) {
    for (var i = 0, len = userList.length; i < len; i++) {
        userList[i].setHTMLFor.basicInfo();
    }
    console.log("Should be called once");
}

function addUserTemplatesToHTML($location, userList) {
    for (var i = 0, len = userList.length; i < len; i++) {
        $location.append(userList[i].channelHTMLTemplate);
    }

}

$(document).ready(function() {
    var currentTwitchUsers = getAllUsers(twitchUsers);
    getChannelInfoForAllUsers(currentTwitchUsers).then(function(userList) {
        setChannelInfoForAllUsers(userList);
        console.log("append now")
        addUserTemplatesToHTML($("#channelsContainer"), currentTwitchUsers);
    })
});