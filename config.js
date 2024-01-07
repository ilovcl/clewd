/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "SET YOUR COOKIE HERE",
    "CookieArray": [
        "sessionKey=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",
        "sessionKey=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",
        "sessionKey=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",
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