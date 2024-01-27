import { storageService } from './async-storage.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    changeScore
}

window.userService = userService

function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update({ _id, score }) {
    const user = await storageService.get('user', _id)
    user.score = score
    await storageService.put('user', user)

    // const user = await httpService.put(`user/${_id}`, {_id, score})

    // When admin updates other user's details, do not update loggedinUser
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) return saveLocalUser(user)
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    userCred.score = 10000
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // return await httpService.post('auth/logout')
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'puki', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()

const users = [
    {
    _id: "u101",
    username: "u101",
    password: "mukmuk",
    fullname: "John Smith",
    imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/w9bbfi5coafses2hgmtg.avif",
    following: [
      {
        _id: "u106",
        fullname: "Leonardo D",
        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
      }
    ],
    followers: [
      {
        _id: "u105",
        fullname: "Bob M",
        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
      }
    ],
    savedStoryIds: ["s104", "s111", "s123"] // even better - use mini-story
  },
  {
    _id: "u102",
    username: "u102",
    password: "MushMush",
    fullname: "Izik Newton",
    imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/w9bbfi5coafses2hgmtg.avif",
    following: [
      {
        _id: "u106",
        fullname: "Leonardo D",
        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
      }
    ],
    followers: [
      {
        _id: "u105",
        fullname: "Bob M",
        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
      }
    ],
    savedStoryIds: ["s104", "s111", "s123"] // even better - use mini-story
  },
  {
    _id: "u105",
    username: "Mush",
    password: "MushMush",
    fullname: "Newton Junior",
    imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/w9bbfi5coafses2hgmtg.avif",
    following: [
      {
        _id: "u106",
        fullname: "Leonardo D",
        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
      }
    ],
    followers: [
      {
        _id: "u105",
        fullname: "Bob M",
        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
      }
    ],
    savedStoryIds: ["s104", "s111", "s123"] // even better - use mini-story
  },
  {
    _id: "u106",
    username: "u106",
    password: "MushMush",
    fullname: "Izik Newton",
    imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/w9bbfi5coafses2hgmtg.avif",
    following: [
      {
        _id: "u106",
        fullname: "Leonardo D",
        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
      }
    ],
    followers: [
      {
        _id: "u105",
        fullname: "Bob M",
        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
      }
    ],
    savedStoryIds: ["s104", "s111", "s123"] // even better - use mini-story
  },
  ]

