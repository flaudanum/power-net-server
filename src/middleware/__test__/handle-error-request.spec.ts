import { createRequest, createResponse } from "node-mocks-http";

import { handleServerError, ErrorResponseBody } from "../handle-server-error";
import StatusError from "../../utils/status-error"

describe("Server error handling", () => {

  const req = createRequest({
    method: "GET",
    url: "fake/url"
  });

  test("must return a response with the specified error status and a JSON body w/ error message", () => {
    const err = new StatusError("Error from test", 404);

    const res = createResponse();

    handleServerError(err, req, res, () => { });

    const resBody = <ErrorResponseBody>res._getJSONData();

    expect(res.statusCode).toBe(404);
    expect(resBody.message).toBe("Error from test");
  })

  test("must return a response with the specified error status of 500", () => {
    const err = new StatusError("Error from test w/o status");

    const res = createResponse();

    handleServerError(err, req, res, () => { });

    const resBody = <ErrorResponseBody>res._getJSONData();

    expect(res.statusCode).toBe(500);
    expect(resBody.message).toBe("Error from test w/o status");

  })
})