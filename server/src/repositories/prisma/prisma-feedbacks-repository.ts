import { prisma } from "../../prisma";
import { FeedbackCreateDate, FeedbacksRepository } from "../feedbacks-repository";

export class PrimsaFeedbacksRepository implements FeedbacksRepository {
  async create({type, comment, screenshot }: FeedbackCreateDate) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    });
  }
}