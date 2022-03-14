import { Service } from "./service.js";

export class Controller {
  constructor(service) {
    this.service = new Service()
  }

  async getFileStream(fileName) {
    return this.service.getFileStream(fileName)
  }
}