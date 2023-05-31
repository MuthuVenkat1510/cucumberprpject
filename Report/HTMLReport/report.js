$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFolder/FBLoginFeature.feature");
formatter.feature({
  "name": "To validate the Login the functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "    to validate login functionality invalid email and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user have to enter the \"\u003cemail\u003e\"  and \"\u003c pass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "pass"
      ]
    },
    {
      "cells": [
        "12234",
        "asdg"
      ]
    },
    {
      "cells": [
        "67890",
        "qwertty"
      ]
    },
    {
      "cells": [
        "12345",
        "poiuy"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    to validate login functionality invalid email and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user have to enter the \"12234\"  and \"\u003c pass\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    to validate login functionality invalid email and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user have to enter the \"67890\"  and \"\u003c pass\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    to validate login functionality invalid email and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user have to enter the \"12345\"  and \"\u003c pass\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate login functionality invalid email and empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "max the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.max_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter the invalid email and empty password",
  "rows": [
    {
      "cells": [
        "1234567",
        "",
        "hjkl",
        "sgdsgd"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_invalid_email_and_empty_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate login functionality invalid email and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user have to enter the invalid email and valid password",
  "rows": [
    {
      "cells": [
        "Name",
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "Muthu",
        "Muthu123",
        "abcdeg"
      ]
    },
    {
      "cells": [
        "Kumar",
        "kumar123",
        "poiuyr"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_invalid_email_and_valid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate login functionality valid email and empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "user have to enter the valid email and empty password",
  "rows": [
    {
      "cells": [
        "Kumar",
        ""
      ]
    },
    {
      "cells": [
        "Muthu",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_valid_email_and_empty_password(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 5, Size: 2\r\n\tat java.util.ArrayList.rangeCheck(Unknown Source)\r\n\tat java.util.ArrayList.get(Unknown Source)\r\n\tat java.util.Collections$UnmodifiableList.get(Unknown Source)\r\n\tat org.steps.LoginSteps.user_have_to_enter_the_valid_email_and_empty_password(LoginSteps.java:95)\r\n\tat ✽.user have to enter the valid email and empty password(file:src/test/resources/FeatureFolder/FBLoginFeature.feature:39)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate login functionality valid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "user have to enter the valid email and invalid password",
  "rows": [
    {
      "cells": [
        "Username",
        "Muthu15@gmail.com"
      ]
    },
    {
      "cells": [
        "Password",
        "Mihtutj"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_valid_email_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate login functionality empty email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@empty"
    }
  ]
});
formatter.step({
  "name": "user have to enter the empty email and invalid password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_empty_email_and_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate login functionality empty email and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@empty"
    }
  ]
});
formatter.step({
  "name": "user have to enter the empty email and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_empty_email_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have be in Fb page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_be_in_Fb_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to validate login functionality empty email and empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@empty"
    }
  ]
});
formatter.step({
  "name": "user have to enter the empty email and empty password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_the_empty_email_and_empty_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check wheather user in invalid crendential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.check_wheather_user_in_invalid_crendential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});