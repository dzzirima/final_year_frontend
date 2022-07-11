import {create} from "axios";

const BaseURL = create({
    // baseURL: 'https://finalyearproject3.herokuapp.com/api/v1'
    baseURL: 'http://localhost:4000/api/v1'
  })

  export default BaseURL