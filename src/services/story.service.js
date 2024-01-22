import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const storyService = {
    query,
    save,
    remove,
    getById,
    createStory,
    getDefaultFilter
}

const STORAGE_KEY = 'stories'

_createStories()

async function query(filterBy) {
    let stories = await storageService.query(STORAGE_KEY)
    // if (filterBy) {
    //     let { minBatteryStatus, model = '' } = filterBy
    //     minBatteryStatus = minBatteryStatus || 0
    //     const regexModelTerm = new RegExp(model, 'i')
    //     robots = robots.filter(robot =>
    //         regexModelTerm.test(robot.model) &&
    //         robot.batteryStatus > minBatteryStatus
    //     )
    // }
    return stories
}

function getById(_id) {
    return storageService.get(STORAGE_KEY, _id)
}

function remove(_id) {
    return storageService.remove(STORAGE_KEY, _id)
}

function save(storytToSave) {
    if (storyToSave._id) {
        return storageService.put(STORAGE_KEY, storytToSave)
    } else {
        storyToSave.isOn = false
        return storageService.post(STORAGE_KEY, storyToSave)
    }
}

function createStory(/* model = '', type = '', batteryStatus = 100 */) {
    return {
        // model,
        // batteryStatus,
        // type
    }
}

function getDefaultFilter() {
    return {
        _id: '',
        txt: '',
        imgUrl: '',
        /* type: '',
        minBatteryStatus: 0,
        maxBattery: '',
        model: '' */
    }
}

function _createStories() {
    let stories = utilService.loadFromStorage(STORAGE_KEY)
    if (!stories || !stories.length) {
        stories = [
            {
                _id: "s101",
                txt: "Best trip ever",
                imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg", //an array for a few pictures 
                by: {
                    _id: "u101",
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
                imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg", //an array for a few pictures 
                by: {
                    _id: "u101",
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
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                    },
                    {
                        _id: "u106",
                        fullname: "Leonardo D",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                    }
                ],
                tags: ["fun", "romantic"]
            }
        ]
        utilService.saveToStorage(STORAGE_KEY, stories)
    }
}




