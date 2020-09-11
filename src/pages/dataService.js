import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com/docs/",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  getLoginForm() {
    return this.client.post(this.url + " login");
  }
}
export default DataService;
