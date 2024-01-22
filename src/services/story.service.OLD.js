
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'story'

export const storyService = {
    query,
    getById,
    save,
    remove,
    getEmptyStory,
    addStoryMsg,
    stories,
}
window.cs = storyService


async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(storyId) {
    return httpService.get(`story/${storyId}`)
}

async function remove(storyId) {
    return httpService.delete(`story/${storyId}`)
}
async function save(story) {
    var savedStory
    if (story._id) {
        savedStory = await httpService.put(`story/${story._id}`, story)

    } else {
        savedStory = await httpService.post('story', story)
    }
    return savedStory
}

async function addStoryMsg(storyId, txt) {
    const savedMsg = await httpService.post(`story/${storyId}/msg`, {txt})
    return savedMsg
}


function getEmptyStory() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}



const stories = [{
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
