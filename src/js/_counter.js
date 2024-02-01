function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    const numElement = entry.target.querySelector(".num");
    const targetNumber = parseInt(numElement.getAttribute("data-target"));

    if (entry.isIntersecting) {
      resetCounter(numElement);
      startCounter(numElement, targetNumber, observer);
    }
  });
}

function resetCounter(numElement) {
  numElement.textContent = 0;
}

function startCounter(numElement, targetNumber, observer) {
  const totalDuration = 1000; // Adjust the total duration for all counters to complete

  let startTimestamp;
  function updateCounter(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = (timestamp - startTimestamp) / totalDuration;

    const currentNumber = Math.min(
      Math.floor(targetNumber * progress),
      targetNumber
    );
    numElement.textContent = currentNumber.toLocaleString(); // Use toLocaleString for formatting

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      // Stop observing when counting is complete
      observer.unobserve(numElement.parentElement);
    }
  }

  requestAnimationFrame(updateCounter);
}

document.querySelectorAll(".numbers__box").forEach((counterSection) => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  observer.observe(counterSection);
});
