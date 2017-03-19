export default function (cookies) {
    var valid = true;
    let user = undefined;
    let sessionId = undefined;
    
    const userCookies = cookies.split('; ').filter((cookie) => {
        return cookie.indexOf('user') > -1
    })
    
    const sessionCookies = cookies.split('; ').filter((cookie) => {
        return cookie.indexOf('sessionId') > -1
    })

    if (userCookies.length > 0) {
        user = decodeURIComponent(userCookies[0].split('=')[1])
        sessionId = decodeURIComponent(sessionCookies[0].split('=')[1])
    } else valid = false;
    return {
        valid: valid,
        user: user,
        sessionId: sessionId
    }
    
}