import {create} from "axios";

const BaseURL = create({
    baseURL: 'http://localhost:4000/api/v1'
  })

  export default BaseURL