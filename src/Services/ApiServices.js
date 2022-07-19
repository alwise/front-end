import axios from "axios";

const _api =  axios.create({
    // baseURL:'',
    headers:{
        "content-type":"application/json",
    }
});

const apiService = {
  
    postCompound : async (data)=> {
        try {
            const result = await _api.post('http://3.133.90.101/api/',data);
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
            const result = await _api.post('/api/multi',data,{ headers:{
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

