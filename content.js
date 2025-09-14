document.addEventListener("SC_HOTKEY", (e) => {
  const command = e.detail;

  if (command === "play_pause") {
    const btn = document.querySelector(".playControl");
    if (btn) btn.click();
  }

  if (command === "next_track") {
    const btn = document.querySelector(".skipControl__next");
    if (btn) btn.click();
  }

  if (command === "previous_track") {
    const btn = document.querySelector(".skipControl__previous");
    if (btn) btn.click();
  }

  if (command === "like_track") {
    const likeBtn = document.querySelector(
        ".playControls__soundBadge button.sc-button-like, " +
        ".playbackSoundBadge button.sc-button-like"
    );
    if (likeBtn && likeBtn.offsetParent !== null) {
        likeBtn.click();
    }
  }
});