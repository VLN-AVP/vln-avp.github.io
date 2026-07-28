document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.querySelector("[data-copy-target]");

  if (!copyButton) {
    return;
  }

  copyButton.addEventListener("click", async () => {
    const target = document.getElementById(copyButton.dataset.copyTarget);

    if (!target) {
      return;
    }

    const originalLabel = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      copyButton.textContent = "Copied";
    } catch {
      copyButton.textContent = "Select & copy";
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(target);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    window.setTimeout(() => {
      copyButton.textContent = originalLabel;
    }, 1800);
  });
});
