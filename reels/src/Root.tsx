import React from 'react';
import { Composition, type CalculateMetadataFunction } from 'remotion';
import { Reel } from './Reel';
import { ContactSheet, SHEET_THUMB, type SheetProps } from './ContactSheet';
import { ReelSchema, parseReel, type ReelInput } from './spec';
import { FPS, HEIGHT, WIDTH, layout } from './timing';
import gapgaQuloq from '../content/gapga-quloq.json';
import bolalarOlami from '../content/bolalar-olami.json';

/*
 * One composition per content file. To add a reel: drop a JSON in content/, import it
 * here, and it appears in Studio with every field editable in the props panel.
 * Duration always comes from the spec (sum of scene beats), never set by hand.
 */
const REELS: ReelInput[] = [gapgaQuloq as ReelInput, bolalarOlami as ReelInput];

const calculateMetadata: CalculateMetadataFunction<ReelInput> = ({ props }) => ({
  durationInFrames: layout(parseReel(props)).totalFrames,
});

const sheetMetadata: CalculateMetadataFunction<SheetProps> = ({ props }) => {
  const rows = Math.ceil(props.images.length / props.cols);
  const even = (n: number) => n + (n % 2);
  return {
    width: even(props.cols * (SHEET_THUMB.w + SHEET_THUMB.gap) + SHEET_THUMB.gap),
    height: even(rows * (SHEET_THUMB.h + SHEET_THUMB.label + SHEET_THUMB.gap) + SHEET_THUMB.gap),
  };
};

export const Root: React.FC = () => (
  <>
    <Composition
      id="contact-sheet"
      component={ContactSheet}
      defaultProps={{ images: [], labels: [], cols: 8 } as SheetProps}
      calculateMetadata={sheetMetadata}
      durationInFrames={1}
      fps={FPS}
      width={1080}
      height={1080}
    />
    {REELS.map((spec) => (
      <Composition
        key={spec.id}
        id={spec.id}
        component={Reel}
        schema={ReelSchema}
        defaultProps={spec}
        calculateMetadata={calculateMetadata}
        durationInFrames={FPS * 30}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    ))}
  </>
);
