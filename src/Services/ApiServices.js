import axios from "axios";

const _api =  axios.create({
    baseURL:'api_url',
    headers:{
        "content-type":"application/json"
    }
});

const apiService = {
    post : async (data)=> {
        try {
            const result =  await  (await _api.post('/',data));
            if(result.status === 200 || result.status === 201){
                return result.data;
            }
            return false;
        } catch (error) {
            console.log('====================================');
            console.log(error?.message);
            console.log('====================================');
            return false;
        }
    }
}

