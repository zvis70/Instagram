
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'story'

export const storyService = {
    query,
    getById,
    save,
    remove,
    getEmptyStory,
    getDefaultFilter,
    addStoryMsg
}
//window.cs = storyService

_createStories()

async function query(filterBy = { txt: '', price: 0 }) {
    var stories = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     stories = stories.filter(story => regex.test(story.vendor) || regex.test(story.description))
    // }
    // if (filterBy.price) {
    //     stories = stories.filter(story => story.price <= filterBy.price)
    // }
    return stories
}

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function remove(storyId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, storyId)
}

async function save(story) {
    var savedStory
    if (story._id) {
        savedStory = await storageService.put(STORAGE_KEY, story)
    } else {
        // Later, owner is set by the backend
        story.owner = userService.getLoggedinUser()
        savedStory = await storageService.post(STORAGE_KEY, story)
    }
    return savedStory
}

async function addStoryMsg(storyId, txt) {
    // Later, this is all done by the backend
    const story = await getById(storyId)
    if (!story.msgs) story.msgs = []

    const msg = {
        _id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    story.msgs.push(msg)
    await storageService.put(STORAGE_KEY, story)

    return msg
}


function getDefaultFilter() {
    return {
        _id: '',
        txt: '',
        /* type: '',
        minBatteryStatus: 0,
        maxBattery: '',
        model: '' */
    }
}


//////////////////// DO TO LATER ///////////////////////////////// 
function getEmptyStory() {
    return {
        // vendor: 'Susita-' + (Date.now() % 1000),
        //price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))


function _createStories() {
    let stories = utilService.loadFromStorage(STORAGE_KEY)
    if (!stories || !stories.length) {
        stories = [
            {
                _id: "s101",
                txt: "Best trip ever",
                imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610789/cld-sample-3.jpg", //an array for a few pictures 
                by: {
                    _id: "u101",
                    fullname: "Alon Cohen",
                    imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg"
                },
                loc: {
                    lat: 32.109,
                    lng: 34.855,
                    name: "Tel Aviv"
                },
                comments: [
                    {
                        id: "c1001",
                        by: {
                            _id: "u105",
                            fullname: "Bob M",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                        },
                        txt: "good one!",
                        likedBy: [
                            {
                                "_id": "u105",
                                "fullname": "Bob M",
                                "imgUrl": "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                            }
                        ]
                    },
                    {
                        id: "c1002",
                        by: {
                            _id: "u106",
                            fullname: "Leonardo D",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                        },
                        txt: "not good!",
                    }
                ],
                likedBy: [
                    {
                        _id: "u105",
                        fullname: "Bob M",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                    },
                    {
                        _id: "u106",
                        fullname: "Leonardo D",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                    }
                ],
                tags: ["fun", "romantic"]
            },
            {
                _id: "s102",
                txt: "Best trip ever",
                imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg', //an array for a few pictures 
                by: {
                    _id: "u102",
                    fullname: "Elton John",
                    imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/w9bbfi5coafses2hgmtg.avif"
                },
                loc: {
                    lat: 32.109,
                    lng: 34.855,
                    name: "Tel Aviv"
                },
                comments: [
                    {
                        id: "c1012",
                        by: {
                            _id: "u105",
                            fullname: "Bob M",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                        },
                        txt: "good one!",
                        likedBy: [
                            {
                                "_id": "u105",
                                "fullname": "Bob M",
                                "imgUrl": "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                            }
                        ]
                    },
                    {
                        id: "c1013",
                        by: {
                            _id: "u106",
                            fullname: "Leonardo D",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                        },
                        txt: "not good!",
                    }
                ],
                likedBy: [
                    {
                        _id: "u105",
                        fullname: "Bob M",
                        imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg'
                    },
                    {
                        _id: "u106",
                        fullname: "Leonardo D",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                    }
                ],
                tags: ["fun", "romantic"]
            },
            {
                _id: "s103",
                txt: "Best trip ever",
                imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg', //an array for a few pictures 
                by: {
                    _id: "u105",
                    fullname: "Alon Cohen",
                    imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/w9bbfi5coafses2hgmtg.avif"
                },
                loc: {
                    lat: 32.109,
                    lng: 34.855,
                    name: "Tel Aviv"
                },
                comments: [
                    {
                        id: "c1012",
                        by: {
                            _id: "u105",
                            fullname: "Bob M",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                        },
                        txt: "good one!",
                        likedBy: [
                            {
                                "_id": "u105",
                                "fullname": "Bob M",
                                "imgUrl": "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                            }
                        ]
                    },
                    {
                        id: "c1013",
                        by: {
                            _id: "u106",
                            fullname: "Leonardo D",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                        },
                        txt: "not good!",
                    }
                ],
                likedBy: [
                    {
                        _id: "u105",
                        fullname: "Bob M",
                        imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg'
                    },
                    {
                        _id: "u106",
                        fullname: "Leonardo D",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                    }
                ],
                tags: ["fun", "romantic"]
            },
            
        ]
        utilService.saveToStorage(STORAGE_KEY, stories)
    }
}
