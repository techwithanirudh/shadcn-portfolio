import { ViewTransitions } from 'next-view-transitions';

export function TransitionProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return <ViewTransitions>{children}</ViewTransitions>;
}
