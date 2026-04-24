# Video Files

This directory contains the video files for the portfolio.

## Currently Available

### Standard Video Projects
- `Raw-1.mp4` - Raw footage for Podcast Style Editing
- `Edit_1.mp4` - Edited version for Podcast Style Editing

### Audio-to-Video Project (Special)
- `Audio-to-video.mpeg` - Raw audio file
- `Edit-Audio-to-edit.mp4` - Final edited video from audio

## Additional Projects

To add more projects to the portfolio, place video files in this directory with the following naming convention:

- `Raw-2.mp4` / `Edit-2.mp4` - Cinematic Edit
- `Raw-3.mp4` / `Edit-3.mp4` - Short-form Viral Edit
- `Raw-4.mp4` / `Edit-4.mp4` - YouTube Content Enhancement

After adding files, update `src/sections/Portfolio.tsx` to include the new projects.

## Notes
- Videos should be optimized for web (H.264 codec, reasonable file sizes)
- For best performance, use lazy loading and proper compression
