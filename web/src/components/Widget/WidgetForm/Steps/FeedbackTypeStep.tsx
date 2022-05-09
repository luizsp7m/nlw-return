import { CloseButton } from "../../CloseButton";
import { feedbackTypes, FeedbackType } from "../index";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-md leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-5 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-gray-200 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-sky-400 focus:border-sky-400 focus:outline-none"
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              key={key}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span className="text-sm">{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  );
}