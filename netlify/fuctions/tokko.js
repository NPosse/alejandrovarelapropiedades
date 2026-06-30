exports.handler = async () => {

    const API_KEY = process.env.TOKKO_API_KEY;

    const url = `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&key=${API_KEY}`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        return{

            statusCode:200,

            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            },

            body:JSON.stringify(data)

        };

    }catch(error){

        return{

            statusCode:500,

            body:JSON.stringify({
                error:error.message
            })

        };

    }

};