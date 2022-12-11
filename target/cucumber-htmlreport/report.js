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
  "duration": 3015538700,
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
  "duration": 71983200,
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
  "duration": 3308509200,
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
  "duration": 5643684000,
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
  "duration": 4070601800,
  "status": "passed"
});
formatter.after({
  "duration": 716927300,
  "status": "passed"
});
formatter.before({
  "duration": 2709578000,
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
  "duration": 121800,
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
  "duration": 5838325200,
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
  "duration": 6728789000,
  "status": "passed"
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
  "duration": 2045654600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(), \u0027shirts\u0027)]\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DALIADIPU\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\ruhul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50130}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 29d3838b9ce932ff84dde06f17200320\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(), \u0027shirts\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.VerifyBrandItems(EbaySearchResultActions.java:50)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.item_list_should_have_products_of(EbaySearchResultSteps.java:40)\r\n\tat ✽.Then Item list should have products of \"Adidas\"(EbayBrandOutline.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 753279300,
  "status": "passed"
});
formatter.before({
  "duration": 6092382700,
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
  "duration": 132000,
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
  "duration": 4583720400,
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
  "duration": 6449303500,
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
  "duration": 4074596000,
  "status": "passed"
});
formatter.after({
  "duration": 730232300,
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
  "duration": 2912118600,
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
  "name": "Search for shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only shoes related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 81300,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_shoes()"
});
formatter.result({
  "duration": 3350792500,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_shoes_related_products()"
});
formatter.result({
  "duration": 4085438100,
  "status": "passed"
});
formatter.after({
  "duration": 703341200,
  "status": "passed"
});
formatter.before({
  "duration": 3094315300,
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
  "name": "Search for shirts",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have only shirts related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 81300,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_shirts()"
});
formatter.result({
  "duration": 4537996700,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_shirts_related_products()"
});
formatter.result({
  "duration": 4052701600,
  "status": "passed"
});
formatter.after({
  "duration": 733123700,
  "status": "passed"
});
formatter.before({
  "duration": 2889040700,
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
  "name": "Search for pants",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Item list should have only pants related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 118900,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_pants()"
});
formatter.result({
  "duration": 4124656400,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_pants_related_products()"
});
formatter.result({
  "duration": 4068720200,
  "status": "passed"
});
formatter.after({
  "duration": 700251200,
  "status": "passed"
});
});