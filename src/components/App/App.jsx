import { useEffect, useState } from 'react';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';
import css from '../App/App.module.css';
export const App = () => {
  const options = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [option, setOption] = useState(() => {
    const savedOption = window.localStorage.getItem('saved-options');
    if (savedOption) {
      return JSON.parse(savedOption);
    }
    return options;
  });

  const updateFeedback = feedbackType => {
    setOption({
      ...option,
      [feedbackType]: option[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setOption(options);
  };

  const { good, neutral, bad } = option;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem('saved-options', JSON.stringify(option));
  }, [option]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        value={totalFeedback}
        onClick={updateFeedback}
        onReset={resetFeedback}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          value={option}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};
