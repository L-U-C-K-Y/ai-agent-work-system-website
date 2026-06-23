import { Composition, Folder } from "remotion";

import { ProductLoop, type ProductLoopVariant } from "./product-loop";

const fps = 30;
const durationInFrames = 300;
const width = 1920;
const height = 1080;

const compositions = [
  {
    id: "HomeHero",
    variant: "home",
  },
  {
    id: "PlatformGraph",
    variant: "platform",
  },
  {
    id: "AIAdoptionJourney",
    variant: "adoption",
  },
] as const satisfies readonly {
  id: string;
  variant: ProductLoopVariant;
}[];

export function RemotionRoot() {
  return (
    <Folder name="JobDoneAI">
      {compositions.map((composition) => (
        <Composition
          component={ProductLoop}
          defaultProps={{ variant: composition.variant }}
          durationInFrames={durationInFrames}
          fps={fps}
          height={height}
          id={composition.id}
          key={composition.id}
          width={width}
        />
      ))}
    </Folder>
  );
}
