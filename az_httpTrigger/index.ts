import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const az_httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: "safwanmasarik test 123"
    // };

    return context.res.status(200).json("safwanmasarik from Malaysia");
};

export default az_httpTrigger;