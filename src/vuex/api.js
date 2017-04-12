/**
 * Created by fengzekun on 17/4/5.
 */
import axios from 'axios'
var url = '/static/api/';
export default{
    getIndexData: function (cb) {
        return new Promise((resolve, reject) => {
            axios.get(url + 'index/index.json').then(function (res) {
                //if (res.status >= 200 && res.status < 300) {
                resolve(res.data)
                //}
            }).catch((error) => {
                reject(error)
            })
        })
    }
}