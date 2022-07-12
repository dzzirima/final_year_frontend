import {create} from "axios";

const BaseURL = create({
    baseURL: 'https://gugufinal.herokuapp.com/api/v1'
    // baseURL: 'http://localhost:4000/api/v1'
  })

  export default BaseURL