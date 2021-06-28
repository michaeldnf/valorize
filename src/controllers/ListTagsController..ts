import { Request, Response } from "express";
import { RepositoryNotTreeError } from "typeorm";
import { ListTagsService } from "../services/listTagsService";

class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagsService = new ListTagsService();
    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}

export { ListTagsController };