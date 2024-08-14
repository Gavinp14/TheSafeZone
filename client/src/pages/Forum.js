import React from "react";
import Postform from "../components/PostForm/Postform";
import ThreadGrid from "../components/ThreadGrid/ThreadGrid";
import { useParams } from "react-router-dom";

//dummmy data to show title on forum page
const subforumData = {
  1: "Abuse Survivors",
  2: "Rape Victims",
  3: "Mental Health Support",
  4: "Domestic Violence Survivors",
  5: "Sexual Assault Survivors",
  6: "Childhood Trauma",
  7: "Self-Harm Recovery",
  8: "Addiction Recovery",
  9: "Anxiety and Panic Attacks",
  10: "PTSD Support",
  11: "Eating Disorders",
  12: "Coping with Grief",
  13: "Bullying Survivors",
  14: "Living with Depression",
  15: "Survivor's Guilt",
  16: "Crisis of Identity",
  17: "Coping with Trauma",
  18: "Managing Stress",
  19: "Support for Victims of Incest",
  20: "Living with Borderline Personality Disorder",
  21: "Recovering from Narcissistic Abuse",
  22: "Facing Social Anxiety",
  23: "Financial Abuse Awareness",
  24: "Sexual Orientation and Identity",
};

function Forum() {
  const { id } = useParams();

  const title = subforumData[id];

  return (
    <div className="text-center mt-3">
      <h1>{title}</h1>
      <ThreadGrid />
    </div>
  );
}

export default Forum;
