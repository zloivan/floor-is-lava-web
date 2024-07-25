function InitVKBridge() {
    vkBridge.send('VKWebAppInit')
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('VK Initialized', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('VK Initialization Error', error);
        });
}

function CheckNativeAds(adFormat, useWaterfall) {
    let params = { ad_format: adFormat };
    if (useWaterfall !== null) {
        params.use_waterfall = useWaterfall;
    }

    vkBridge.send('VKWebAppCheckNativeAds', params)
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Native Ads checked with result: ', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Check Native Ads Error', error);
        });
}

function ShowNativeAds(adFormat, useWaterfall) {
    let params = { ad_format: adFormat };
    if (useWaterfall !== null) {
        params.use_waterfall = useWaterfall;
    }

    vkBridge.send('VKWebAppShowNativeAds', params)
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Native Ads shown', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Show Native Ads Error', error);
        });
}

function TrackEvent(eventName, userId) {
    let params = { event_name: eventName };
    if (userId !== null) {
        params.user_id = userId;
    }

    vkBridge.send('VKWebAppTrackEvent', params)
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Event tracked', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Track Event Error', error);
        });
}

function ShowBannerAd(bannerLocation, bannerAlign, orientation, layoutType) {
    let params = {params.banner_location: bannerLocation};
    if (bannerAlign !== null) params.banner_align = bannerAlign;
    if (orientation !== null) params.orientation = orientation;
    if (layoutType !== null) params.layout_type = layoutType;

    vkBridge.send('VKWebAppShowBannerAd', params)
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Banner Ad shown', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Show Banner Ad Error', error);
        });
}

function CheckBannerAd() {
    vkBridge.send('VKWebAppCheckBannerAd')
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Banner Ad checked', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Check Banner Ad Error', error);
        });
}

function ConversionHit(pixelCode, conversionEvent, conversionValue) {
    vkBridge.send('VKWebAppConversionHit', { pixel_code: pixelCode, conversion_event: conversionEvent, conversion_value: conversionValue})
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Conversion hit received', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Conversion Hit Error', error);
        });
}

function HideBannerAd() {
    vkBridge.send('VKWebAppHideBannerAd')
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Banner Ad hidden', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Hide Banner Ad Error', error);
        });
}

function ShowLeaderBoardBox(user_result) {
    let params = {};
    if (user_result !== null) params.user_result = user_result;

    vkBridge.send('VKWebAppShowLeaderBoardBox', params)
        .then(function (data) {
            if (data.success) {
                gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
                console.log('Leader Board Box shown', data);
            }
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Show Leader Board Box Error', error);
        });
}

function RetargetingPixel(pixelCode, event, targetGroupId, priceListId, productsEvent, productsParams) {

    let params = { pixel_code: pixelCode };
    if (event !== null) params.event = event;
    if (targetGroupId !== null) params.target_group_id = targetGroupId;
    if (priceListId !== null) params.price_list_id = priceListId;
    if (productsEvent !== null) params.products_event = productsEvent;
    if (productsParams !== null) params.products_params = productsParams;

    vkBridge.send('VKWebAppRetargetingPixel', params)
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Retargeting Pixel Hit', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Retargeting Pixel Hit Error', error);
        });
}

function ShowInviteBox(requestKey) {
    let params = {};
    if (requestKey !== null) params.requestKey = requestKey;

    vkBridge.send('VKWebAppShowInviteBox', params)
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Invite Box Shown', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Show Invite Box Error', error);
        });
}

function ShowRequestBox(uID, message, requestKey) {
    let params = { uid: uID, message: message };
    if (requestKey !== null) params.requestKey = requestKey;

    vkBridge.send('VKWebAppShowRequestBox', params)
        .then(function (data) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromise', data);
            console.log('Request Box Shown', data);
        })
        .catch(function (error) {
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgePromiseError', error);
            console.error('Show Request Box Error', error);
        });
}

function ShowAlert(message) {
    alert(message);
}

function SubscribeToEvents() {
    vkBridge.subscribe(function (event) {
        if (!event.detail) {
            return;
        }

        gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgeEvent', event);
    })
}
