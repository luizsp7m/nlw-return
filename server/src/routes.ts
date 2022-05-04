import express from "express";

import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrimsaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const primsaFeedbacksRepository = new PrimsaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const subtmitFeedbackUseCase = new SubmitFeedbackUseCase(
    primsaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await subtmitFeedbackUseCase.execute({
    type, comment, screenshot
  });

  response.status(201).send();
});