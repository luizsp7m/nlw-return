import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
  );

  it("should be able to submit a feedback", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "Lorem Ipsum",
      screenshot: "data:image/png;base64-screen.png",
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
  });

  it("should not be to submit feedback without comment", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "",
      screenshot: "data:image/png;base64-screen.png",
    })).rejects.toThrow();
  });

  it("should not be to submit feedback without an invalid screenshot", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "Lorem Ipsum",
      screenshot: "123",
    })).rejects.toThrow();
  });
});