
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
        _id: '',
        createdAt: null/* Date.now() */,
        txt: '',
        imgUrl: '',
        by: {
            _id: '',
            username: '',
            fullname: '',
            imgUrl: '',
        },
        loc: {
            lat: null,
            lng: null,
            name: '',
        },
        comments: [

        ],
        likedBy: [

        ],
        tags: [

        ],

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
                createdAt: 1614020199000,
                txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis vitae recusandae optio eum expedita, quasi maxime laudantium iste ex, quam quas obcaecati culpa! Quo ex ratione at omnis, deserunt totam non doloribus minus eum inventore ipsam sint recusandae blanditiis quaerat dignissimos voluptates iusto vitae cupiditate voluptatibus expedita incidunt magni. Corporis accusamus, quidem omnis sapiente ad impedit nihil, ut eligendi aut a at inventore. Perspiciatis quas accusamus non doloribus nihil quam quisquam dolorem dolorum. Cumque, voluptatem facere fugit officiis sequi nesciunt accusamus repellat aliquid, enim ab aut ex velit sapiente dolore, voluptas expedita pariatur necessitatibus? Cumque, ea architecto? Maxime, numquam!",
                imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610789/cld-sample-3.jpg", //an array for a few pictures 
                by: {
                    _id: "u101",
                    username: "alon_cohen15",
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
                        _id: "c1001",
                        by: {
                            _id: "u105",
                            username: "bob_m_55",
                            fullname: "Bob Marley",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                        },
                        txt: "good one2!",
                        likedBy: [
                            {
                                _id: "u105",
                                username: "bob_m_55",
                                fullname: "Bob Marley",
                                imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                            }
                        ]
                    },
                    {
                        _id: "c1002",
                        by: {
                            _id: "u106",
                            username: "leonardo_d7",
                            fullname: "Leonardo D",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                        },
                        txt: "not good!",
                    }
                ],
                likedBy: [
                    {
                        _id: "u155",
                        username: "bob_m_55",
                        fullname: "Bob Marley",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                    },
                    {
                        _id: "u106",
                        username: "leonardo_d7",
                        fullname: "Leonardo D",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                    },
                    {
                        _id: "u185",
                        username: "alon_cohen15",
                        fullname: "Bob Marley",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                    },
                    {
                        _id: "u116",
                        username: "leonardo_d7",
                        fullname: "Leonardo D",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                    }

                ],
                tags: ["fun", "romantic"]
            },
            {
                _id: "s1022",
                createdAt: 1614020199000,
                txt: "Best trip ever",
                imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1710876562/evlpojozwalqinxetngj.png', //an array for a few pictures 
                by: {
                    _id: "u102",
                    username: "elton_j",
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
                        _id: "c10121",
                        by: {
                            _id: "u105",
                            username: "bob_m_55",
                            fullname: "Bob Marley",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                        },
                        txt: "good one!",
                        likedBy: [
                            {
                                _id: "u105",
                                username: "bob_m_55",
                                fullname: "Bob Marley",
                                imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                            }
                        ]
                    },
                    {
                        _id: "c10131",
                        by: {
                            _id: "u106",
                            username: "leonardo_d7",
                            fullname: "Leonardo D",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                        },
                        txt: "not good3!",
                    }
                ],
                likedBy: [
                    {
                        _id: "u105",
                        username: "bob_m_55",
                        fullname: "Bob Marley",
                        imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg'
                    },
                    {
                        _id: "u106",
                        username: "leonardo_d7",
                        fullname: "Leonardo D",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                    }
                ],
                tags: ["fun", "romantic"]
            },
            {
                _id: "s103",
                createdAt: 1614020199000,
                txt: "Once upon a time, amidst the whispers of autumn, a group of friends embarked on what would become the best trip ever. Their destination? A secluded cabin nestled in the heart of a lush, emerald forest, surrounded by towering trees adorned with vibrant hues of red, orange, and gold. As they ventured deeper into nature's embrace, the crisp air filled their lungs, invigorating their spirits with each breath.\n\
                      The journey was not without its challenges—a winding path dotted with fallen leaves and hidden obstacles tested their resolve. Yet, fueled by laughter and anticipation, they pressed on, their camaraderie strengthening with every step.\n\
                      Upon reaching their destination, the cabin greeted them with open arms, its rustic charm a sanctuary from the chaos of everyday life. Surrounded by the serenity of nature, they exchanged stories around a crackling fire, the warmth of friendship banishing the chill of the evening air.\n\
                      Days melted into nights as they explored the wilderness, their adventures weaving tales of wonder and discovery. From tranquil hikes through sun-dappled trails to exhilarating leaps into crystal-clear lakes, each moment was a testament to the beauty of the natural world and the joy of shared experiences.\n\n\n\
                      As the sun dipped below the horizon, painting the sky in a kaleidoscope of colors, they gathered beneath a blanket of stars, their hearts overflowing with gratitude for the memories made and the bonds forged.\
                      In that fleeting moment, surrounded by the whispers of the forest and the laughter of friends, they realized that the best trip was not defined by the miles traveled or the sights seen, but by the moments shared and the memories created. And as they bid farewell to their woodland retreat, they carried with\
                      them a treasure trove of experiences—a testament to the magic of adventure and the enduring power of friendship",
                imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg', //an array for a few pictures 
                by: {
                    _id: "u105",
                    username: "alon_cohen15",
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
                        _id: "c10124",
                        by: {
                            _id: "u105",
                            username: "bob_m_55",
                            fullname: "Bob Marley",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                        },
                        txt: "good one!4",
                        likedBy: [
                            {
                                _id: "u105",
                                username: "bob_m_55",
                                fullname: "Bob Marley",
                                imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                            }
                        ]
                    },
                    {
                        _id: "c10134",
                        by: {
                            _id: "u106",
                            username: "leonardo_d7",
                            fullname: "Leonardo D",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                        },
                        txt: "not good5!",
                    }
                ],
                likedBy: [
                    {
                        _id: "u105",
                        username: "bob_m_55",
                        fullname: "Bob Marley",
                        imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg'
                    },
                    {
                        _id: "u106",
                        username: "leonardo_d7",
                        fullname: "Leonardo D",
                        imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                    }
                ],
                tags: ["fun", "romantic"]
            },
            {
                _id: "s103103",
                createdAt: 1614020199000,
                txt: "Once upon a time, amidst the whispers of autumn, a group of friends embarked on what would become the best trip ever. Their destination? A secluded cabin nestled in the heart of a lush, emerald forest, surrounded by towering trees adorned with vibrant hues of red, orange, and gold. As they ventured deeper into nature's embrace, the crisp air filled their lungs, invigorating their spirits with each breath.\n\
                      The journey was not without its challenges—a winding path dotted with fallen leaves and hidden obstacles tested their resolve. Yet, fueled by laughter and anticipation, they pressed on, their camaraderie strengthening with every step.\n\
                      Upon reaching their destination, the cabin greeted them with open arms, its rustic charm a sanctuary from the chaos of everyday life. Surrounded by the serenity of nature, they exchanged stories around a crackling fire, the warmth of friendship banishing the chill of the evening air.\n\
                      Days melted into nights as they explored the wilderness, their adventures weaving tales of wonder and discovery. From tranquil hikes through sun-dappled trails to exhilarating leaps into crystal-clear lakes, each moment was a testament to the beauty of the natural world and the joy of shared experiences.\n\n\n\
                      As the sun dipped below the horizon, painting the sky in a kaleidoscope of colors, they gathered beneath a blanket of stars, their hearts overflowing with gratitude for the memories made and the bonds forged.\
                      In that fleeting moment, surrounded by the whispers of the forest and the laughter of friends, they realized that the best trip was not defined by the miles traveled or the sights seen, but by the moments shared and the memories created. And as they bid farewell to their woodland retreat, they carried with\
                      them a treasure trove of experiences—a testament to the magic of adventure and the enduring power of friendship",
                imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1710876980/zmkipvkca5nibwyaj3df.png', //an array for a few pictures 
                by: {
                    _id: "u105",
                    username: "alon_cohen15",
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
                        _id: "c101243",
                        by: {
                            _id: "u105",
                            username: "bob_m_55",
                            fullname: "Bob Marley",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                        },
                        txt: "good one!4",
                        likedBy: [
                            {
                                _id: "u105",
                                username: "bob_m_55",
                                fullname: "Bob Marley",
                                imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621521/aeae5m1qhzebjs7qehl4.avif"
                            }
                        ]
                    },
                    {
                        _id: "c101343",
                        by: {
                            _id: "u106",
                            username: "leonardo_d7",
                            fullname: "Leonardo D",
                            imgUrl: "https://res.cloudinary.com/dvzrhwosk/image/upload/v1705621520/ysjamm1btzcm7ryldehw.avif"
                        },
                        txt: "not good5!",
                    }
                ],
                likedBy: [
                    {
                        _id: "u105",
                        username: "bob_m_55",
                        fullname: "Bob Marley",
                        imgUrl: 'https://res.cloudinary.com/dvzrhwosk/image/upload/v1705610752/sample.jpg'
                    },
                    {
                        _id: "u106",
                        username: "leonardo_d7",
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
