import Header from "../components/Header";
import CommunityCardGrid from "../components/CardGrid/CommunityCardGrid";

//dummy data
const forums = [
  { id: 1, title: "Abuse Survivors", postCount: 120 },
  { id: 2, title: "Rape Victims", postCount: 85 },
  { id: 3, title: "Mental Health Support", postCount: 230 },
  { id: 4, title: "Domestic Violence Survivors", postCount: 90 },
  { id: 5, title: "Sexual Assault Survivors", postCount: 110 },
  { id: 6, title: "Childhood Trauma", postCount: 75 },
  { id: 7, title: "Self-Harm Recovery", postCount: 60 },
  { id: 8, title: "Addiction Recovery", postCount: 95 },
  { id: 9, title: "Anxiety and Panic Attacks", postCount: 140 },
  { id: 10, title: "PTSD Support", postCount: 125 },
  { id: 11, title: "Eating Disorders", postCount: 55 },
  { id: 12, title: "Coping with Grief", postCount: 80 },
  { id: 13, title: "Bullying Survivors", postCount: 70 },
  { id: 14, title: "Living with Depression", postCount: 200 },
  { id: 15, title: "Survivor's Guilt", postCount: 50 },
  { id: 16, title: "Crisis of Identity", postCount: 45 },
  { id: 17, title: "Coping with Trauma", postCount: 85 },
  { id: 18, title: "Managing Stress", postCount: 100 },
  { id: 19, title: "Support for Victims of Incest", postCount: 65 },
  {
    id: 20,
    title: "Living with Borderline Personality Disorder",
    postCount: 90,
  },
  { id: 21, title: "Recovering from Narcissistic Abuse", postCount: 80 },
  { id: 22, title: "Facing Social Anxiety", postCount: 110 },
  { id: 23, title: "Financial Abuse Awareness", postCount: 40 },
  { id: 24, title: "Sexual Orientation and Identity", postCount: 120 },
];
// Add more forums as needed

function Home() {
  return (
    <div className="App">
      <Header />
      <CommunityCardGrid forums={forums} />
    </div>
  );
}

export default Home;
