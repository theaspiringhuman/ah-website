**Date:** <% tp.date.now("MM-DD-YYYY") %>

#videojournals

<%*
/**
 * Prompts:
 * 1) YouTube URL
 * 2) Transcript (multi-line)
 * Then outputs:
 * - Square embed using the extracted video ID
 * - A thumbnail image (optional, but nice for blog vibe)
 * - Transcript below
 */

const url = await tp.system.prompt("Paste YouTube URL");
const match = url?.match(/(?:youtu\.be\/|v=|\/embed\/)([A-Za-z0-9_-]{11})/);
const id = match ? match[1] : "";

// If the URL is weird, you’ll still get a chance to paste the ID directly
const videoId = id || await tp.system.prompt("Couldn't detect the video ID. Paste the 11-character YouTube ID:");

const transcript = await tp.system.prompt("Paste transcript (multi-line).", "", true);

// Build thumbnail URL (YouTube standard)
const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

// Output block
tR += `
<div class="yt-square">
  <iframe
    src="https://www.youtube.com/embed/${videoId}?rel=0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

## Transcript

${transcript}
`;
%>