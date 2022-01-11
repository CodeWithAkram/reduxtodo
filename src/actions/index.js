export const addItems = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteItem = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const deleteAll = () => {
    return {
        type: "DELETE_ALL_TODO"
    }
}