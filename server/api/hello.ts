import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

export default async (req: any, res: any) => {
    // get url 
    console.log(req);

    let data = { data: [{ data: "" }] };

    const search = "laravel";

    // if (search) {
    data = await $fetch(`https://api.github.com/search/repositories?q=${search}`);
    // }

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.write(JSON.stringify(data));
    // res.end();

    return data;

}