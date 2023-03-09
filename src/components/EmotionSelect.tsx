import { map } from "ramda";
import React, { useState } from "react";

type EmotionSelectType = string;

interface EmotionSelectProps {
  children?: React.ReactNode;
  getter: EmotionSelectType;
  setter: React.Dispatch<React.SetStateAction<string>>;
}

const emotions: string[][] = [
  ["Ecstacy", "Joy", "Serenity"],
  ["Admiration", "Trust", "Acceptance"],
  ["Terror", "Fear", "Apprehension"],
  ["Amazement", "Surprise", "Distraction"],
  ["Grief", "Sadness", "Pensiveness"],
  ["Loathing", "Disgust", "Boredom"],
  ["Rage", "Anger", "Annoyance"],
  ["Vigilance", "Anticipation", "Interest"],
]

function rollDie(min: number, max: number): number {
  return Math.floor(Math.random() * max) + min;
}

export default function EmotionSelect(props: EmotionSelectProps) {
  const {getter, setter} = props

  function randomEmotion(_event: any) {
    const set = rollDie(1, emotions.length + 1)
    const withinSet = rollDie(1, 3)
    setter(emotions[set - 1][withinSet - 1])
  }

  return (
    <>
      <div className="field has-addons">
        <div className="control">
          <div className="select">
            <select
              value={getter}
              onChange={(event) => setter(event.target.value)}
            >
              {map(
                emotionList => map(
                  emotion => <option>{emotion}</option>,
                  emotionList
                ), emotions
              )}
            </select>
          </div>
        </div>
        <div className="control">
          <button className="button is-info" onClick={randomEmotion}>
            <span className="icon">
              <i className="fa-solid fa-dice"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
