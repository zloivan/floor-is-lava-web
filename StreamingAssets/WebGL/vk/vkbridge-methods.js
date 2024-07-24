function InitVKBridge() {
    vkBridge.send('VKWebAppInit')
        .then(function (data) {
            console.log('VK Initialized', data);
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgeResponse', JSON.stringify({ status: 'success', data: data }));
        })
        .catch(function (error) {
            console.error('VK Initialization Error', error);
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKBridgeResponse', JSON.stringify({ status: 'error', error: error }));
        });
}

function CheckNativeAds(adFormat = 'reward', useWaterfall = true) {
    vkBridge.send('VKWebAppCheckNativeAds', { ad_format: adFormat, use_waterfall: useWaterfall })
        .then(function (data) {
            if (data.result) {
                gameInstance.SendMessage('VKMessageReceiver', 'OnVKCheckNativeAdsResponse', JSON.stringify({ status: 'loaded', ad_format: adFormat }));
            } else {
                gameInstance.SendMessage('VKMessageReceiver', 'OnVKCheckNativeAdsResponse', JSON.stringify({ status: 'notLoaded', ad_format: adFormat }));
            }
            console.log('Native Ads checked with result: ', data);
        })
        .catch(function (error) {
            console.error('Check Native Ads Error', error);
            gameInstance.SendMessage('VKMessageReceiver', 'OnVKCheckNativeAdsResponse', JSON.stringify({ status: 'error', ad_format: adFormat, error: error }));
        });
}

function GetAds() {
    vkBridge.send('VKWebAppGetAds')
        .then(function (data) {
            console.log('Ads received', data);
        })
        .catch(function (error) {
            console.error('Get Ads Error', error);
        });
}

function ShowNativeAds() {
    vkBridge.send('VKWebAppShowNativeAds')
        .then(function (data) {
            console.log('Native Ads shown', data);
        })
        .catch(function (error) {
            console.error('Show Native Ads Error', error);
        });
}

function ShowBannerAd() {
    vkBridge.send('VKWebAppShowBannerAd')
        .then(function (data) {
            console.log('Banner Ad shown', data);
        })
        .catch(function (error) {
            console.error('Show Banner Ad Error', error);
        });
}

function BannerAdUpdated() {
    vkBridge.send('VKWebAppBannerAdUpdated')
        .then(function (data) {
            console.log('Banner Ad updated', data);
        })
        .catch(function (error) {
            console.error('Banner Ad Updated Error', error);
        });
}

function CheckBannerAd() {
    vkBridge.send('VKWebAppCheckBannerAd')
        .then(function (data) {
            console.log('Banner Ad checked', data);
        })
        .catch(function (error) {
            console.error('Check Banner Ad Error', error);
        });
}

function HideBannerAd() {
    vkBridge.send('VKWebAppHideBannerAd')
        .then(function (data) {
            console.log('Banner Ad hidden', data);
        })
        .catch(function (error) {
            console.error('Hide Banner Ad Error', error);
        });
}

function BannerAdClosedByUser() {
    vkBridge.send('VKWebAppBannerAdClosedByUser')
        .then(function (data) {
            console.log('Banner Ad closed by user', data);
        })
        .catch(function (error) {
            console.error('Banner Ad Closed By User Error', error);
        });
}

function ShowLeaderBoardBox(user_result) {
    var params = {};
    if (user_result !== undefined && user_result !== null) {
        params.user_result = user_result;
    }
    vkBridge.send('VKWebAppShowLeaderBoardBox', params)
        .then(function (data) {
            if (data.success) {
                console.log('Leader Board Box shown', data);
                SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(data));
            }
        })
        .catch(function (error) {
            console.error('Show Leader Board Box Error', error);
            gameInstance.SendMessage('VKBridgeHandler', 'OnVKBridgeResponse', JSON.stringify(error));
        });
}

function ShowRequestBox() {
    vkBridge.send('VKWebAppShowRequestBox')
        .then(function (data) {
            console.log('Request Box Shown', data);
        })
        .catch(function (error) {
            console.error('Show Request Box Error', error);
        });
}

function ShowAlert(message){
    alert(message);
}

