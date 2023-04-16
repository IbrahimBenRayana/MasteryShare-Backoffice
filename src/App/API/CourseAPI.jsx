import axios from "axios"



export const addCourse = async course => {
    console.log(course)
    try {
      let response = await axios.post(
        "http://localhost:3001/api/courses/add",
        course
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
  