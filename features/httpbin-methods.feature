Feature: HTTP methods on httpbin.org

    Scenario: User send request with GET method
        Given user has the correct base url
        When request is sent with GET method
        Then response should be successful for GET method

    Scenario Outline: User sends requests with PUT and POST methods
        Given payload property "user" value is "elser"
        When request is sent with <http_method> method
        Then it should return status 200

        Examples:
            | http_method |
            | POST        |
            | PUT         |