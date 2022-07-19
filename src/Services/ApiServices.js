import axios from "axios";

const _api =  axios.create({
    baseURL:'http://localhost:5000',
    // headers:{
    //     "content-type":"application/json",
    // }
});

const apiService = {
  
    postCompound : async (data)=> {
        try {
            const result = await _api.post('/compound',data);
            if(result.status === 200 || result.status === 201){
                return result?.data;
            }

            return false;
        } catch (error) {
            // console.log('====================================');
            // console.log(error?.message);
            // console.log('====================================');
            return false;
        }
    },

    postFile : async (data)=> {
        try {
            const result = await _api.post('/multi',data,{ headers:{
                'Content-Type': 'multipart/form-data'
            } });
            if(result.status === 200 || result.status === 201){
                return result?.data;
            }
            return false;
        } catch (error) {
            console.log('====================================');
            console.log(error?.message);
            console.log('====================================');
            return false;
        }
    },


}

export {
    apiService
}

