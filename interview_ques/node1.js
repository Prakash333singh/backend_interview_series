//aggregation are operations that combine multiple piece of data to
//produce sigle result
//they are used to summarize large sets of data,giving us useful
// insights without having to look at every individual piece of info

//studentScores

// {
//     "studentId":1,
//     "name":"Alice",
//     "scroes":[85,90,93,96,40]
// }

// $unwind is used to deconstruct the scores array.
// $group is used to group documents by a specified expression.
// $sum, $avg, $max, $min are aggregation operators.
// $match is used for filtering documents.
// $count is used for counting documents.

//why use cors package ,what does it do
// cors->cross origin resource
//it is used to enable cross origin resource sharing in web development
//it is mechanism implemented by web browers to control access
// to resources like apis on differnet domain than the one serving the
// web page

// Why use 'cors'?
// It allows you to make your server accessible to web pages from different
//  domains. Without it,
// browsers would block requests from a webpage to your API if they're not
//  on the same domain.

// What does it do?
// The 'cors' package adds the necessary headers to your server's
// responses, telling the browser it's okay to allow requests from
// different origins (domains).

// enable cors for all routes
// app.use(cors());

//for specific domain
// const corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200
//   };

//   app.use(cors(corsOptions));

// app.options("*", cors({ origin: "*", optionsSuccessStatus: 200 }));

// Key Differences:

// app.use() is for middleware and affects all HTTP methods.
// app.get() is for handling GET requests on a specific route.
// app.options() is specifically for handling OPTIONS requests, often used with CORS.

// When to use each:

// Use app.use() for applying middleware that should run
// for multiple routes or all routes.
// Use app.get() (or app.post(), app.put(), etc.) when you want
//  to handle specific HTTP methods on specific routes.
// Use app.options() when you need to handle OPTIONS requests,
//  typically for CORS configuration.
