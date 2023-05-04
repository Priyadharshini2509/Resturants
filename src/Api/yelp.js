import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization :' Bearer zUiqhmjseKpGPj9KCA02745VBMt90iDyk7wNS2nhWU_N5xe8U84yl3kohgYVeCiVU3WKLDRLN5rFYBDAEzEi1cxwDY8dZx4w0myt_5u5rpjzYdMuU52nUCFHvLBsY3Yx'
    }

});
