var jsonSamples = {
    channelInfo: function() {
        var channelInfoResponse = {
            "mature": false,
            "status": "test status",
            "broadcaster_language": "en",
            "display_name": "test_channel",
            "game": "Gaming Talk Shows",
            "delay": null,
            "language": "en",
            "_id": 12345,
            "name": "test_channel",
            "created_at": "2007-05-22T10:39:54Z",
            "updated_at": "2015-02-12T04:15:49Z",
            "logo": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg",
            "banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_header_image-08dd874c17f39837-640x125.png",
            "video_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_offline_image-b314c834d210dc1a-640x360.png",
            "background": null,
            "profile_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_banner-6936c61353e4aeed-480.png",
            "profile_banner_background_color": "null",
            "partner": true,
            "url": "http://www.twitch.tv/test_channel",
            "views": 49144894,
            "followers": 215780,
            "_links": {
                "self": "https://api.twitch.tv/kraken/channels/test_channel",
                "follows": "https://api.twitch.tv/kraken/channels/test_channel/follows",
                "commercial": "https://api.twitch.tv/kraken/channels/test_channel/commercial",
                "stream_key": "https://api.twitch.tv/kraken/channels/test_channel/stream_key",
                "chat": "https://api.twitch.tv/kraken/chat/test_channel",
                "subscriptions": "https://api.twitch.tv/kraken/channels/test_channel/subscriptions",
                "editors": "https://api.twitch.tv/kraken/channels/test_channel/editors",
                "teams": "https://api.twitch.tv/kraken/channels/test_channel/teams",
                "videos": "https://api.twitch.tv/kraken/channels/test_channel/videos"
            }
        }
        return new Promise(function(resolve, reject) {
            resolve(channelInfoResponse);
        });
    },

    userNotStreaming: function() {
        var userNotStreamingAPIResponse = {
            "stream": null,
            "_links": {
                "self": "https://api.twitch.tv/kraken/streams/test_channel",
                "channel": "https://api.twitch.tv/kraken/channels/test_channel"
            }
        }
        return new Promise(function(resolve, reject) {
            resolve(userNotStreamingAPIResponse);
        })
    },

    userIsStreaming: function() {
        var userCurrentlyStreamingAPIResponse = {
            "_links": {
                "channel": "https://api.twitch.tv/kraken/channels/test_channel",
                "self": "https://api.twitch.tv/kraken/streams/test_channel"
            },
            "stream": {
                "game": "StarCraft II: Heart of the Swarm",
                "viewers": 2123,
                "average_fps": 29.9880749574,
                "delay": 0,
                "video_height": 720,
                "is_playlist": false,
                "created_at": "2015-02-12T04:42:31Z",
                "_id": 4989654544,
                "channel": {
                    "mature": false,
                    "status": "test status",
                    "broadcaster_language": "en",
                    "display_name": "test_channel",
                    "game": "StarCraft II: Heart of the Swarm",
                    "delay": null,
                    "language": "en",
                    "_id": 12345,
                    "name": "test_channel",
                    "created_at": "2007-05-22T10:39:54Z",
                    "updated_at": "2015-02-12T04:15:49Z",
                    "logo": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_image-94a42b3a13c31c02-300x300.jpeg",
                    "banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_header_image-08dd874c17f39837-640x125.png",
                    "video_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-channel_offline_image-b314c834d210dc1a-640x360.png",
                    "background": null,
                    "profile_banner": "http://static-cdn.jtvnw.net/jtv_user_pictures/test_channel-profile_banner-6936c61353e4aeed-480.png",
                    "profile_banner_background_color": "null",
                    "partner": true,
                    "url": "http://www.twitch.tv/test_channel",
                    "views": 49144894,
                    "followers": 215780,
                    "_links": {
                        "self": "https://api.twitch.tv/kraken/channels/test_channel",
                        "follows": "https://api.twitch.tv/kraken/channels/test_channel/follows",
                        "commercial": "https://api.twitch.tv/kraken/channels/test_channel/commercial",
                        "stream_key": "https://api.twitch.tv/kraken/channels/test_channel/stream_key",
                        "chat": "https://api.twitch.tv/kraken/chat/test_channel",
                        "features": "https://api.twitch.tv/kraken/channels/test_channel/features",
                        "subscriptions": "https://api.twitch.tv/kraken/channels/test_channel/subscriptions",
                        "editors": "https://api.twitch.tv/kraken/channels/test_channel/editors",
                        "teams": "https://api.twitch.tv/kraken/channels/test_channel/teams",
                        "videos": "https://api.twitch.tv/kraken/channels/test_channel/videos"
                    }
                },
                "preview": {
                    "small": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-80x45.jpg",
                    "medium": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-320x180.jpg",
                    "large": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-640x360.jpg",
                    "template": "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg"
                },
                "_links": {
                    "self": "https://api.twitch.tv/kraken/streams/test_channel"
                }
            }
        }
        return new Promise(function(resolve, reject) {
            resolve(userCurrentlyStreamingAPIResponse);
        })
    }
}

describe("Jasmine functionality test", function() {
    pending("Initial test of Jasmine, not necessary to the specific app");

    it("should have one successful test", function() {
        expect(true).toBe(true);
    });
    it("should have one failing test", function() {
        expect(true).toBe(false);
    })
});

describe("TwitchUser", function() {
    var user = new TwitchUser("freecodecamp");
    describe("when created", function() {
        it("should be created with a userName property", function() {
            expect(user.userName).toBe("freecodecamp");
        });
        it("should create the channel url from the userName", function() {
            expect(user.channelURL).toBe("https://www.twitch.tv/freecodecamp");
        });
        it("should start with an undefined isCurrentlyStreaming property", function() {
            expect(user.currentlyStreaming).toBe(undefined);
        });
        it("should start with an undefined currentStreamInfo property", function() {
            expect(user.currentStreamInfo).toBeUndefined();
        });
        it("should store an HTML template as a variable", function() {
            expect(user.channelHTMLTemplate).not.toBeUndefined();
            expect(user.channelHTMLTemplate).toEqual(jasmine.any(Object));
        })
    });
    describe(".getChannelInfo", function() {
        beforeAll(function(done) {
            spyOn($, "getJSON").and.callFake(function() {
                return jsonSamples.channelInfo();
            });
            user.getChannelInfo().then(function() {
                done();
            });
        })
        it("should request the channel info from the twitch api", function() {
            expect(user.channelInfo).not.toBeUndefined();
        })
    })

    describe(".getCurrentTwitchStreamInfo", function() {

        describe("when calling the API", function() {
            pending("Calls through to API, use to test integration")
            beforeAll(function(done) {
                spyOn($, "getJSON").and.callThrough();
                user.getCurrentTwitchStreamInfo().then(function() {
                    done();
                });
            });
            it("should call jquery getJSON", function() {
                expect($.getJSON).toHaveBeenCalled();
            });

            it("should call getJSON with the correct API", function() {
                expect($.getJSON).toHaveBeenCalledWith(
                    "https://wind-bow.gomix.me/twitch-api/streams/" + user.userName
                );
            });
        });

        describe("when the user is not streaming", function() {
            beforeAll(function(done) {
                spyOn($, "getJSON").and.callFake(function() {
                    return jsonSamples.userNotStreaming();
                });
                user.getCurrentTwitchStreamInfo().then(function() {
                    done();
                });
            });

            it("should set isCurrentlyStreaming property to false", function() {
                expect(user.currentStreamInfo).not.toBe(undefined);
                expect(user.isCurrentlyStreaming).toBe(false);
            });

            describe("should set currentStreamInfo", function() {

                it("to an object", function() {
                    expect(user.currentStreamInfo).toEqual(jasmine.any(Object));
                });

                it("to an object that contains a stream property that is null", function() {
                    expect(user.currentStreamInfo).toEqual(jasmine.objectContaining({
                        stream: null,
                    }));
                });
            });
        });

        describe("when the user is streaming", function() {
            beforeAll(function(done) {
                spyOn($, "getJSON").and.callFake(function() {
                    return jsonSamples.userIsStreaming();
                });
                user.getCurrentTwitchStreamInfo().then(function() {
                    done();
                });
            });

            it("should set isCurrentlyStreaming property to true", function() {
                expect(user.isCurrentlyStreaming).not.toBe(undefined);
                expect(user.isCurrentlyStreaming).toBe(true);
            });
            it("should set currentStreamInfo to an object", function() {
                expect(user.currentStreamInfo).toEqual(jasmine.any(Object));
            })
            it("should set currentStreamInfo to an object that contains a stream object", function() {
                expect(user.currentStreamInfo.stream).not.toBe(undefined);
                expect(user.currentStreamInfo.stream).toEqual(jasmine.any(Object));
            })
        })
    });
});