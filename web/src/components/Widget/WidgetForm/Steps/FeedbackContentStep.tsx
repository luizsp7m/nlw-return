import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          className="top-5 left-5 absolute text-slate-400 hover:text-slate-500"
          type="button"
          onClick={onFeedbackRestartRequested}
          title="Voltar"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-md leading-6 flex items-center gap-2">
          <img className="w-6 h-5" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-slate-400 border-zinc-600 dark:border-slate-600 bg-transparent rounded-md focus:border-sky-400 focus:ring-sky-400 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo"
          onChange={({ target }) => setComment(target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 bg-sky-400 text-slate-50 rounded-md border border-transparent flex flex-1 justify-center items-center text-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-sky-400 transition-colors disabled:opacity-50 disabled:hover:bg-sky-400"
          >
            { isSendingFeedback ? <Loading /> : "Enviar feedback" }
          </button>
        </footer>
      </form>
    </>
  );
}