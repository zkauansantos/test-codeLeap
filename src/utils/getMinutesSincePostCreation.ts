export default function getMinutesSincePostCreation(timeWasPosted: string): string {
  const postDate: Date = new Date(timeWasPosted);
  const now: Date = new Date();
  const differenceInMs: number = now.getTime() - postDate.getTime();
  const differenceInMin = Math.floor(differenceInMs / (1000 * 60));

  if (differenceInMin < 60) {
    return `${differenceInMin} minutes ago`;
  }
  const diffInHours = Math.floor(differenceInMin / 60);
  return `${diffInHours} hour(s) ago`;
}
