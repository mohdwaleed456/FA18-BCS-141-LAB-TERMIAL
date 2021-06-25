import GenericService from "./GenericService";
class RecordsService extends GenericService {
  constructor() {
    super();
  }
  addRecord = (data) => this.post("records", data);
  
  getRecords = (page = 1, perPage = 10) =>
    this.get("records?page=" + page + "&perPage=" + perPage);
  getSingleRecord = (id) => this.get("records/" + id);
}

let recordService = new RecordsService();
export default recordService;
