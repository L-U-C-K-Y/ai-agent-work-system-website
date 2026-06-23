#!/usr/bin/env bash
set -euo pipefail

out_dir="public/videos/jobdone-ai"
tmp_dir="${out_dir}/.tmp"

mkdir -p "${tmp_dir}"

render_video() {
  local composition="$1"
  local name="$2"
  local poster_frame="$3"

  pnpm exec remotion render remotion/index.ts "${composition}" "${tmp_dir}/${name}.mp4" \
    --codec=h264 \
    --crf=28 \
    --pixel-format=yuv420p

  ffmpeg -y -hide_banner -loglevel error \
    -i "${tmp_dir}/${name}.mp4" \
    -an \
    -movflags +faststart \
    -c:v copy \
    "${out_dir}/${name}.mp4"

  pnpm exec remotion still remotion/index.ts "${composition}" "${tmp_dir}/${name}-poster.png" \
    --frame="${poster_frame}"

  ffmpeg -y -hide_banner -loglevel error \
    -i "${tmp_dir}/${name}-poster.png" \
    -frames:v 1 \
    -q:v 5 \
    "${out_dir}/${name}-poster.jpg"
}

render_video "HomeHero" "home-hero" 150
render_video "PlatformGraph" "platform-graph" 150
render_video "AIAdoptionJourney" "ai-adoption-journey" 150

rm -rf "${tmp_dir}"
