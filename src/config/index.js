
const apiDomain = 'http://localhost:8000'
export const category =apiDomain +'/api/category/'
export const loginUrl = apiDomain + '/oauth/token'
export const userUrl = apiDomain + '/api/user'
export const signUpUrl = apiDomain + '/api/user/signup'
export const getCategory = apiDomain + '/api/category/get'
export const search = apiDomain + '/api/search/product/'

export const getHeader = function () {
    if(JSON.parse(window.localStorage.getItem('authUser'))){
        const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
        const headers = {
            Accept:'application/json',
            Authorization:'Bearer ' + tokenData.access_token
        }
        return headers
    }else{
        const headers = {
            Accept:'application/json',
            Authorization:'Bearer '
        }
        return headers
    }
  
}