import * as actionTypes from '../store/actTypes'

export const displayAllTasks = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/tasks')
        .then(response => response.json())
        .then(tasks => {
            dispatch({ type: actionTypes.DISPLAY, payload: tasks })
        })
    }
}

export const displayDetailedTasks = (year, month, day) => {
    return (dispatch) => {
        fetch(`http://localhost:8080/api/detailedTasks/${year}/${month}/${day}`)
        .then(response => response.json())
        .then(detailedTasks => {
            dispatch({ type: actionTypes.DETAILS, payload: detailedTasks})
        })
    }
}

export const displayYearMonth = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/year-month')
        .then(response => response.json())
        .then(yearMonth => {
            dispatch({ type: actionTypes.YEAR_MONTH, payload: yearMonth})
        })
    }
}

export const sortDisplayByMonth = (year, month) => {
    return (dispatch) => {
        fetch(`http://localhost:8080/api/sort/${year}/${month}`)
        .then(response => response.json())
        .then(sortedTask => {
            dispatch({ type: actionTypes.SORT_BY_MONTH, payload: sortedTask })        
        })
    }
}