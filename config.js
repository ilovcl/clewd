/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "",
    "CookieArray": [
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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"
    ],
    "Cookiecounter": 3,
    "CookieIndex": 0,
    "ProxyPassword": "",
    "Ip": "127.0.0.1",
    "Port": 8444,
    "localtunnel": false,
    "BufferSize": 1,
    "SystemInterval": 3,
    "rProxy": "",
    "api_rProxy": "",
    "padtxt_placeholder": "",
    "PromptExperimentFirst": "",
    "PromptExperimentNext": "",
    "PersonalityFormat": "{{char}}'s personality: {{personality}}",
    "ScenarioFormat": "Dialogue scenario: {{scenario}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": false,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": 15000,
        "xmlPlot": true,
        "Superfetch": true
    }
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */