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

function save(storyToSave) {
    if (storyToSave._id) {
        return storageService.put(STORAGE_KEY, storyToSave)
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
       // imgUrl: '',
        /* type: '',
        minBatteryStatus: 0,
        maxBattery: '',
        model: '' */
    }
}




