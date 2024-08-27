// netlify/functions/hello.js
exports.handler = async function(event, context) {
    const products = [
        {id:1, name: "product 1",  price: 11.99},
        {id:2, name: "product 2",  price: 11.99},
        {id:3, name: "product 3",  price: 11.99}
    ];
    return {
      statusCode: 200,
      body: JSON.stringify( products ),
    };
  };
  