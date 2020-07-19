import { createRequest, createResponse } from "node-mocks-http";

import { handleNotFoundError } from "../handle-not-found-error";


describe("resource not found error request handling", () => {

  const req = createRequest({
    method: "POST",
    url: "requested/url/"
  });

  test("must return a response with a message, the method and the URL", () => {

    const res = createResponse();

    handleNotFoundError(req, res, () => { });

    const resBody = res._getJSONData() as {
      message: string,
      url: string,
      method: string
    };

    expect(res.statusCode).toBe(404);
    expect(resBody.message).toBe("Requested resource does not exist");
    expect(resBody.url).toBe("requested/url/");
    expect(resBody.method).toBe("POST");
  })

})