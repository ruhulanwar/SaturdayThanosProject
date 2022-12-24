$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Brand Outline",
  "description": "\r\nDescription: User should able to filter items by Brand",
  "id": "ebay-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 15,
      "id": "ebay-brand-outline;filter-items-by-brand;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike"
      ],
      "line": 16,
      "id": "ebay-brand-outline;filter-items-by-brand;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas"
      ],
      "line": 17,
      "id": "ebay-brand-outline;filter-items-by-brand;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded"
      ],
      "line": 18,
      "id": "ebay-brand-outline;filter-items-by-brand;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3112708200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 77726000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 3457493500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 1835046100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 278464300,
  "status": "passed"
});
formatter.after({
  "duration": 16839736300,
  "status": "passed"
});
formatter.before({
  "duration": 2516072800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 722900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 2346856700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 44040200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@aria-label\u003d\u0027adidas\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DALIADIPU\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\ruhul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58059}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ba11698f872a337577d934863377c990\n*** Element info: {Using\u003dxpath, value\u003d//input[@aria-label\u003d\u0027adidas\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.filterBrand(EbaySearchResultActions.java:41)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.filter_by(EbaySearchResultSteps.java:34)\r\n\tat ✽.When Filter by \"Adidas\"(EbayBrandOutline.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16869439800,
  "status": "passed"
});
formatter.before({
  "duration": 2381183400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 143600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 3078230200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 2641077100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 78235600,
  "status": "passed"
});
formatter.after({
  "duration": 770357700,
  "status": "passed"
});
formatter.uri("EbayCountryOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Country Outline",
  "description": "\r\nDescription: User should able to filter items by Country of Manufacture",
  "id": "ebay-country-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-249"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Filter items by Country of Manufacture",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country-of-manufacture",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Filter by Region of Manufacture \"\u003cCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Item list should only have products from \"\u003cCountry\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country-of-manufacture;",
  "rows": [
    {
      "cells": [
        "Items",
        "Country"
      ],
      "line": 16,
      "id": "ebay-country-outline;filter-items-by-country-of-manufacture;;1"
    },
    {
      "cells": [
        "Shoes",
        "China"
      ],
      "line": 17,
      "id": "ebay-country-outline;filter-items-by-country-of-manufacture;;2"
    },
    {
      "cells": [
        "Shirts",
        "Bangladesh"
      ],
      "line": 18,
      "id": "ebay-country-outline;filter-items-by-country-of-manufacture;;3"
    },
    {
      "cells": [
        "Pants",
        "United States"
      ],
      "line": 19,
      "id": "ebay-country-outline;filter-items-by-country-of-manufacture;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2552881500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 132700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Country of Manufacture",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country-of-manufacture;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-249"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Filter by Region of Manufacture \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Item list should only have products from \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4879581600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 33
    }
  ],
  "location": "EbaySearchResultSteps.filter_by_Region_of_Manufacture(String)"
});
formatter.result({
  "duration": 229104000,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DALIADIPU\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\ruhul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58220}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f4cd247e1f005d23be553581cd9e08fe\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.filterCountry(EbaySearchResultActions.java:66)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.filter_by_Region_of_Manufacture(EbaySearchResultSteps.java:44)\r\n\tat ✽.When Filter by Region of Manufacture \"China\"(EbayCountryOutline.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 42
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_only_have_products_from(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 663050600,
  "status": "passed"
});
formatter.before({
  "duration": 3256430200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 94100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Country of Manufacture",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country-of-manufacture;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-249"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Filter by Region of Manufacture \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Item list should only have products from \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4579023400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh",
      "offset": 33
    }
  ],
  "location": "EbaySearchResultSteps.filter_by_Region_of_Manufacture(String)"
});
formatter.result({
  "duration": 3283205800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027s0-52-12-0-1-2-6-0-2[1]-4[5]-3\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DALIADIPU\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\ruhul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58286}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0a086a2434c8161683c3c11a2938adae\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027s0-52-12-0-1-2-6-0-2[1]-4[5]-3\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.filterCountry(EbaySearchResultActions.java:70)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.filter_by_Region_of_Manufacture(EbaySearchResultSteps.java:44)\r\n\tat ✽.When Filter by Region of Manufacture \"Bangladesh\"(EbayCountryOutline.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh",
      "offset": 42
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_only_have_products_from(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 746005800,
  "status": "passed"
});
formatter.before({
  "duration": 3770013400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 330300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Filter items by Country of Manufacture",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country-of-manufacture;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-249"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Filter by Region of Manufacture \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Item list should only have products from \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 2869050100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 33
    }
  ],
  "location": "EbaySearchResultSteps.filter_by_Region_of_Manufacture(String)"
});
formatter.result({
  "duration": 396800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 42
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_only_have_products_from(String)"
});
formatter.result({
  "duration": 4021992900,
  "status": "passed"
});
formatter.after({
  "duration": 16960423300,
  "status": "passed"
});
formatter.uri("EbaySearch.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3198592800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Shoes",
  "description": "",
  "id": "ebay-search-functionality;search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only Shoes related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 152900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 665881700,
  "status": "passed"
});
formatter.before({
  "duration": 2469203900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search for Shirts",
  "description": "",
  "id": "ebay-search-functionality;search-for-shirts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Search for Shirts",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have only Shirts related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 82200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Shirts_related_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 682085600,
  "status": "passed"
});
formatter.before({
  "duration": 3188737300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search for Pants",
  "description": "",
  "id": "ebay-search-functionality;search-for-pants",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Search for Pants",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Item list should have only Pants related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_Pants_related_products()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16839913700,
  "status": "passed"
});
});