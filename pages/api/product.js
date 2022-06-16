import BaseApi from '../../lib/BaseApi';

const product = async (req, res) => {
    try {
        // console.log(req.body);
        const response = await BaseApi.get(
            '/products',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.AMB_TOKEN} `
                },

            }
        );
        // await console.log(response);
        res.status(response.status).json({
            status: response.status,
            data  : response.data,
        });
    } catch (e) {
        res.status(e.response.status).json(e.response.data);
    }
}

export default product;
